import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {SingUp} from "../model/sing-up";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";
import {SingIn} from "../model/sing-in";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService extends BaseService<SingUp>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/authentication';
  }
  singUp(singUp: SingUp){
    console.log(singUp);
    return this.http.post(`${this.resourcePath()}/sign-up`,
      JSON.stringify(singUp), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getToken(){
    return localStorage.getItem('token');
  }

  singIn(singIn: SingIn) {
    console.log(singIn);

    return this.http.post(`${this.resourcePath()}/sign-in`,
      JSON.stringify(singIn), this.httpOptions,)
      .pipe(retry(2), catchError(this.handleError));
  }
}
