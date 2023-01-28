import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
// import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(//private userService: UsersService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private fb: FormBuilder,
    private renderer2: Renderer2) {}

  @ViewChild('signUp') signUpButton: ElementRef;
  @ViewChild('signIn') signInButton: ElementRef;
  @ViewChild('container') container: ElementRef;

  ngAfterViewInit() {  
    const container = this.container.nativeElement;
    const signInButton = this.signInButton.nativeElement;
    const signUpButton = this.signUpButton.nativeElement;

    this.renderer2.listen(signInButton, 'click', (event)=> {
      this.renderer2.removeClass(container, 'right-panel-active');
    })

    this.renderer2.listen(signUpButton, 'click', (event)=> {
      this.renderer2.addClass(container, 'right-panel-active');
    })
  }

  formLogin: FormGroup;
  formRegister: FormGroup;
  submitted = false;
  isLogged: boolean = false;
  isLoginFailed: boolean = false;
  loginUsuario!: LoginUsuario;
  roles: string[] = [];

  nuevoUsuario: NuevoUsuario;

  ngOnInit() {

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFailed = false;
      this.roles = this.tokenService.getAuthorities();
    }
    this.formRegister = this.fb.group(
      {
        nombre: ['', Validators.required],
        nombreUsuario: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
    this.formLogin = this.fb.group(
      {
        nombreUsuario: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formRegister.controls;
  }

  get f2(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  register() {
    this.submitted = true;

    if(!this.formRegister.valid){
      return;
    }

    this.nuevoUsuario = new NuevoUsuario(this.formRegister.value.nombre, 
      this.formRegister.value.nombreUsuario, this.formRegister.value.password);
    this.authService.newUser(this.nuevoUsuario).subscribe(data => {
      console.log(data);
      this.renderer2.removeClass(this.container.nativeElement, 'right-panel-active');
    })
  }

  login(){
    this.submitted = true;

    if(!this.formLogin.valid){
      return;
    }

    this.loginUsuario = new LoginUsuario(this.formLogin.value.nombreUsuario, this.formLogin.value.password);
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
