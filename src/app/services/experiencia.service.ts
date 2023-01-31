import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/Experiencia';
import { environment } from 'src/environments/environment';

const baseUrl = environment.URL + 'persona';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  getAll(personaId: any): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${baseUrl}/${personaId}/experiencia`);
  }

  get(id: any): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${baseUrl}/experiencia/${id}`);
  }

  create(personaId: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${personaId}/experiencia`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/experiencia/${id}`, data);
  }

  delete(personaId: any, id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${personaId}/experiencia/${id}`);
  }
}
