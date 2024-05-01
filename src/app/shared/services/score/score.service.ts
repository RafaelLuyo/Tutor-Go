import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get<any>(`${this.baseUrl}Score/scores/student/${id}`);
  }

  getAll() {
    return this.http.get<any[]>(`${this.baseUrl}Score`);
  }

  create(data: any) {
    return this.http.post<any>(`${this.baseUrl}Score`, data);
  }
}
