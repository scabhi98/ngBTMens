import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealDetailsComponent } from './meal/meal-details/meal-details.component';
import { MealListItemComponent } from './meal/meal-list-item/meal-list-item.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { TransactionComponent } from './accounts/transaction/transaction.component';
import { RecordComponent } from './accounts/record/record.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [ContactUsComponent, AboutUsComponent, HomeComponent, DashboardComponent, MealDetailsComponent, MealListItemComponent, MealListComponent, TransactionComponent, RecordComponent, SettingsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpClient]
})
export class BtmensModule { }
