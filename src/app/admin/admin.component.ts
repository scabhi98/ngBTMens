import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from "../ap-common/navigation.service";
import {NavigationLink} from "../ap-common/proto/navigation-link";
import {AuthService} from "../ap-auth/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy{

  sidenavLinks: NavigationLink[] = [
    {title: 'Manage Users', url: 'users'},
    {title: 'Settings', url: 'settings'}
  ];

  private sidenavLinkTemp: NavigationLink[];

  constructor(
    private nav: NavigationService,
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {
    this.nav.setSidenavLinks(this.sidenavLinks);

    if(this.auth.isSignedIn()){

    }else{

    }
  }

  ngOnDestroy(): void {
  }



}
