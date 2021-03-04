import {Injectable} from '@angular/core';
import {NavigationLink} from "../ap-common/proto/navigation-link";
import {ConfigValues} from "../resources/config-values";
import {ViewString} from "./proto/view-string";
import {ViewStrings} from "../resources/en/view-strings";
import {ConfigurationService} from "./configuration.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ResourceWarehouse} from "../resources/resource.warehouse";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  navigationLinks: NavigationLink[] = [];
  viewString: ViewString = null;
  public warehouse = ResourceWarehouse;

  constructor(
    private config: ConfigurationService,
    private http: HttpClient
  ) {
    this.viewString = ViewStrings.english;

    config.languageChanged().subscribe( language => {
      switch (language) {
        case ConfigValues.languages.en.key:
          this.viewString = ViewStrings.english;
          break;
        // case ConfigValues.languages.be.key:
        //   this.viewString = ViewStrings.bengali;
        //   break;
        // case ConfigValues.languages.hi.key:
        //   this.viewString = ViewStrings.hindi;
        //   break;
      }
    });
  }
  public changeLinks() {

  }

  public resolveImage(image: string): string{
    return environment.paths.images + "/" + image;
  }

  public getViewString() : ViewString {
    return this.viewString;
  }
}
