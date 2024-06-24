import {Student} from "./student";

export class StudentProfile {
  constructor(
    public id: number,
    public nick:string,
    public phoneNumber: string,
    public slogan: string,
    public userProfilePhoto: string,
    public student: Student,
    public idStudent:number
  ) {}
}
