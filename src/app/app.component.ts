import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NavigationLink} from "./ap-common/proto/navigation-link";
import {ResourceService} from "./btmens/resource.service";
import {ConfigurationService} from "./btmens/configuration.service";
import {ConfigValues} from "./resources/config-values";
import {ThemeService} from "./ap-common/theme.service";
import {CustomTheme} from "./ap-common/custom-theme";
import {NavigationService} from "./ap-common/navigation.service";
import {ActionLink} from "./ap-common/proto/action-link";
import {AuthService} from "./ap-auth/auth.service";
import {MatSidenav} from "@angular/material/sidenav";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginFormComponent} from "./ap-auth/login-form/login-form.component";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit
{
  public configValues = ConfigValues;
  public currentTheme: CustomTheme = null;
  public isMobileScreen: boolean;
  private mobScrObserver: Observable<BreakpointState>;
  private xsScrObserver: Observable<BreakpointState>;
  loginFormComponentMatDialogRef: MatDialogRef<LoginFormComponent>
  currentLanguage: string;
  @ViewChild('sidenav') sidenavRef: MatSidenav;
  constructor(
    public resources: ResourceService,
    public config: ConfigurationService,
    public themeService: ThemeService,
    public navigation: NavigationService,
    public auth: AuthService,
    public dialogProvider: MatDialog,
    public breakPoint: BreakpointObserver,
    public router: Router,
    private snackBar: MatSnackBar
  ){
    themeService.startService();
    themeService.useTheme(themeService.getThemes()[2]);
    this.initNavigationLinks();
    this.xsScrObserver = breakPoint.observe(Breakpoints.XSmall);
    this.mobScrObserver = breakPoint.observe([Breakpoints.Small, Breakpoints.XSmall]);
  }
  initNavigationLinks(){
    let navigationLinks: NavigationLink[] = [
      {
        title: this.resources.getViewString().linkTitles.home,
        url: "/home",
        icon: {icon: "home"}
      },
      {
        title: this.resources.getViewString().linkTitles.aboutUs,
        url: "/about"
      },
      {
        title: this.resources.getViewString().linkTitles.contactUs,
        url: "/contact"
      }
    ];
    let actionLinks: ActionLink[] = [
      {
        title: "Profile",
        action: () => this.router.navigateByUrl('profile')
      },
    ];
    this.navigation.setMenuActionLinks(actionLinks);

    this.navigation.setToolbarLinks(navigationLinks);
  }

  signInAction() {
    this.loginFormComponentMatDialogRef = this.dialogProvider.open(LoginFormComponent, {
      width: '40%',
      height: '50%',
      maxHeight: '100vh',
      maxWidth: '100vw'
    });
    this.loginFormComponentMatDialogRef.afterClosed().subscribe(observ => {
      console.log(observ);
    });
    this.auth.getAuthStateChange().subscribe( val => {
      if(this.auth.isSignedIn())
        this.loginFormComponentMatDialogRef.close();
    });
  }

  private initSmallScreenSetup() {
    this.loginFormComponentMatDialogRef && this.loginFormComponentMatDialogRef.updateSize('100%', '100%');
  }

  private destroySmallScreenSetup(){
    this.loginFormComponentMatDialogRef && this.loginFormComponentMatDialogRef.updateSize('40%','50%');
  }

  ngAfterViewInit(): void {
    this.navigation.setSideNavRef(this.sidenavRef);
  }

  ngOnInit(): void {
    this.xsScrObserver.subscribe( result => {
      if(result.matches){
        this.initSmallScreenSetup();
      }
      else{
        this.destroySmallScreenSetup();
      }
    });
    this.mobScrObserver.subscribe(result => {
      if(result.matches){
        this.mobileScreenSetup();
      }
      else{
        this.mobileScreenCleanup();
      }
    })

    this.auth.getAuthStateChange().subscribe(token => {
      if(token == null){
        this.router.navigateByUrl('home');
        this.snackBar.open("You have successfully logged out",'Dismiss', {duration: 3000});
      }
    });

  }

  private mobileScreenSetup(){
    this.isMobileScreen = true;
  }

  private mobileScreenCleanup() {
    this.isMobileScreen = false;
  }

  public signOutAction() {
    this.auth.initSignOut();
  }
}
