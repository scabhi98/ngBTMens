import { Component } from '@angular/core';
import {NavigationLink} from "./ap-common/proto/navigation-link";
import {ResourceService} from "./btmens/resource.service";
import {ConfigurationService} from "./btmens/configuration.service";
import {ConfigValues} from "./resources/config-values";
import {ThemeService} from "./ap-common/theme.service";
import {CustomTheme} from "./ap-common/custom-theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public configValues = ConfigValues;
  public currentTheme: CustomTheme = null;
  constructor(
    public resources: ResourceService,
    public config: ConfigurationService,
    public themeService: ThemeService
  ){
    themeService.startService();
    themeService.useTheme(themeService.getThemes()[1]);
  }

  public changeLanguage(value: string): void {
    this.config.setLanguage(value);
  }
}
