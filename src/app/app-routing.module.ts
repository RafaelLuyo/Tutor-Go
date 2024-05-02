import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScoreComponent} from "./TutorGo/components/score/score.component";
import {ScheduleComponent} from "./TutorGo/components/schedule/schedule.component";
import {CalendarComponent} from "./TutorGo/components/calendar/calendar.component";
import {HomeComponent} from "./TutorGo/students/components/home/home.component";
import {ValoracionesComponent} from "./TutorGo/students/components/valoraciones/valoraciones.component";
import {TutorSeleccionadoComponent} from "./TutorGo/students/components/tutor-seleccionado/tutor-seleccionado.component";
import {EditProfileComponent} from "./TutorGo/students/components/edit-profile/edit-profile.component";
import {ShowProfileComponent} from "./TutorGo/students/components/show-profile/show-profile.component";
import {EditProfileTutorComponent} from "./TutorGo/tutors/components/edit-profile-tutor/edit-profile-tutor.component";

const routes: Routes = [
  { path: 'score/:id', component: ScoreComponent },
  { path: 'schedule/:idTutor', component: ScheduleComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'student-home', component:HomeComponent},
  { path: 'student-valoraciones', component:ValoracionesComponent},
  { path: 'tutor-seleccionado', component:TutorSeleccionadoComponent},
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'show-profile', component: ShowProfileComponent},
  { path: 'edit-profile-tutor', component: EditProfileTutorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
