import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, startWith, takeUntil } from 'rxjs/operators';

@Directive({ selector: '[parallaxBg]' })
export class ParallaxBgDirective implements OnInit, OnDestroy {
  // <1 for slower bg scroll
  @Input() ratio = 0.4;

  // Supply bg image height in px
  @Input() textureHeight = 540;

  private destroy$ = new Subject<void>();

  constructor(
    private el: ElementRef<HTMLElement>,
    private rd: Renderer2,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    // If the CSS sets background-size:auto; we can read the rendered height once
    const imgHeight = this.getTextureHeight();

    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(
          startWith(0),
          auditTime(16),          // ~60 fps
          takeUntil(this.destroy$),
        )
        .subscribe(() => {
          const y = window.scrollY * this.ratio;
          /* Modulo makes it loop forever */
          const offset = -(y % imgHeight);         // negative = move up
          this.rd.setStyle(
            this.el.nativeElement,
            'background-position-y',
            `${offset}px`,
          );
        });
    });
  }

  private getTextureHeight(): number {
    const bgSize = getComputedStyle(this.el.nativeElement).backgroundSize;
    const parsed = parseFloat(bgSize);
    if (!Number.isNaN(parsed) && bgSize.includes('px')) {
      return parsed;
    }
    return this.textureHeight; // fallback (e.g. 512 px)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
