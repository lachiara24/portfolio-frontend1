import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tokenService: TokenService,
    private personaService: PersonaService){ }

  isLogged: boolean = false;
  
  usuario: Persona = {
    id: 1,
    nombre: "Ludmila",
    apellido: "Chiara",
    profesion: "Full Stack Developer Jr.",
    info: "Hola soy Ludmila", imgPerfil: '', imgPortada: '',
    github: '', linkedin: ''
  }

  
  nombre: any;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.usuario.id = this.tokenService.getPersonaId()
      this.isLogged = true;
      this.personaService.getPersona().subscribe((data:any) => {
        this.usuario = data;
        console.log(this.usuario);
      });
    }else{
      this.personaService.getPersonaById(this.usuario.id)
        .subscribe((data:any) => {
          this.usuario = data;
        });
    }
  }
  
}
