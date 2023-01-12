import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from '../../models/Proyecto';
import { faPenToSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent {
  @Input() proyecto: Proyecto;

  @Output() onDeleteItem = new EventEmitter<Proyecto>();
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;

  onDelete(item: Proyecto){
    this.onDeleteItem.emit(item);
  }
}
