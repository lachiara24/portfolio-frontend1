import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  @Input() usuario: Persona;
}
