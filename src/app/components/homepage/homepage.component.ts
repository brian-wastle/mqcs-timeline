import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';
import { Lightbox } from 'ngx-lightbox';
import { ChironComponent } from '../chiron/chiron.component';
import { TictactoeComponent } from '../tictactoe/tictactoe.component';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, LightboxModule, ChironComponent, TictactoeComponent, LightboxComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public imageData: Array<object> = [{src:'assets/images/solarsystemmap.webp', caption:""}];

}