import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/students';
  }

  getStudentByUserId(id: number): any {
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
