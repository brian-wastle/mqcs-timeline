import { HostListener, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MQCS - Peer into the Future';
  imageScale = 1;
  maxScroll = 300;
  minScale = 0.8;

  @HostListener('window:scroll', [])
    onWindowScroll() {}
}
