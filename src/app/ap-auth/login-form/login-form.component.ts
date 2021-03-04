import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ConfigValues} from "../../resources/config-values";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: FormControl;
  password: FormControl;
  minPassLength: number;

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
    let username = [
      Validators.required
    ];
    let passVal = [
      Validators.required,
      Validators.minLength(ConfigValues.formConfigs.loginForm.passwordLength)
    ];
    this.minPassLength = ConfigValues.formConfigs.loginForm.passwordLength;
    this.username = new FormControl('', username);
    this.password = new FormControl('', passVal);
  }

  public initLogin(){
    this.auth.initSignIn(this.username.value, this.password.value);
  }

  ngOnInit(): void {
  }

  signupAction() {
    this.router.navigateByUrl("signup");
  }
}
