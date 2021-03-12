import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApAuthRoutingModule} from "./ap-auth/ap-auth-routing.module";
import {ApCommonRoutingModule} from "./ap-common/ap-common-routing.module";
import {BtmensRoutingModule} from "./btmens/btmens-routing.module";
import {SocialRoutingModule} from "./social/social-routing.module";
import {NewsFeedComponent} from "./social/news-feed/news-feed.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./ap-common/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ApAuthRoutingModule, BtmensRoutingModule,
    SocialRoutingModule ,ApCommonRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
