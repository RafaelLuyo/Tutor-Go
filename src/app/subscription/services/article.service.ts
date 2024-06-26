import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { Article } from '../model/article';

const header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleURL = 'http://localhost:8080/api/v1/articles/';

  constructor(private httpClient: HttpClient) { }
    public list(): Observable<Article[]> {
        return this.httpClient.get<Article[]>(this.articleURL + 'list', header);
    }
    public detail(id: number): Observable<Article> {
        return this.httpClient.get<Article>(this.articleURL + `detail/${id}`, header);
    }
}
