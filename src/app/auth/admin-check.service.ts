import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../ap-auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminCheckService implements CanActivate{

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {

  }

  canActivate():  boolean  {
    console.log(this.auth.getUserType())
    let r = this.auth.getUserType() == 'admin';
    console.log(r);
    return r;
  }


}
