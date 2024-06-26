import { Injectable } from '@angular/core';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import {environment} from "../../../environments/environment";

firebase.initializeApp(environment.firebaseConfig);
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  storageRef = firebase.app().storage().ref();

  constructor() { }

  async submitImage(nombre:string,imagen64:any) {
      try {
        let response = await this.storageRef.child("images/"+nombre).putString(imagen64,"data_url");
        console.log(response);
        return await response.ref.getDownloadURL();
      }catch (e) {
        console.log(e);
        return null;
      }
  }

}
