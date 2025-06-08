import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParallaxBgDirective } from '../app/directives/parallax-bg/parallax-bg.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParallaxBgDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MQCS - Peer into the Future';
  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }
}
