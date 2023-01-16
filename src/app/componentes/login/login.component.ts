import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private userService: UsersService,
    private router: Router) {}

  login() {
    const user = {username: this.email, password: this.password};
    // Conecto al backend si el login es correcto
    this.userService.login(user).subscribe( data => {
      // guardo el token en localStorage
      this.userService.setToken(data.accessToken);
      // redirecciono al home
      this.router.navigateByUrl('/');
    });
  }
}
