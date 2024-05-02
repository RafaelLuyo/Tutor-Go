import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScoreComponent} from "./TutorGo/components/score/score.component";
import {ScheduleComponent} from "./TutorGo/components/schedule/schedule.component";
import {HomeComponent} from "./TutorGo/Students/components/home/home.component";


const routes: Routes = [
  { path: 'score', component: ScoreComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'student-home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
