import { Injectable } from '@angular/core';
import {NavigationLink} from "../ap-common/proto/navigation-link";
import {ConfigValues} from "../resources/config-values";
import {ViewString} from "./proto/view-string";
import {ViewStrings} from "../resources/en/view-strings";
import {ConfigurationService} from "./configuration.service";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  navigationLinks: NavigationLink[] = [];
  viewString: ViewString = null;

  constructor(
    private config: ConfigurationService
  ) {
    this.viewString = ViewStrings.english;
    this.initNavigationLinks();

    config.languageChanged().subscribe( language => {
      if( language == ConfigValues.languages.en.key){
        this.viewString = ViewStrings.english;
        this.initNavigationLinks();
      }
      if( language == ConfigValues.languages.be.key ){
        this.viewString = ViewStrings.bengali;
        this.initNavigationLinks();
      }
    });
  }

  initNavigationLinks(){
    this.navigationLinks = [
      {
        title: this.viewString.linkTitles.home,
        url: "/home"
      },
      {
        title: this.viewString.linkTitles.aboutUs,
        url: "/about"
      },
      {
        title: this.viewString.linkTitles.contactUs,
        url: "/contact"
      }
    ];
  }
  public changeLinks() {

  }

  public getNavigationLinks() : NavigationLink[] {
    return this.navigationLinks;
  }

  public getViewString() : ViewString {
    return this.viewString;
  }
}
