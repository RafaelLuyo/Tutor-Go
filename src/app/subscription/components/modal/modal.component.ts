import { Component, OnInit, Input } from '@angular/core';

import { PaymentService } from '../../services/payment.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {Mentor} from "../../../user/model/mentor";
import {MentorProfile} from "../../../user/model/mentor-profile";
import {MentorService} from "../../../user/services/mentor.service";
import {MentorProfileService} from "../../../user/services/mentor-profile.service";
import {StudentProfileService} from "../../../user/services/student-profile.service";
import {StudentProfile} from "../../../user/model/student-profile";
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    @Input() id: string = '';
    @Input() name: string = '';
    @Input() description: string = '';
    @Input() price: number = 0;
    @Input() idStudent: number = 0;

  mentor: Mentor;
  mentorProfile: MentorProfile;
  studentProfile: StudentProfile;
    constructor(
        public dialogRef: MatDialogRef<ModalComponent>,
        private paymentService: PaymentService,
        private router: Router,
        private mentorService: MentorService,
        private mentorProfileService: MentorProfileService,
        private studentProfileService: StudentProfileService,
    ) {
      this.mentor = {} as Mentor;
      this.mentorProfile = {} as MentorProfile;
      this.studentProfile = {} as StudentProfile;
    }

    ngOnInit() {}

    confirm(id: string): void {

        this.paymentService.confirm(id).subscribe(
            data => {
              Swal.fire('¡Success!', 'Payment confirmed successfully', 'success');

              this.studentProfileService.getStudentProfileId(this.idStudent).subscribe((response:any)=>{
                this.studentProfile = response;
              });
              console.log("a crear: "+this.studentProfile);
              this.mentor.subscription=this.name;
              this.mentor.idStudent=this.idStudent;
              this.mentorService.create(this.mentor).subscribe(
                (response: any) => {
                  //translate data
                  this.mentorProfile.idMentor=response.id;
                  this.mentorProfile.nick=this.studentProfile.nick;
                  this.mentorProfile.phoneNumber=this.studentProfile.phoneNumber;
                  this.mentorProfile.slogan=this.studentProfile.slogan;
                  this.mentorProfile.userProfilePhoto=this.studentProfile.userProfilePhoto;
                  this.mentorProfile.certificates=[];
                  //create student profile
                  this.mentorProfileService.create(this.mentorProfile).subscribe()
                  alert("mentor created")
                },
                (error) => {
                  console.error('Error en la solicitud:', error);
                }
              );
              this.dialogRef.close();
              this.router.navigate(['/subscripcion'],{ queryParams: { id: this.idStudent } });
            },
            err => {

                this.dialogRef.close();
                Swal.fire('Error', 'There was an error confirming the payment', 'error');
            }
        );
    }

    cancel(id: string): void {
        this.paymentService.cancel(id).subscribe(
            data => {

                this.dialogRef.close();
                Swal.fire('Error', 'Payment canceled', 'error');
            },
            err => {

                this.dialogRef.close();
                Swal.fire('Error', 'There was an error canceling the payment', 'error');
            }
        );
    }

    closeModal(): void {
        this.dialogRef.close();
    }


}
