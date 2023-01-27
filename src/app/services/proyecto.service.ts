import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

const baseUrl = 'http://localhost:8080/api/persona';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  getAll(personaId: any): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${baseUrl}/${personaId}/proyecto`);
  }

  get(id: any): Observable<Proyecto> {
    return this.http.get(`${baseUrl}/proyecto/${id}`);
  }

  create(personaId: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${personaId}/proyecto`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/proyecto/${id}`, data);
  }

  delete(personaId: any, id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${personaId}/proyecto/${id}`);
  }
}
