import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../ap-common/theme.service";
import {CustomTheme} from "../../ap-common/custom-theme";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public selectedTheme: CustomTheme

  constructor(
    public theme: ThemeService
  ) { }

  ngOnInit(): void {
  }

}
