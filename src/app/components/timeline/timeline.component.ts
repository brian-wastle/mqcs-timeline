// src/app/pages/timeline/timeline.component.ts
import { Component } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { ParallaxDirective }  from '../../directives/parallax/parallax.directive';
import { ParallaxBgDirective } from '../../directives/parallax-bg/parallax-bg.directive';

type Side = 'left' | 'right' | 'center';

interface TimelineEvent {
  type: 'event';
  year: number;
  text: string;
  gap?: number;              // px BEFORE this event (optional)
}

interface TimelineImage {
  type: 'image';
  src:  string;
  side?: Side;               // Defaults to 'center'
  width?: number;            // px (default = 320)
  ratio?: number;            // parallax speed (default = 1.15)
  gap?: number;              // px BEFORE this image
}

interface TimelineSpacer {
  type: 'spacer';
  gap:  number;              
}

type TimelineItem = TimelineEvent | TimelineImage | TimelineSpacer;

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, ParallaxDirective, ParallaxBgDirective],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  items: TimelineItem[] = [
    { type: 'spacer', gap: 300 },
    {
      type: 'event',
      year: 1987,
      text: 'CETI receives the first extraterrestrial technosignature.',
      gap: 160
    },
    {
      type: 'image',
      src:  'assets/images/roboarm2.png',
      side: 'left',
      width: 280,
      ratio: 2.25,
      gap:   80
    },

    /* ---------------  second milestone ----------------------- */
    {
      type: 'event',
      year: 1991,
      text: 'Prototype cabinet shown at CES.',
      gap: 120
    },

    /* ---------------  more content … ------------------------- */
    {
      type: 'image',
      src:   'assets/images/cabinet.webp',
      side:  'right',
      width: 320,
      ratio: 1.15,
      gap:   60
    },

    {
      type: 'event',
      year: 1995,
      text: 'Arcade release.',
      gap: 200
    },

    {
      type: 'image',
      src:  'assets/images/remaster.webp',
      side: 'center',
      width: 360,
      ratio: 1.15,
      gap: 40
    },

    {
      type: 'event',
      year: 2025,
      text: 'Full remaster announced.',
      gap: 240
    }
  ];

  /* ----------------------------------------------------------------
   * OPTIONAL HELPERS  (not mandatory, but handy if a template needs
   * a filtered list of only events or only images)
   * ---------------------------------------------------------------- */
  readonly events = this.items.filter(
    it => it.type === 'event'
  ) as TimelineEvent[];
}
