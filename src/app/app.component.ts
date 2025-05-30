import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxStarrySkyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mqcs-timeline';
}
