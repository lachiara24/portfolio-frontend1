import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.URL + 'persona';

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

  getPersonaById(personaId: any): Observable<Persona>{
    return this.http.get<Persona>(`${baseUrl}/${personaId}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updatePhotos(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}/photos`, data);
  }
}
