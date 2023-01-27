import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

const baseUrl = 'http://localhost:8080/api/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private tokenService: TokenService,
    private http: HttpClient) { }

  getPersona(){
    let username = this.tokenService.getUsername();
    return this.http.get(`${baseUrl}?username=${username}`);
  }
}
