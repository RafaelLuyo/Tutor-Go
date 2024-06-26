import {Component, OnInit} from '@angular/core';
import {SingUp} from "../../model/sing-up";
import {CreateAccountService} from "../../services/create-account.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {StudentService} from "../../services/student.service";
import {Student} from "../../model/student";
import {StudentProfileService} from "../../services/student-profile.service";
import {StudentProfile} from "../../model/student-profile";
import {MentorService} from "../../services/mentor.service";
import {Mentor} from "../../model/mentor";
import {MentorProfileService} from "../../services/mentor-profile.service";
import {MentorProfile} from "../../model/mentor-profile";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    miFormulario: FormGroup;
    singUp: SingUp;
    student: Student;
    studentProfile: StudentProfile;
    mentor: Mentor;
    mentorProfile: MentorProfile;
    dataSource: MatTableDataSource<any>;

    constructor(
        private createAccountService: CreateAccountService,
        private studentProfileService: StudentProfileService,
        private mentorService: MentorService,
        private mentorProfileService: MentorProfileService,
        private router: Router,
        private studentService: StudentService
    ) {
        this.student = {} as Student;
        this.singUp = {} as SingUp;
        this.studentProfile = {} as StudentProfile;
        this.mentor = {} as Mentor;
        this.mentorProfile = {} as MentorProfile;
        this.dataSource = new MatTableDataSource<any>();

        this.miFormulario = new FormGroup({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            role: new FormControl('', Validators.required)
        });
    }

    ngOnInit(): void {
        this.singUp.roles = ["ROLE_USER"];
    }

    registerAccount(): void {
        this.singUp.id = 0;
        this.singUp.username = this.miFormulario.get('userName')?.value;
        this.singUp.password = this.miFormulario.get('password')?.value;
        const selectedRole = this.miFormulario.get('role')?.value;
        selectedRole === 'ROLE_USER';
            this.createStudentAccount();

    }

    createStudentAccount(): void {
        this.student.firstName = this.singUp.username;
        this.student.password = this.singUp.password;
        this.student.email = "..@gmail.com";
        this.student.lastname = "~";
        this.student.subscription = "basico";

        this.createAccountService.singUp(this.singUp).subscribe(
            (response: any) => {
                this.dataSource.data.push({...response});
                this.dataSource.data = this.dataSource.data.map((p: SingUp) => {
                    this.studentService.create(this.student).subscribe(
                        (studentResponse: any) => {
                            this.dataSource.data.push({...studentResponse});
                            this.studentProfile.idStudent = studentResponse.id;
                            this.studentProfile.nick = "";
                            this.studentProfile.phoneNumber = "999999999";
                            this.studentProfile.slogan = "";
                            this.studentProfile.userProfilePhoto = "";
                            this.studentProfileService.create(this.studentProfile).subscribe();
                            alert("Student user created");
                        },
                        (error) => {
                            console.error('Error creating student:', error);
                        }
                    );
                    this.router.navigate(['/']);
                    return p;
                });
            },
            (error) => {
                console.error('Error creating account:', error);
            }
        );
    }


}
