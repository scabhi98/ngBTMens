import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher} from "@angular/cdk/layout";
import {NavigationLink} from "./proto/navigation-link";
import {MatSidenav} from "@angular/material/sidenav";
import {ActionLink} from "./proto/action-link";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  sidenav_opened: boolean;
  default_sidenav_open: boolean;
  private isMobScreen: boolean;
  sidenav_config: any = {
    mode: "side"
  }
  sidenav_links: NavigationLink[] = [{
    title: "This is test link",
    url: "/dummy"
  }];
  sidenavRef: MatSidenav;
  toolbar_links: NavigationLink[] = [];
  toolbar_links_desp: NavigationLink[] = [];
  public mobScrObserver: Observable<BreakpointState>;

  menuLinks: ActionLink[];

  constructor(
    private mediaMatcher: MediaMatcher,
    private breakpoint: BreakpointObserver
  ) {
    this.sidenav_setup();
    this.mobScrObserver = breakpoint.observe([Breakpoints.Small, Breakpoints.XSmall]);
    this.mobScrObserver.subscribe(result => {
      if(result.matches){
        this.mobileScreenSetup();
      }
      else{
        this.mobileScreenCleanup();
      }
    });
  }

  sidenav_setup(): void {
    this.sidenav_opened = this.mediaMatcher.matchMedia(Breakpoints.XLarge).matches;
    this.breakpoint.observe([
      Breakpoints.XLarge
    ]).subscribe( result => {
      this.sidenav_opened = result.matches;
      this.default_sidenav_open = result.matches;
    });
  }
  public getSideNavLinks(): NavigationLink[] {
    return this.sidenav_links;
  }
  public getToolbarLinks(): NavigationLink[] {
    return this.toolbar_links;
  }
  public setToolbarLinks(links: NavigationLink[]){
    delete this.toolbar_links;
    this.toolbar_links = links;
  }
  public setSidenavLinks(links: NavigationLink[]){
    delete  this.sidenav_links;
    this.sidenav_links = links;
  }

  public setMenuActionLinks(links: ActionLink[]){
    this.menuLinks = links;
  }

  public getMenuActionLinks() : ActionLink[] {
    return this.menuLinks;
  }
  public setSideNavRef(sidenav: MatSidenav){
    this.sidenavRef = sidenav;
  }

  private mobileScreenSetup() {
    this.isMobScreen = true;
  }

  private mobileScreenCleanup() {
    this.isMobScreen = false;
  }
  public isMobileScreen(){
    return this.isMobScreen;
  }
}
