import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  personaId: number = 1;
  id: any;
  addMode = true;
  currentProyecto: Proyecto;

  constructor(private fb: FormBuilder,
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        link: '',
      }
    );
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.getProyecto(this.id);   
      this.addMode = false;
    }
  }

  getProyecto(id: string): void {
    this.proyectoService.get(this.personaId, id)
      .subscribe({
        next: (data) => {
          this.currentProyecto = data;
          this.form.patchValue({
            nombre: this.currentProyecto.nombre,
            descripcion: this.currentProyecto.descripcion,
            link: this.currentProyecto.link
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
    this.proyectoService.create(this.personaId,this.form.value)
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
    this.proyectoService.update(this.personaId,this.id,this.form.value)
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
