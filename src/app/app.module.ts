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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCommonModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {LayoutModule} from "@angular/cdk/layout";
import {MatIconModule} from "@angular/material/icon";
import {SocialModule} from "./social/social.module";
import {MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog} from "@angular/material/dialog";
import {LoginFormComponent} from "./ap-auth/login-form/login-form.component";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,

    // Material Modules,
    MatSidenavModule,
    MatSelectModule,
    MatCommonModule,
    MatListModule,
    MatIconModule,

    //Custom Modules
    BtmensModule,
    ApTelModule,
    ApCommonModule,
    ApAuthModule,
    SocialModule,
    FormsModule
  ],
  providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER ],
  bootstrap: [AppComponent]
})
export class AppModule { }
