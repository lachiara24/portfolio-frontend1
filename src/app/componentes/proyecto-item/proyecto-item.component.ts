import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Proyecto } from '../../models/Proyecto';
import { faPenToSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit{
  @Input() proyecto: Proyecto;

  @Output() onDeleteItem = new EventEmitter<Proyecto>();
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;

  isLogged: boolean = false;

  constructor(private tokenService: TokenService){}

  ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onDelete(item: Proyecto){
    this.onDeleteItem.emit(item);
  }
}
