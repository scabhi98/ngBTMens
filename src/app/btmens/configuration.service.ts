import { Injectable } from '@angular/core';
import {ConfigValues} from "../resources/config-values";
import {Observable} from "rxjs/internal/Observable";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private language: string;
  private langChangeEmitter = new Subject<string>();

  constructor() {
    this.language = ConfigValues.languages.en.key;
  }

  public setLanguage(value: string){
    if(this.language != value){
      this.langChangeEmitter.next(value);
      this.language = value;
    }
  }

  public languageChanged(): Observable<string> {
    return this.langChangeEmitter;
  }

}
