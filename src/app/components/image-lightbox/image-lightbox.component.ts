import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-lightbox',
  imports: [CommonModule],
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.scss']
})
export class ImageLightboxComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  isZoomed = false;

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }

  close() {
    this.isZoomed = false;
  }
}
