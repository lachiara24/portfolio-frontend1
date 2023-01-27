import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import {NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombreUsuario: string;
  password: string;
  confirmPassword: string;

  constructor(private authService: AuthService,
    private router: Router){
  }
  // constructor(private userService: UsersService) {}

  // register() {
  //   const user = { username: this.email, password: this.password };
  //   this.userService.register(user).subscribe(data => {
  //     this.userService.setToken(data.accessToken);
  //   });
  // }

  nuevoUsuario: NuevoUsuario;

  register() {
    this.nuevoUsuario = new NuevoUsuario(this.nombreUsuario, this.password);
    this.authService.newUser(this.nuevoUsuario).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    })
  }
}
