import { Component, Input } from '@angular/core';
import { Experiencia } from '../../models/Experiencia';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  experiencia?: Experiencia[];
  
  personaId: number = 1;

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.retrieveExperiencias();
  }

  retrieveExperiencias(): void {
    this.experienciaService.getAll(this.personaId)
      .subscribe({
        next: (data) => {
          this.experiencia = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  delete(item: Experiencia){
    this.experienciaService.delete(this.personaId, item.id)
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
  lista: Experiencia[] = [];
  
}
