import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Route[] = [
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApCommonRoutingModule {

}
