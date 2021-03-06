import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomeComponent} from "./home/home.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Route[] = [
  {
    path: "contact",
    component: ContactUsComponent
  },
  {
    path: "about",
    component: AboutUsComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtmensRoutingModule {
}
