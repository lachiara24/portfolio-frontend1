import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/Proyecto';
import { environment } from 'src/environments/environment';

const baseUrl = environment.URL + 'persona';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  getAll(personaId: any): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${baseUrl}/${personaId}/proyecto`);
  }

  get(id: any): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${baseUrl}/proyecto/${id}`);
  }

  create(personaId: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${personaId}/proyecto`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/proyecto/${id}`, data);
  }

  updatePhoto(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/proyecto/${id}/photo`, data);
  }

  delete(personaId: any, id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${personaId}/proyecto/${id}`);
  }
}
