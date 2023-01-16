import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private userService: UsersService) {}

  register() {
    const user = { username: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.accessToken);
    });
  }
}
