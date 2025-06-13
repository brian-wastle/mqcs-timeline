import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-tictactoe',
  imports: [CommonModule, LightboxComponent],
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent {
  // one-image “album” per lightbox – now with a thumbVideo
  imageData = [
  [{ src: 'assets/images/screenshots/screenshot1.webp', caption: '', thumbVideo: 'assets/video/video1.mp4' }],
  [{ src: 'assets/images/screenshots/screenshot2.webp', caption: '', thumbVideo: 'assets/video/video3.mp4' }],
  [{ src: 'assets/images/screenshots/screenshot3.webp', caption: '', thumbVideo: 'assets/video/video4.mp4' }],
  [{ src: 'assets/images/screenshots/screenshot4.webp', caption: '', thumbVideo: 'assets/video/video5.mp4' }],
  [{ src: 'assets/images/screenshots/screenshot5.webp', caption: '', thumbVideo: 'assets/video/video6.mp4' }],
  [{ src: 'assets/images/screenshots/screenshot6.webp', caption: '', thumbVideo: 'assets/video/video7.mp4' }],
  [{ src: 'assets/images/screenshots/screenshot7.webp', caption: '', thumbVideo: 'assets/video/video8.mp4' }],
  [{ src: 'assets/images/screenshots/screenshot8.webp', caption: '', thumbVideo: 'assets/video/video2.mp4' }]
];
}
