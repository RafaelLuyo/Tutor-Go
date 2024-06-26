import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PublicationService} from "../../services/publication.service";
import {Publication} from "../../model/publication";
import {StudentService} from "../../../user/services/student.service";
import {Student} from "../../../user/model/student";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  publicationsA: Array<Publication> = [];
  id: number=0;
  student: Student | undefined;
  constructor(private router:Router,
              private tutorgoService: PublicationService,
              private studentService: StudentService,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
  addPost(): void {
    this.router.navigate(['create-post'],{ queryParams: { id: this.id } });
  }

  ngOnInit(): void {
    this.tutorgoService.getAll().subscribe((response: any) => {
      this.publicationsA = response;
      console.log(this.publicationsA)
    });
    this.studentService.getStudentByUserId(this.id).subscribe((response: any) => {
      this.student = response;
    });
  }

}
