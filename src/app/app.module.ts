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
import { ScheduleComponent } from './tutorgo/components/schedule/schedule.component';
import {MatCard} from "@angular/material/card";

@NgModule({
  declarations: [

    AppComponent,
    ScoreComponent,
    HeaderComponent,
    ScheduleComponent
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
    MatCard
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
