import { Component } from '@angular/core';
import { Experiencia } from '../Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      nombre: 'Backend Developer', lugar: 'Google', tiempo: 'marzo 2020 - diciembre 2020', img: ''
    },
    {
      nombre: 'Frontend Developer', lugar: 'Uala', tiempo: 'marzo 2021 - octubre 2021', img: ''
    }
  ];
}
