import { Component, Input } from '@angular/core';
import { Experiencia } from '../Experiencia';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  @Input() color: string;
  @Input() titulo: string;

  lista: Experiencia[] = [
    {
      nombre: 'Ingeniería Electrónica', lugar: 'Universidad Nacional de San Martin', tiempo: 'febrero 2020 - actualidad', img: ''
    },
    {
      nombre: 'Bachiller en Ciencias Económicas', lugar: 'Instituto Preciosísima Sangre', 
      tiempo: '2013 - 2019', img: ''
    }
  ];
}
