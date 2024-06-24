import {Mentor} from "./mentor";

export class MentorProfile {
    constructor(
        public id: number,
        public nick:string,
        public phoneNumber: string,
        public slogan: string,
        public userProfilePhoto: string,
        public certificates: string[],
        public mentor: Mentor,
        public idMentor:number
    ) {}
}
