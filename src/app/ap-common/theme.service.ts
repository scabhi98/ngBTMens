import { Injectable } from '@angular/core';
import {CustomTheme} from "./custom-theme";
import {ViewStrings} from "../resources/en/view-strings";
import {ResourceService} from "../btmens/resource.service";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly themes: CustomTheme[];
  private currentTheme: CustomTheme;
  readonly themeCSSElement: HTMLLinkElement;
  readonly themeChangeSubject: Subject<CustomTheme>;
  constructor(
    private resource: ResourceService
  ) {
    this.themes = [
      {
        name: "Blue Green",
        cssPath: environment.themes.blueGreen,
        type: "Light"
      },
      {
        name: "Brown Dark",
        cssPath: environment.themes.brownDark,
        type: "Dark"
      },
      {
        name: "Brown Light",
        cssPath: environment.themes.brownLight,
        type: "Light"
      },
      {
        name: "Green Yellow",
        cssPath: environment.themes.greenYellow,
        type: "Dark"
      }
    ];
    this.themeChangeSubject = new Subject<CustomTheme>();
    this.themeCSSElement = window.document.createElement('link');
  }

  public startService(){
    this.currentTheme = this.themes[0];
    this.themeCSSElement.rel = "stylesheet";
    this.themeCSSElement.href = this.currentTheme.cssPath;
  }

  private applyCurrentTheme(){
    if(document.head.contains(this.themeCSSElement)){
      document.head.removeChild(this.themeCSSElement);
    }
    this.themeCSSElement.href = this.currentTheme.cssPath;
    document.head.appendChild(this.themeCSSElement);
    this.themeChangeSubject.next(this.currentTheme);
  }

  public getThemes(): CustomTheme[] {
    return this.themes;
  }

  public themeChange(): Observable<CustomTheme> {
    return this.themeChangeSubject;
  }

  public useTheme(theme: CustomTheme){
    console.log(theme);
    if(this.currentTheme != theme ){
      this.currentTheme = theme;
      this.applyCurrentTheme();
    }
  }

}
