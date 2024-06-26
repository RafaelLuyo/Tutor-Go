import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule, NgOptimizedImage} from "@angular/common";

import { HeaderContentComponent } from './publication/components/header-content/header-content.component';
import {RouterOutlet} from "@angular/router";
import { MentorProfileComponent } from './user/pages/mentor-profile/mentor-profile.component';
import { StudentProfileComponent } from './user/pages/student-profile/student-profile.component';
import { AppRoutingModule } from './app-routing.module';
import {PublicationService} from "./publication/services/publication.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {PublicationIdComponent} from "./publication/pages/publication-id/publication-id.component";
import {ReviewsComponent} from "./publication/components/reviews/reviews.component";
import { CardPublicationContentComponent } from './publication/components/card-publication-content/card-publication-content.component';
import {HeaderComponent} from "./user/components/header/header.component";
import{LoginComponent} from "./user/pages/login/login.component";
import {RegisterComponent} from "./user/pages/register/register.component";
import { MainComponent } from './publication/pages/main/main.component';
import {SubscriptionContentComponent} from "./subscription/pages/subscription-content/subscription-content.component";
import { CreatePostComponent } from './publication/pages/create-post/create-post.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AppointmentComponent } from './advise/pages/appointment/appointment.component';
import { InformationWindowComponent } from './publication/components/information-window/information-window.component';
import {AuthInterceptor} from "./shared/helpers/auth.interceptor";
import { SettingsComponent } from './publication/pages/settings/settings.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


import { MatDialogModule } from '@angular/material/dialog';

import {ModalComponent} from "./subscription/components/modal/modal.component";
import {DetailArticleComponent} from "./subscription/pages/detail-article/detail-article.component";
import {PaymentComponent} from "./subscription/pages/payment/payment.component";
import { NotificationItemComponent } from './advise/components/notification-item/notification-item.component';
import { NotificationListComponent } from './advise/pages/notification-list/notification-list.component';


@NgModule({
  declarations: [

      AppComponent,
      HeaderContentComponent,
      MentorProfileComponent,
      StudentProfileComponent,
      PublicationIdComponent,
      ReviewsComponent,
      HeaderComponent,
      LoginComponent,
      RegisterComponent,
      MainComponent,
      CardPublicationContentComponent,
      SubscriptionContentComponent,
      CreatePostComponent,
      AppointmentComponent,
      InformationWindowComponent,
      SettingsComponent,
      ModalComponent,
      DetailArticleComponent,
      PaymentComponent,
      NotificationItemComponent,
      NotificationListComponent

  ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        NgOptimizedImage,
        RouterOutlet,
        AppRoutingModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSliderModule,
        MatOptionModule,
        MatSelectModule,
        MatDialogModule,

    ],
    exports:[ NotificationItemComponent,],
    providers: [PublicationService, {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
