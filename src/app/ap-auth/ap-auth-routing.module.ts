import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page/login-page.component";
import {SignFormComponent} from "./sign-form/sign-form.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Route[] = [
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApAuthRoutingModule {

}
