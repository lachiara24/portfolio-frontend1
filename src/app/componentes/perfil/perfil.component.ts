import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario: Usuario = {
    nombre: "Ludmila", apellido: "Chiara", 
    titulo: "Full Stack Developer Jr.", imgPerfil: "gato.webp", imgPortada: "margaritas.jpg"
  }

  nombre: any;

  constructor(private userService: UsersService){}

  
}
