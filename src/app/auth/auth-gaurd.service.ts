import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {AuthService} from "../ap-auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  // canAct: Subject<boolean> = new Subject<boolean>();

  constructor(
    private auth: AuthService, private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.initCheck();
    return this.auth.isSignedIn();
    // return this.canAct.asObservable();
  }

  private initCheck() {
    if(this.auth.isSignedIn()){
      // this.canAct.next(true);
    }else{
      this.router.navigate(['login']);
      // this.canAct.next(false);
    }
  }
}
