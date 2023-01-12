import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

const baseUrl = 'http://localhost:8080/api/persona';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  getAll(personaId: any): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${baseUrl}/${personaId}/educacion`);
  }

  get(personaId: any, id: any): Observable<Educacion> {
    return this.http.get(`${baseUrl}/${personaId}/educacion/${id}`);
  }

  create(personaId: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${personaId}/educacion`, data);
  }

  update(personaId: any, id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${personaId}/educacion/${id}`, data);
  }

  delete(personaId: any, id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${personaId}/educacion/${id}`);
  }
}
