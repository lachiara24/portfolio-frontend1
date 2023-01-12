import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from '../../models/Experiencia';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent {
  @Input() item: Experiencia;
  @Output() onDeleteItem = new EventEmitter<Experiencia>();
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;

  onDelete(item: Experiencia){
    this.onDeleteItem.emit(item);
  }
}
