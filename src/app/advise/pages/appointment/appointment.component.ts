import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Publication} from "../../../publication/model/publication";
import {StudentProfile} from "../../../user/model/student-profile";
import {PublicationService} from "../../../publication/services/publication.service";
import {StudentService} from "../../../user/services/student.service";
import {StudentProfileService} from "../../../user/services/student-profile.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  showOverlay = false;
  id: number=0;
  idPublication: string="";
  publication: Publication;
  studentProfile: StudentProfile;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private arquimentorService: PublicationService,
              private studentService: StudentProfileService
              ) {
    // Obtén el parámetro de consulta 'currentUrl'
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.route.queryParams.subscribe(params => {
      this.idPublication = params['idPublication'];
    });
    this.publication = {} as Publication;
    this.studentProfile = {} as StudentProfile;
  }

  ngOnInit(): void {
    this.arquimentorService.getPublicationId(Number(this.idPublication)).subscribe( (data: any) => {
      console.log("data de la publicacion");
      if (data != null) {
        this.publication = data;
      }
    });
    this.studentService.getStudentProfileId(Number(this.id)).subscribe( (data: any) => {
      console.log(data);
      console.log("data del student");
      if (data != null) {
        console.log("data del student cooewe");
        this.studentProfile = data;
      }
    });
  }
  openOverlay() {
    console.log(this.idPublication);

    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  back() {

    this.router.navigate(["publication/"+this.idPublication],{ queryParams: { id: this.id } });
  }
}
