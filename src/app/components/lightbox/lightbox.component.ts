import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lightbox } from 'ngx-lightbox';
import { LightboxModule } from 'ngx-lightbox';


@Component({
  selector: 'app-lightbox',
  imports: [CommonModule, LightboxModule],
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  private _imageData: Array<any> = [];

  /** video file shown as the thumbnail */
  thumbVideo = '';

  album: Array<any> = [];

  @Input({ required: true })
  set imageData(value: Array<any>) {
    this._imageData = value ?? [];

    /* build the album for ngx-lightbox (images only) */
    this.album = this._imageData.map((item: any) => ({
      src: item.src,
      caption: item.caption
    }));

    /* keep the video path for the thumbnail */
    this.thumbVideo = this._imageData[0]?.thumbVideo ?? '';
  }

  constructor(private lightbox: Lightbox) {}

  open(): void {
    this.lightbox.open(this.album, 0, {
      centerVertically: true,
      resizeDuration: 0.001,
      fitImageInViewPort: true,
      showZoom: true
    });
  }

  /* simple mouse-over helpers */
  play(ev: MouseEvent) {
    const v = ev.target as HTMLVideoElement;
    void v.play();
  }
  reset(ev: MouseEvent) {
    const v = ev.target as HTMLVideoElement;
    v.pause();
    v.currentTime = 0;
  }
}