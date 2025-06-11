import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, LightboxModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public albums: Array<any> = [];
  constructor(private lightbox: Lightbox) {
    
      const src = 'assets/images/solarsystemmap.webp';
      const caption = '';
      const thumb = 'assets/images/solarsystemmap.webp';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this.albums.push(album);
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index, {
      centerVertically: true,
      resizeDuration: 0.001,
      fitImageInViewPort: true,
      showZoom: true
    });
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }


}