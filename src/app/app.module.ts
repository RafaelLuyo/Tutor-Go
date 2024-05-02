import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScoreComponent } from './tutorgo/components/score/score.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [

    AppComponent,
    ScoreComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTab,
    MatTabGroup
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
