import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ConfigValues} from "../../resources/config-values";
import {ResponseCodes} from "../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {
  username: FormControl;
  email: FormControl;
  password: FormControl;
  cnfpassword: FormControl;
  minPassLength: number;

  errMessage: string | null = null;

  constructor(
    public auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    let emailVal = [
      Validators.required,
      Validators.email
    ];
    let userVal = [
      Validators.required
    ];
    let passVal = [
      Validators.required,
      Validators.minLength(ConfigValues.formConfigs.loginForm.passwordLength)
    ];
    this.minPassLength = ConfigValues.formConfigs.loginForm.passwordLength;
    this.email = new FormControl('', emailVal);
    this.password = new FormControl('', passVal);
    this.cnfpassword = new FormControl('',userVal);
    this.username = new FormControl('',userVal);
  }

  ngOnInit(): void {
  }

  initSignup() {
    this.auth.initSignUp(this.username.value, this.email.value, this.password.value).subscribe(result => {
      if(result.status == ResponseCodes.REQ_SUCCESS){
        this.snackBar.open(
          "Congratulations! Your Account has been created successfully.",
          'Close', {duration: 2000}
        );
      }else{
        this.snackBar.open(
          "Alas! Something went wrong.",
          'Close', {duration: 2000}
        );
        this.errMessage = result.message;
      }
    });
  }
}
