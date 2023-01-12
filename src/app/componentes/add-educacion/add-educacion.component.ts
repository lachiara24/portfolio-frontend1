import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit{
  addMode = true;

  form: FormGroup;
  submitted = false;
  personaId: number = 1;
  id: any;
  currentEducacion: Educacion;

  constructor(private fb: FormBuilder,
    private educacionService: EducacionService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        institucion: ['', Validators.required],
        titulo: ['', Validators.required],
        fechaInicio: '',
        fechaFin: ''
      }
    );  
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.getEducacion(this.id);   
      this.addMode = false;
    }
    
  }

  getEducacion(id: string): void {
    this.educacionService.get(this.personaId, id)
      .subscribe({
        next: (data) => {
          this.currentEducacion = data;
          this.form.patchValue({
            institucion: this.currentEducacion.institucion,
            titulo: this.currentEducacion.titulo,
            fechaInicio: this.currentEducacion.fechaInicio,
            fechaFin: this.currentEducacion.fechaFin
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
    this.educacionService.create(this.personaId,this.form.value)
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
    this.educacionService.update(this.personaId,this.id,this.form.value)
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
