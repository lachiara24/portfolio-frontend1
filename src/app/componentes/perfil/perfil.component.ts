import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  form: FormGroup;
  submitted = false;
  personaId: string = '1';
  currentPersona: Persona;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router){}

  ngOnInit() {
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        profesion: ['', Validators.required],
        info: '',
        imgPerfil: '',
        imgPortada: ''
      }
    );
    this.personaId = this.route.snapshot.params["personaId"];
    this.getPersona(this.personaId);
  }

  getPersona(id: string): void {
    this.personaService.getPersonaById(id)
      .subscribe({
        next: (data) => {
          this.currentPersona = data;
          this.form.patchValue({
            nombre: this.currentPersona.nombre,
            profesion: this.currentPersona.profesion,
            info: this.currentPersona.info
          })
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.update();
  }

  update(){
    console.log(JSON.stringify(this.form.value, null, 2));
    this.personaService.update(this.personaId, this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/']);
        },
        error: (e) => console.error(e)
      });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
