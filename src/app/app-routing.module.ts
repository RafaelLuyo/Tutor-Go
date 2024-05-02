import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScoreComponent} from "./TutorGo/components/score/score.component";
import {ScheduleComponent} from "./TutorGo/components/schedule/schedule.component";
import {CalendarComponent} from "./TutorGo/components/calendar/calendar.component";

const routes: Routes = [
  { path: 'score', component: ScoreComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'calendar', component: CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
