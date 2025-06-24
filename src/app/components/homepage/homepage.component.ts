import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChironComponent } from '../chiron/chiron.component';
import { TictactoeComponent } from '../tictactoe/tictactoe.component';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { PitchTextComponent } from '../pitch-text/pitch-text.component';
import { AddtlTextComponent } from '../addtl-text/addtl-text.component';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, ChironComponent, TictactoeComponent, LightboxComponent, PitchTextComponent, AddtlTextComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public imageData: Array<object> = [{src:'assets/images/solarsystemmap.webp', caption:""}];

}