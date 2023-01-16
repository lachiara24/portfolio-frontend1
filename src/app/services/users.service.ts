import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/auth';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, user);
  }

  logout(){
    localStorage.removeItem('auth_token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token')!==null);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/register`, user);
  }

  setToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  getUserLogged(): Observable<any>  {
    const token = this.getToken();
    let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.getToken()}`)
    }
    return this.http.get(`${baseUrl}/username`, header);
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
