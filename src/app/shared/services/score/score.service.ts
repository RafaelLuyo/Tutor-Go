import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    private baseUrl = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    getAllScores(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}scores`);
    }

    getScoresByStudentId(studentId: number, filter?: string) {
        let url = `${this.baseUrl}scores?studentId=${studentId}`;
        if (filter) {
            url += `&status=${filter}`;
        }
        return this.http.get<any[]>(url);
    }


    createScore(data: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}scores`, data);
    }
}
