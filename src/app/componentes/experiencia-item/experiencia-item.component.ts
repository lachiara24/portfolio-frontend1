import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Experiencia } from '../../models/Experiencia';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  constructor(private tokenService: TokenService){}

  isLogged: boolean = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  @Input() item: Experiencia;
  @Output() onDeleteItem = new EventEmitter<Experiencia>();
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;

  onDelete(item: Experiencia){
    this.onDeleteItem.emit(item);
  }
}
