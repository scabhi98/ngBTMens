import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {AuthGaurdService as AuthGaurd} from "../auth/auth-gaurd.service";
import {AdminCheckService} from "../auth/admin-check.service";

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthGaurd, AdminCheckService] }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
