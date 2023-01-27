import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  isLogged: boolean = false;
  
  usuario: Usuario = {
    nombre: "Ludmila", apellido: "Chiara", 
    titulo: "Full Stack Developer Jr.", imgPerfil: "gato.webp", imgPortada: "margaritas.jpg"
  }

  persona: Persona;

  nombre: any;

  constructor(private tokenService: TokenService,
    private personaService: PersonaService){}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.usuario.nombre = this.tokenService.getUsername();
      this.personaService.getPersona().subscribe((data:any) => {
        this.persona = data;
        console.log(this.persona);
        this.usuario.nombre = this.persona.nombre;
        this.usuario.titulo = this.persona.profesion;
      });
    }
  }
  
}
