import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';
import { UsersService } from './users.service';
import { environment } from 'src/environments/environment';

const baseUrl = environment.URL + 'persona';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient,
    private usersService: UsersService) { 
  }

  getAll(personaId: any): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${baseUrl}/${personaId}/educacion`);
  }

  get(id: any): Observable<Educacion> {
    return this.http.get<Educacion>(`${baseUrl}/educacion/${id}`);
  }

  create(personaId: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${personaId}/educacion`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/educacion/${id}`, data);
  }

  delete(personaId: any, id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${personaId}/educacion/${id}`);
  }
}
