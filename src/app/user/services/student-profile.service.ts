import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Publication} from "../../publication/model/publication";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService extends BaseService<Publication>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/studentprofiles';
  }

  getStudentProfileId(id: number){
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
