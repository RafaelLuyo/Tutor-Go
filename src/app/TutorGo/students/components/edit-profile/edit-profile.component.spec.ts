import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile.component';
import { AppRoutingModule } from '../../app-routing.module';
import {MatSidenavContainer} from "@angular/material/sidenav";

@NgModule({
  declarations: [EditProfileComponent],
    imports: [
        CommonModule,
        RouterModule,
        AppRoutingModule,
        MatSidenavContainer
    ],
  exports: [EditProfileComponent]
})
export class EditProfileModule { }
