import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        profesion: ['', Validators.required],
        info: '',
      }
    );
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
    // this.proyectoService.update(this.id,this.form.value)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this.submitted = true;
    //       this.router.navigate(['/']);
    //     },
    //     error: (e) => console.error(e)
    //   });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
