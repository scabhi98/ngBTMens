import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {NewsFeedComponent} from "./news-feed/news-feed.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGaurdService as AuthGaurd} from "../auth/auth-gaurd.service";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";

const routes: Route[] = [
  {
    path: "feed",
    component: NewsFeedComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: "profile/edit",
    component: EditProfileComponent,
    canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule {

}
