import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from '../../models/Educacion';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged: boolean = false;
  personaId: string = '1';
  educacion?: Educacion[];
 

  constructor(private educacionService: EducacionService,
    private router: Router,
    private tokenService: TokenService) { }
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.personaId = this.tokenService.getPersonaId();
      //console.log(this.personaId);
    }   
    this.retrieveEducacions();
  }

  retrieveEducacions(): void {
    this.educacionService.getAll(this.personaId)
      .subscribe({
        next: (data) => {
          this.educacion = data;
          // console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  delete(item: Educacion){
    this.educacionService.delete(this.personaId, item.id)
      .subscribe({
        next: (res) => {
          //console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }

  @Input() color: string;
  @Input() titulo: string;

  faPlus = faPlus;


}
