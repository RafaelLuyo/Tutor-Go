import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentProfileService} from "../../../user/services/student-profile.service";
import {StudentProfile} from "../../../user/model/student-profile";
@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit{
  id: number=1;
  studentProfile: StudentProfile | undefined
  constructor(private router:Router,
              private route: ActivatedRoute,
              private studentProfileService: StudentProfileService
  ) {
    this.id= 1;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

  }
  shouldRun = true;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getStudentProfileId(this.id)
  }
  navigateHome() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['home'],{ queryParams: { id: this.id } });
  }

  navigateSubscription() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['subscription'],{ queryParams: { id: this.id } });
  }

  navigateMentorProfile() {
    this.getStudentProfileId(this.id)
    this.router.navigate([`mentor-profiles`],{ queryParams: { id: this.id } });
  }

  navigateStudentProfile() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['student-profile/'+this.id],{ queryParams: { id: this.id } });
  }
  navigateSetting() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['settings'],{ queryParams: { id: this.id } });
  }

  navigateNotification() {
    this.getStudentProfileId(this.id)
    this.router.navigate(['notification'],{ queryParams: { id: this.id } });
  }

  navigateLogin() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getStudentProfileId(id: number): void {
    this.studentProfileService.getStudentProfileId(id).subscribe((data: any) => {
      if (data != null) {
        this.studentProfile = data;
      }
    });
  }

}
