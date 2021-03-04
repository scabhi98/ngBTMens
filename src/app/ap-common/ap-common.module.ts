import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "@angular/cdk/layout";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, PageNotFoundComponent, UserProfileMenuComponent],
  imports: [
    CommonModule,
    LayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
    MatListModule,

    RouterModule

  ],
  exports: [NavbarComponent, SidebarComponent]
})
export class ApCommonModule {
}
