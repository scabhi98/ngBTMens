import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import {AuthService} from "./auth.service";



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, SignUpComponent, SignFormComponent],
  imports: [
    CommonModule
  ],
  providers: [AuthService]
})
export class ApAuthModule { }
