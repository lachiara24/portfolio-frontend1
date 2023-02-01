import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from '../../models/Experiencia';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UsersService } from 'src/app/services/users.service';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  isLogged: boolean = false;
  
  experiencia?: Experiencia[];
  
  personaId: string = '1';

  constructor(private experienciaService: ExperienciaService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.personaId = this.tokenService.getPersonaId();
    }      
    this.retrieveExperiencias(); 
  }

  retrieveExperiencias(): void {
    this.experienciaService.getAll(this.personaId)
      .subscribe({
        next: (data) => {
          this.experiencia = data;
          // console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  delete(item: Experiencia){
    this.experienciaService.delete(this.personaId, item.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }


  @Input() color: string;
  @Input() titulo: string;

  faPlus = faPlus;
  lista: Experiencia[] = [];
  
}
