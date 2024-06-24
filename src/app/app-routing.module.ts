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
import {ShowProfileTutorComponent} from "./TutorGo/tutors/components/show-profile-tutor/show-profile-tutor.component";
import{ListTutorComponent} from "./TutorGo/students/components/list-tutor/list-tutor.component";
import{ChatComponent} from "./TutorGo/students/components/chat/chat.component";
import{RoleComponent} from "./TutorGo/components/role/role.component";
import {PageNotFoundComponent} from "./TutorGo/components/page-not-found/page-not-found.component";
import {RegisterComponent} from "./user/pages/register/register.component";
import {LoginComponent} from "./user/pages/login/login.component";
import {AuthGuard} from "./shared/helpers/auth.guard";


const routes: Routes = [
  { path: 'score/:id', component: ScoreComponent, canActivate: [AuthGuard] },
  { path: 'schedule/:idTutor', component: ScheduleComponent, canActivate: [AuthGuard]},
  { path: 'calendar', component: CalendarComponent,canActivate: [AuthGuard]},
  { path: 'student-home', component:HomeComponent,canActivate: [AuthGuard]},
  { path: 'student-valoraciones', component:ValoracionesComponent,canActivate: [AuthGuard]},
  { path: 'tutor-seleccionado', component:TutorSeleccionadoComponent,canActivate: [AuthGuard]},
  { path: 'edit-profile', component: EditProfileComponent,canActivate: [AuthGuard] },
  { path: 'show-profile', component: ShowProfileComponent,canActivate: [AuthGuard]},
  { path: 'edit-profile-tutor', component: EditProfileTutorComponent,canActivate: [AuthGuard]},
  { path: 'list-tutor', component: ListTutorComponent,canActivate: [AuthGuard]},
  { path: 'chat', component: ChatComponent,canActivate: [AuthGuard]},
  { path: 'role', component: RoleComponent,canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent},

  {path:'show-profile-tutor', component:ShowProfileTutorComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
