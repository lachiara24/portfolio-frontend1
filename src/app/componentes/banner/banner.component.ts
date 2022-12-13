import { Component, Input } from '@angular/core';
import { Usuario } from '../Usuario';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() usuario: Usuario = {
    nombre: '', apellido: '', titulo: '', imgPerfil: '', imgPortada: ''
  };
  faPenToSquare = faPenToSquare;
}
