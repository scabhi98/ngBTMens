import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import {AuthService} from "./auth.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FlexModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, SignUpComponent, SignFormComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientModule,
        FlexModule,
        RouterModule
    ],
  providers: [AuthService, HttpClient],
  entryComponents: [LoginFormComponent]
})
export class ApAuthModule { }
