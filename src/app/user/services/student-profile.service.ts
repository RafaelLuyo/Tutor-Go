import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {StudentProfile} from "../model/student-profile";
import {Publication} from "../model/publication";

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService extends BaseService<StudentProfile>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/studentprofiles';
  }

  getStudentProfileId(id: number){
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
