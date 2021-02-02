import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BtmensModule} from "./btmens/btmens.module";
import {ApTelModule} from "./ap-tel/ap-tel.module";
import {ApCommonModule} from "./ap-common/ap-common.module";
import {ApAuthModule} from "./ap-auth/ap-auth.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModules} from "./MaterialModules";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // Material Modules,
    MatSidenavModule,
    MatSelectModule,

    //Custom Modules
    BtmensModule,
    ApTelModule,
    ApCommonModule,
    ApAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
