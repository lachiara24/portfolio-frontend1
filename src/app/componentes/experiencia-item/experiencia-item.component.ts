import { Component, Input } from '@angular/core';
import { Experiencia } from '../Experiencia';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent {
  @Input() exp: Experiencia;
}
