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
  
  usuario: Usuario = {
    id: 1,
    nombre: "Ludmila Chiara",
    profesion: "Full Stack Developer Jr.", imgPerfil: "gato.webp", imgPortada: "margaritas.jpg",
    info: "Hola soy Ludmila"
  }

  persona: Persona;
  nombre: any;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.usuario.id = this.tokenService.getPersonaId()
      this.isLogged = true;
      this.personaService.getPersona().subscribe((data:any) => {
        this.persona = data;
        console.log(this.persona);
        this.usuario.nombre = this.persona.nombre;
        this.usuario.profesion = this.persona.profesion;
        this.usuario.info = this.persona.info;
        this.usuario.id = this.persona.id;
      });
    }
  }
  
}
