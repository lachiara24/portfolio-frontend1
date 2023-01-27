import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  personaId: number = 1;
  id: any;
  addMode = true;
  currentExperiencia: Experiencia;

  constructor(private fb: FormBuilder,
    private experienciaService: ExperienciaService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        empresa: ['', Validators.required],
        puesto: ['', Validators.required],
        ubicacion: '',
        fechaInicio: '',
        fechaFin: '',
      }
    );
    this.personaId = this.route.snapshot.params["personaId"];
    this.id = this.route.snapshot.params["id"];
    if (this.id != undefined) {
      this.getExperiencia(this.id);   
      this.addMode = false;
    }
  }

  getExperiencia(id: string): void {
    this.experienciaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentExperiencia = data;
          this.form.patchValue({
            empresa: this.currentExperiencia.empresa,
            puesto: this.currentExperiencia.puesto,
            ubicacion: this.currentExperiencia.ubicacion,
            fechaInicio: this.currentExperiencia.fechaInicio,
            fechaFin: this.currentExperiencia.fechaFin
          })
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  create(): void {
    console.log(JSON.stringify(this.form.value, null, 2));
    this.experienciaService.create(this.personaId,this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/']);
        },
        error: (e) => console.error(e)
      });
  }

  update(){
    console.log(JSON.stringify(this.form.value, null, 2));
    this.experienciaService.update(this.id,this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/']);
        },
        error: (e) => console.error(e)
      });
  }

  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if(this.addMode){
      this.create();
    }else{
      this.update();
    }
  }


  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
