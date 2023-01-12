import { Component } from '@angular/core';
import { Proyecto } from '../../models/Proyecto';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  faPlus = faPlus;
  proyecto: Proyecto[];
  personaId: number = 1;

  constructor(private proyectoService: ProyectoService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveProyectos();
  }

  retrieveProyectos(): void {
    this.proyectoService.getAll(this.personaId)
      .subscribe({
        next: (data) => {
          this.proyecto = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  delete(item: Proyecto){
    this.proyectoService.delete(this.personaId, item.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }

}
