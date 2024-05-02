import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScoreComponent} from "./TutorGo/components/score/score.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './public/pages/header/header.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import { ScheduleComponent} from "./TutorGo/components/schedule/schedule.component";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle} from "@angular/material/card";
import {ScheduleModule,RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from "@syncfusion/ej2-angular-schedule";
import { CalendarComponent} from "./TutorGo/components/calendar/calendar.component";
import {HomeComponent} from "./TutorGo/students/components/home/home.component";
import {ValoracionesComponent} from "./TutorGo/students/components/valoraciones/valoraciones.component";
import { MatCardModule } from '@angular/material/card';
import {
  TutorSeleccionadoComponent
} from "./TutorGo/students/components/tutor-seleccionado/tutor-seleccionado.component";
import {EditProfileComponent} from "./TutorGo/students/components/edit-profile/edit-profile.component";

@NgModule({
  declarations: [

    AppComponent,
    ScoreComponent,
    HeaderComponent,
    ScheduleComponent,
    CalendarComponent,
    ValoracionesComponent,
    TutorSeleccionadoComponent,
    HomeComponent,
    EditProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTab,
    MatTabGroup,
    MatSidenavContent,
    MatIcon,
    MatListItem,
    MatSidenavContainer,
    MatNavList,
    MatIconButton,
    MatToolbar,
    MatButton,
    MatSidenav,
    MatCard,
    ScheduleModule,
    RecurrenceEditorModule,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardModule,
    MatCardActions
  ],
  providers: [
    provideAnimationsAsync(),
    DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
