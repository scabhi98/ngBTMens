import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModules {

}
