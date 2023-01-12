import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{

  personaId: number = 1;

  constructor(
    private educacionService: EducacionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEducacion(this.route.snapshot.params["id"]);
  }

  getEducacion(id: string): void {
    this.educacionService.get(this.personaId, id)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
