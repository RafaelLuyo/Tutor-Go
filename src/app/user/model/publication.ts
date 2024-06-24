import {Mentor} from "../../user/model/mentor";
import {MentorProfile} from "../../user/model/mentor-profile";

export class Publication {
  id : number;
  title: string;
  description: string;
  image: string[];
  views: number;
  likes: number;
  mentorProfile:MentorProfile;
  mentorProfileId:number;

  constructor(
    id: number,
    title:string,
    description: string,
    image: string[],
    views: number,
    likes: number,
    mentorProfile:MentorProfile,
    mentorProfileId:number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.views = views;
    this.likes = likes;
    this.mentorProfile = mentorProfile;
    this.mentorProfileId = mentorProfileId;
  }

}
