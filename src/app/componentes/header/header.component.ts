import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private tokenService: TokenService){}

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  logOut(){
    this.tokenService.logOut();
    window.location.reload();
  }


}
