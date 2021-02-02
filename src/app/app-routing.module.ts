import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApAuthRoutingModule} from "./ap-auth/ap-auth-routing.module";
import {ApCommonRoutingModule} from "./ap-common/ap-common-routing.module";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ApAuthRoutingModule, ApCommonRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
