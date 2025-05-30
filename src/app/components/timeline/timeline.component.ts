// timeline.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from '../../directives/parallax/parallax.directive';
import { ParallaxBgDirective } from '../../directives/parallax-bg/parallax-bg.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, ParallaxDirective, ParallaxBgDirective],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  events = [
    {
      year: 1987,
      text: 'First concept sketches for Mister Quasar.',
      image: 'assets/events/1987-concept.webp',
    },
    {
      year: 1991,
      text: 'Prototype cabinet shown at CES.',
      image: 'assets/events/prototype.webp',
    },
    // …
  ];
}
