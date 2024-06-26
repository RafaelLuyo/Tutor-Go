import {Component, OnInit} from '@angular/core';
import {SingUp} from "../../model/sing-up";
import {CreateAccountService} from "../../services/create-account.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {StudentService} from "../../services/student.service";
import {Student} from "../../model/student";
import {StudentProfileService} from "../../services/student-profile.service";
import {StudentProfile} from "../../model/student-profile";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  miFormulario: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  singUp :SingUp ;
  student: Student;
  studentProfile: StudentProfile;
  dataSource: MatTableDataSource<any>;
  constructor(
    private createAccountService: CreateAccountService,
    private studentProfileService: StudentProfileService,
    private router: Router,
    private studentService: StudentService,
  ) {
    this.student = {} as Student;
    this.singUp = {} as SingUp;
    this.studentProfile = {} as StudentProfile;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.singUp.roles= ["ROLE_USER"];
  }

  registerAccount(): void {
    this.singUp.id = 0;
    this.student.firstName=this.singUp.username;
    this.student.password=this.singUp.password;
    //translate data
    this.student.email="..@gmail.com";
    this.student.lastname="~";


    this.createAccountService.singUp(this.singUp).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        this.dataSource.data = this.dataSource.data.map((p: SingUp) => {
          console.log(p);

          //create student
          this.studentService.create(this.student).subscribe(
            (response: any) => {
              this.dataSource.data.push({...response});
              console.log(this.dataSource)
              this.dataSource.data = this.dataSource.data.map((p: Student) => {
                console.log(p);
                this.studentProfile.idStudent=p.id;


                return p;
              });

              //translate data
              this.studentProfile.nick="aquivatunick";
              this.studentProfile.phoneNumber="999999999";
              this.studentProfile.slogan="letsgo";
              this.studentProfile.userProfilePhoto="string";
              //create student profile
              this.studentProfileService.create(this.studentProfile).subscribe();
              alert("user created")
            },
            (error) => {
              console.error('Error en la solicitud:', error);
            }
          );


          this.router.navigate(['/']);
          return p;
        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
