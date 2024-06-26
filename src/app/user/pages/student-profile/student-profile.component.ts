import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudentProfile} from "../../model/student-profile";
import {StudentProfileService} from "../../services/student-profile.service";
import {MatTableDataSource} from "@angular/material/table";
import {FileUploadService} from "../../../publication/services/file-upload.service";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
    userProfile: StudentProfile | undefined;
    isEditing = false;
    dataSource: MatTableDataSource<any>;
    idRouter:Number | undefined;
  images: any = [];
  urlImage: string | undefined;

  constructor(
    private studentProfileService: StudentProfileService,
    public route: ActivatedRoute,
    private fileUploadService: FileUploadService

  ) {
    this.dataSource = new MatTableDataSource<any>();
  }
  toggleEdit(): void {
    // @ts-ignore
    if (this.userProfile.userProfilePhoto==""){
      // @ts-ignore
      this.userProfile.userProfilePhoto="https://cdn.discordapp.com/attachments/1149549726748921939/1175717928063225928/images.png?ex=656c3fa5&is=6559caa5&hm=d6a6935bf1b8eeff5f2ee6b0ad85786c82ac00b04cd78163e624fd62c17a01e1&"
    }
    this.isEditing = true;
  }
  ngOnInit(): void {
    const studentProfileId = this.route.snapshot.params['studentProfileId'];
    this.getStudentProfileId(studentProfileId);
    this.idRouter=studentProfileId;
  }

  saveProfile(): void {
   this.isEditing = false;
    if (this.urlImage != undefined) {
      // @ts-ignore
      this.userProfile.userProfilePhoto = this.urlImage;
    }

      this.studentProfileService.update(this.userProfile?.id,this.userProfile).subscribe(
        (response: any) => {
          this.dataSource.data.push({...response});
          console.log(this.dataSource)
          this.dataSource.data = this.dataSource.data.map((sp: StudentProfile) => {
            console.log(sp);
            alert("profile editado")
            //this.router.navigate(['/']);
            return sp;
          });
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

  cancelEdit(): void {
    this.isEditing = false;
    // @ts-ignore
    this.studentProfileService.getStudentProfileId(this.idRouter).subscribe((response: any) => {
      this.userProfile = response;
    });
  }

  private getStudentProfileId(studentProfileId: number) {
    this.studentProfileService.getStudentProfileId(studentProfileId).subscribe((response: any) => {
      console.log(studentProfileId);
      this.userProfile = response;
      console.log(this.userProfile);
    });
  }


  onFileSelected(event: any): void {
    let archivoCapturado = event.target.files;

    for (let i = 0; i < archivoCapturado.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(archivoCapturado[i]);

      reader.onloadend = () => {
        console.log(reader.result);
        this.images.push(reader.result);
        this.fileUploadService.submitImage(this.userProfile?.id + " " + Date.now(), reader.result).then(urlImage => {
          console.log(urlImage);
          // @ts-ignore
          this.urlImage = urlImage;
        });
      }
    }
  }
}
