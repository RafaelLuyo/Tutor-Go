import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

import {ActivatedRoute, Router} from "@angular/router";
import {StudentProfileService} from "../../../user/services/student-profile.service";
import {StudentProfile} from "../../../user/model/student-profile";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  id: number=1;
  studentProfile: StudentProfile | undefined
  constructor(private router:Router,
              private route: ActivatedRoute,
              private studentProfileService: StudentProfileService
  ) {
    this.id= 1;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });}
  shouldRun = true;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getStudentProfileId(this.id)
  }
  @ViewChild('sidenav') sidenav!: MatSidenav;

  getStudentProfileId(id: number): void {
    this.studentProfileService.getStudentProfileId(id).subscribe((data: any) => {
      if (data != null) {
        this.studentProfile = data;
      }
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    this.sidenav.close();
  }

  logout() {
    console.log("Sesión cerrada");

  }
  navigateLogin() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  navigateMentorProfile() {
    this.getStudentProfileId(this.id)
    this.router.navigate([`list-tutor/`+this.id],{ queryParams: { id: this.id } });
  }
  navigateHome() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['student-home'],{ queryParams: { id: this.id } });
  }
  navigateStudentProfile() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['student-profile/'+this.id],{ queryParams: { id: this.id } });
  }
  navigateEditStudent() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['edit-profile/'+this.id],{ queryParams: { id: this.id } });
  }
}
