import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { faPenToSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent {
  constructor(public usersService: UsersService){}

  @Input() item: Educacion;
  @Output() onDeleteItem = new EventEmitter<Educacion>();
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;

  onDelete(item: Educacion){
    this.onDeleteItem.emit(item);
  }
}
