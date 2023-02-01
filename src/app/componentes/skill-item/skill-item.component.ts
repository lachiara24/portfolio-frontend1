import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Skill } from '../../models/Skill';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  constructor(private tokenService: TokenService){}

  isLogged: boolean = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  @Input() item: Skill;
  @Output() onDeleteItem = new EventEmitter<Skill>();
  faPenToSquare = faPenToSquare;
  faWindowClose = faWindowClose;

  onDelete(item: Skill){
    this.onDeleteItem.emit(item);
  }
}
