import {Student} from "./student";

export class Mentor {
    subscription: string;
    student: Student;
  idStudent: number;
    constructor() {
        this.subscription = '';
        this.student = new Student();
      this.idStudent=0;
    }
}
