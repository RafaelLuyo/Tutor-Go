import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MentorProfile} from "../../model/mentor-profile";
import {MatTableDataSource} from "@angular/material/table";
import {MentorProfileService} from "../../services/mentor-profile.service";


@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit {
  userProfile: MentorProfile | undefined;
  isEditing = false;
  certificatesIsEmpty = true;
  dataSource: MatTableDataSource<any>;
  idRouter:Number | undefined;
  images: any = [];
  imagesC: any = [];
  urlImage: string | undefined;

  constructor(
    private mentorProfileService: MentorProfileService,
    private route: ActivatedRoute,

  ) {
    this.dataSource = new MatTableDataSource<any>();
  }
  toggleEdit(): void {
    // @ts-ignore
    if (this.userProfile.userProfilePhoto==""){
      // @ts-ignore
      this.userProfile.userProfilePhoto="https://cdn.discordapp.com/attachments/1149549726748921939/1175717928063225928/images.png?ex=656c3fa5&is=6559caa5&hm=d6a6935bf1b8eeff5f2ee6b0ad85786c82ac00b04cd78163e624fd62c17a01e1&"
    }
    this.isEditing = !this.isEditing;
  }
  ngOnInit(): void {
    const mentorId = this.route.snapshot.params['mentorProfileId'];
    this.getMentorProfileId(mentorId);
    this.idRouter=mentorId;
  }

  saveProfile(): void {

    this.isEditing = false;
    if (this.urlImage != undefined) {
      // @ts-ignore
      this.userProfile.userProfilePhoto = this.urlImage;
    }

    console.log("para subir "+ this.userProfile);
    this.mentorProfileService.update(this.userProfile?.id,this.userProfile).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        console.log(this.dataSource)
        this.dataSource.data = this.dataSource.data.map((sp: MentorProfile) => {
          console.log(sp);
          if (sp.certificates.length > 0) {
            this.certificatesIsEmpty = false;
          } else {
            this.certificatesIsEmpty = true;
          }
          alert("profile editado")
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
    this.mentorProfileService.getMentorProfileId(this.idRouter).subscribe((response: any) => {
      this.userProfile = response;
    });
  }

  private getMentorProfileId(mentorProfileId: number) {
    this.mentorProfileService.getMentorProfileId(mentorProfileId).subscribe((response: any) => {
      this.userProfile = response;
      console.log(this.userProfile);
      // @ts-ignore
      if (this.userProfile.certificates.length > 0) {
        this.certificatesIsEmpty = false;
      } else {
        this.certificatesIsEmpty = true;
      }
    });
  }



}

