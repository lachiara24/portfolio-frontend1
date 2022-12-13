import { Component, Input } from '@angular/core';
import { Experiencia } from '../Experiencia';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent {
  @Input() item: Experiencia;
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;
}
