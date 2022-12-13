import { Component, Input } from '@angular/core';
import { Experiencia } from '../Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  @Input() experiencia: boolean = false;
  @Input() educacion: boolean = false;
  @Input() color: string;
  @Input() titulo: string;
  experiencias: Experiencia[] = [
    {
      nombre: 'Backend Developer', lugar: 'Google', tiempo: 'marzo 2020 - diciembre 2020', img: ''
    },
    {
      nombre: 'Frontend Developer', lugar: 'Uala', tiempo: 'marzo 2021 - octubre 2021', img: ''
    }
  ];
  educaciones: Experiencia[] = [
    {
      nombre: 'Ingeniería Electrónica', lugar: 'Universidad Nacional de San Martin', tiempo: 'febrero 2020 - actualidad', img: ''
    },
    {
      nombre: 'Bachiller en Ciencias Económicas', lugar: 'Instituto Preciosísima Sangre', 
      tiempo: '2013 - 2019', img: ''
    }
  ];
}
