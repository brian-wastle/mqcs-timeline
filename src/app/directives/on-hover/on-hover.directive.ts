import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'video[appHoverPlay]',
  standalone: true               // ⇦ no NgModule needed
})
export class HoverPlayDirective {
  private readonly video: HTMLVideoElement;
  private readonly canHover =
    matchMedia('(hover:hover) and (pointer:fine)').matches; // desktop only

  constructor(el: ElementRef<HTMLVideoElement>) {
    this.video = el.nativeElement;
  }

  @HostListener('mouseenter') play() {
    if (this.canHover) { this.video.currentTime = 0; this.video.play().catch(() => {}); }
  }
  @HostListener('mouseleave') reset() {
    if (this.canHover) { this.video.pause(); this.video.currentTime = 0; }
  }
}
