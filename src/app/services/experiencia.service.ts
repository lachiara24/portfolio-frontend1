import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/Experiencia';

const baseUrl = 'http://localhost:8080/api/persona';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  getAll(personaId: any): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${baseUrl}/${personaId}/experiencia`);
  }

  get(personaId: any, id: any): Observable<Experiencia> {
    return this.http.get(`${baseUrl}/${personaId}/experiencia/${id}`);
  }

  create(personaId: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${personaId}/experiencia`, data);
  }

  update(personaId: any, id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${personaId}/experiencia/${id}`, data);
  }

  delete(personaId: any, id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${personaId}/experiencia/${id}`);
  }
}
