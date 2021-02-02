import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, PageNotFoundComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule
    ],
  exports: [NavbarComponent, SidebarComponent]
})
export class ApCommonModule {
}
