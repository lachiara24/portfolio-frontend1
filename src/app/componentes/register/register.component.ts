import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import {NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  // submitted: boolean = false;

  // form: FormGroup;

  // constructor(private authService: AuthService,
  //   private router: Router,
  //   private fb: FormBuilder){
  // }

  // ngOnInit(): void {
  //   this.form = this.fb.group(
  //     {
  //       nombre: ['', Validators.required],
  //       nombreUsuario: ['', Validators.required],
  //       password: ['', Validators.required]
  //     }
  //   );
  // }

    ngOnInit(): void {
      
    }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }
  // // constructor(private userService: UsersService) {}

  // // register() {
  // //   const user = { username: this.email, password: this.password };
  // //   this.userService.register(user).subscribe(data => {
  // //     this.userService.setToken(data.accessToken);
  // //   });
  // // }

  // nuevoUsuario: NuevoUsuario;

  // register() {
  //   this.nuevoUsuario = new NuevoUsuario(this.form.value.nombre, this.form.value.nombreUsuario, this.form.value.password);
  //   this.authService.newUser(this.nuevoUsuario).subscribe(data => {
  //     console.log(data);
  //     this.router.navigate(['']);
  //   })
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   if(!this.form.valid){
  //     return;
  //   }

  //   this.register();
  // }
}
