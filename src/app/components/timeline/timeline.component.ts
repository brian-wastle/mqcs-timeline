// src/app/pages/timeline/timeline.component.ts
import { Component } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { ParallaxDirective }  from '../../directives/parallax/parallax.directive';
import { ParallaxBgDirective } from '../../directives/parallax-bg/parallax-bg.directive';

type Side = 'left' | 'right' | 'center';

interface TimelineEvent {
  type: 'event';
  year: number;
  title: string,
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
      year: 2168,
      title: 'Technosignature Research Breakthrough',
      text: 'One hundred billion tons of freight are transported on Earth in one year. Two graduate researchers from the Univeristy of Los Angeles successfully identify technosignatures, laying critical groundwork for practical interplanetary travel.',
      gap: 200
    },
    {
      type: 'event',
      year: 2171,
      title: 'First Contact and Interstellar Data Exchange',
      text: 'Humanity initiates the first exchange of information with advanced extraterrestrial civilizations at the CETI Institute, significantly accelerating technological progress on Earth. Although these civilizations expressed concern that further contact could attract unwanted attention to our Solar System, they could not dampen the greatest minds of a generation from pressing forward in the crusade for space colonization.',
      gap: 200
    },
    {
      type: 'event',
      year: 2174,
      title: 'Initial Government-Backed Colonization Efforts',
      text: 'Major global powers, including the United States, China, the European Union, Japan, and India, launch colonization missions beyond Earth, establishing sustainable settlements on Venus and Mars.',
      gap: 200
    },
    {
      type: 'event',
      year: 2175,
      title: 'Launch of Heavy Carrier Ships: Daedalus and Perdix',
      text: 'The United States deploys two heavy carrier vessels, Daedalus and Perdix. Daedalus completes its mission and is decommissioned on Mars, while Perdix continues to Neptune with a rotating crew utilizing cryosleep.',
      gap: 200
    },
    {
      type: 'event',
      year: 2177,
      title: 'Milestone: Mars Travel',
      text: `Technological advancements enable a resource-delivery mission to Mars within a single week, dramatically increasing the efficiency and scope of interstellar logistics. The Aurora-Pallantis spacecraft's navigation plan was calculated entirely prior to launch, performed remotely, and maintained a steady velocity of .95 million miles per hour.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2179,
      title: 'Milestone: Saturn Travel',
      text: `A resource-delivery mission successfully maintains a velocity of 5.47 million miles per hour, reaching Saturn's orbit within one week, and marking a significant breakthrough in propulsion and navigation technology. The Arjuna spacecraft was not only notable for its speed, but also for being piloted by the first androids assigned a government ID in our Solar System's history.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2180,
      title: 'Contact with Less Advanced Civilizations',
      text: `The Perdix spacecraft is destroyed during an unexpected encounter with a hostile extraterrestrial civilization. The waking crew members are integrated into alien society, while the remaining cryosleep population are obliterated by RKV harpoons.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2180,
      title: 'Government Withdrawal from Interstellar Exploration',
      text: `Due to escalating costs and shifting political priorities, Earth's governments significantly reduce funding and support for interstellar travel initiatives, leaving colonies largely underfunded, and exploration efforts in private hands.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2181,
      title: 'Corporate-Owned Planetary Governance',
      text: `Five corporate-owned planetary bodies— BeckerFischer, Beaufort, Tenkyū-kai, Mnemosyne Robotics, and Bengaluru— are formally recognized as member states within the United Nations General Assembly, with each one initiating aggressive population growth strategies as a result. The Unified Android Identification Protocol (UAIP) is now compulsory in all robots at both the hardware and software levels.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2186,
      title: 'Extended Colonization Achievements',
      text: `Successful colonization programs led by private special interest groups result in permanent human settlements on Saturn's moons. Moon settlements serve as international resupply stations. Ports are built on Titan, Phobos, Europa and Ganymede.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2191,
      title: 'Organized Crime Threatens Colonization and Coalition',
      text: `The United Nations addresses the growing concern of organized crime networks undermining colonization, as annual theft and piracy result in the System-wide disappearance of one trillion tons of freight. This would be the first year in which less humans are born on Earth than on other bodies.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2193,
      title: `Privatization of Earth's Water Resources`,
      text: `Facing economic pressure, Earth becomes the final planet in the Solar System to privatize its water supply, leading to significant political and socioeconomic shifts. More water is now consumed in space than by terrestrial humans each year, although the Earth would experience a considerable decline in water exports over the next year.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2199,
      title: `Interplanetary Missile Attacks and Security Measures`,
      text: `Widespread civil unrest, culminating in three devastating terrorist attacks on Beaufort (formerly Venus) prompt an emergency closure of all planetary borders within the Solar System for one full year, emphasizing the need for enhanced corporate-led security and policing.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2200,
      title: `The 23rd Century and 'The Brand New Day' Plan`,
      text: `To commemorate the turn of the century, corporate owners of planets establish new stringent regulations governing interplanetary travel and commerce, significantly altering trade dynamics and transportation protocols across the Solar System. For the first time, android units are estimated to outnumber humans.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2219,
      title: `Widespread Consolidation of Shipping Carriers`,
      text: `Economic pressures force the consolidation of 80% of the interplanetary shipping industry into two massive conglomerates, while the number of small courier enterprises (fewer than fifty employees) rapidly increases.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2237,
      title: `Reduction in Freight and Renewed Interstellar Research`,
      text: `The smaller of the two shipping conglomerates, Batou Dynamics, files for bankruptcy twice in a 21 month period and is liquidated. Freight volumes within the Solar System decline by half over 1 year, coinciding with intensified scientific research efforts aimed at achieving practical, sustained interstellar travel.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2239,
      title: `Reopening of Planetary Borders with Enhanced Regulations`,
      text: `Interplanetary borders mostly reopen under a complex system of treaties and visa regulations designed to manage the risks associated with interplanetary travel and commerce.`,
      gap: 200
    },
    {
      type: 'event',
      year: 2240,
      title: `The Alliance of Solar Planets is Founded`,
      text: `A new multilateral governing body, ASP, is established with the aim of regulating interplanetary travel, facilitating fair resource-swapping, and maintaining peace among its member states. Membership is voluntary and supported by taxes, but due to a lack of existing precedent in outer space territory, the organization will initiate unilateral policing actions within its jurisdiction to ensure stability and cooperation. Upon its inception, both its budget and military were the largest of any sovereign state in history. Its combined annual GDP was estimated to be over 30 times larger than the GPD of Earth.`
    }
  ];
}
