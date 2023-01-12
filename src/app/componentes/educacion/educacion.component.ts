import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from '../../models/Educacion';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion?: Educacion[];
 
  personaId: number = 1;

  constructor(private educacionService: EducacionService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveEducacions();
  }

  retrieveEducacions(): void {
    this.educacionService.getAll(this.personaId)
      .subscribe({
        next: (data) => {
          this.educacion = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  delete(item: Educacion){
    this.educacionService.delete(this.personaId, item.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }

  @Input() color: string;
  @Input() titulo: string;

  faPlus = faPlus;


}
