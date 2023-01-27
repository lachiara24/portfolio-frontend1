import { Component, OnInit } from '@angular/core';
// import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  isLogged: boolean = false;
  isLoginFailed: boolean = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario: string;
  roles: string[] = [];

  constructor(//private userService: UsersService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService) {}

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFailed = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(){
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    console.log(this.loginUsuario);
    this.authService.login(this.loginUsuario).subscribe(data => {
      // console.log(data);
      this.isLogged = true;
      this.isLoginFailed = false;
      this.tokenService.setToken(data.accessToken);
      this.tokenService.setUserName(data.userName);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.tokenService.setPersonaId(data.id);
      this.router.navigate(['']);
    })
  }


 

  // login() {
  //   const user = {username: this.email, password: this.password};
  //   // Conecto al backend si el login es correcto
  //   this.userService.login(user).subscribe( data => {
  //     // guardo el token en localStorage
  //     this.userService.setToken(data.accessToken);
  //     // redirecciono al home
  //     this.router.navigateByUrl('/');
  //   });
  // }
}
