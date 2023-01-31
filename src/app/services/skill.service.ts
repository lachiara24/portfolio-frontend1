import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../models/Skill';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.URL + 'persona';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getAll(personaId: any): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${baseUrl}/${personaId}/skill`);
  }

  get(id: any): Observable<Skill> {
    return this.http.get<Skill>(`${baseUrl}/skill/${id}`);
  }

  create(personaId: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${personaId}/skill`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/skill/${id}`, data);
  }

  updatePhoto(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/skill/${id}/photo`, data);
  }

  delete(personaId: any, id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${personaId}/skill/${id}`);
  }
}
