import { Component } from '@angular/core';
import { Proyecto } from '../Proyecto';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  faPlus = faPlus;
  proyectos: Proyecto[] = [
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'},
    {titulo: 'Hola mundo', descripcion: 'hola', link: 'https://www.google.com/'}
  ];
}
