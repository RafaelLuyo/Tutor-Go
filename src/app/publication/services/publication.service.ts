import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseService} from "../../shared/services/base.service";
import {catchError, retry} from 'rxjs';
import {Publication} from "../model/publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService extends BaseService<Publication> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/publications';
  }

  getPublicationId(id: number){
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  incrementLike(id: number){
    return this.http.get(`${this.resourcePath()}/${id}/incrementLike`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  discountLike(id: number){
    return this.http.get(`${this.resourcePath()}/${id}/discountLike`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  incrementView(id: number){
    return this.http.get(`${this.resourcePath()}/${id}/incrementView`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
