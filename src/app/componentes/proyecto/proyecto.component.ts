import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/Proyecto';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  faPlus = faPlus;
  proyecto: Proyecto[];
  personaId: number = 1;

  constructor(private proyectoService: ProyectoService,
    private router: Router,
    private tokenService: TokenService) { }


  isLogged: boolean = false;
  
  ngOnInit(): void {
    this.retrieveProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
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
