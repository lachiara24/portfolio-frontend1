import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { faPenToSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/users.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
  constructor(private tokenService: TokenService){}

  @Input() item: Educacion;
  @Output() onDeleteItem = new EventEmitter<Educacion>();
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;

  isLogged: boolean = false;

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onDelete(item: Educacion){
    this.onDeleteItem.emit(item);
  }
}
