import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {api, ResponseCodes} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface GenericResponse {
  status: number;
  message: string;
  response: Object;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static TOKEN_KEY: string = "_tk_"

  signedIn: boolean;
  private token: string;
  authState: Subject<string>;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.token = localStorage.getItem(AuthService.TOKEN_KEY);
    this.signedIn = this.token != null || this.token != undefined;
    this.authState = new Subject<string>();
  }

  public isSignedIn(): boolean {
    return this.signedIn;
  }

  public initSignIn(username: string, password: string){
    try{
      this.http.post<GenericResponse>(
        api.login,
        {
          username: username,
          password: password
        }
      ).subscribe(result => {
        if(result.status == ResponseCodes.REQ_SUCCESS){
          this.token = username + password;
          localStorage.setItem(AuthService.TOKEN_KEY,this.token);
          this.signedIn = this.token != null || this.token != undefined;
          this.authState.next(this.token);
        }else{
          this.snackBar.open(
            result.message, 'Close', {duration: 2000}
          );
        }
      });
    }catch (e) {
      console.log("Error");
    }
  }

  public getAuthStateChange(): Observable<string> {
    return this.authState.asObservable();
  }

  public initSignOut() {
    localStorage.removeItem(AuthService.TOKEN_KEY);
    this.token = null;
    this.signedIn = false;
    this.authState.next(null);
  }

  public getToken(): string{
    return this.token;
  }

  public initSignUp(username: string, email: string, password: string): Observable<GenericResponse> {
    let s = new Subject<GenericResponse>();
    this.http.post<GenericResponse>(
      api.register, {
        username: username,
        email: email,
        password: password
      }
    ).subscribe(result => {
      s.next({
        message: result.message,
        status: result.status,
        response: result.response
      });
      if(result.status == ResponseCodes.REQ_SUCCESS){
        this.initSignIn(username, password);
      }
    });

    return s;
  }
}



