import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, map, startWith, takeUntil } from 'rxjs/operators';

@Directive({ selector: '[appParallax]' })
export class ParallaxDirective implements OnInit, OnDestroy {
  /** Ratio > 1  → layer moves faster than scroll (foreground)  
   *  0 – 1      → slower than scroll (background) */
  @Input() ratio = 1.2;

  private destroy$ = new Subject<void>();

  constructor(
    private element: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(
          startWith(0),
          map(() => window.scrollY),
          auditTime(16),                  // ≈60 fps throttle
          takeUntil(this.destroy$),
        )
        .subscribe(y => {
          // If ratio > 1, image outruns the page; exactly what we want
          this.renderer.setStyle(
            this.element.nativeElement,
            'transform',
            `translate3d(0, ${y * (this.ratio - 1)}px, 0)`,
          );
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
