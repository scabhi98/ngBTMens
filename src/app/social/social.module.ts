import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostComponent } from './post/post.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "@angular/cdk/layout";
import {CommunicatorService} from "./service/communicator.service";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [ProfileComponent, PostViewComponent, PostComponent, NewsFeedComponent, EditProfileComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    FlexModule,
    FormsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  providers: [CommunicatorService]
})
export class SocialModule { }
