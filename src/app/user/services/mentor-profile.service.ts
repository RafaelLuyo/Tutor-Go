import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";
import {MentorProfile} from "../model/mentor-profile";

@Injectable({
  providedIn: 'root'
})
export class MentorProfileService extends BaseService<MentorProfile>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/mentorprofiles';
  }

  getMentorProfileId(id: number){
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
