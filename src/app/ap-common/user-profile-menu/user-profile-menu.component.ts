import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionLink} from "../proto/action-link";
import {User} from "../proto/user";

@Component({
  selector: 'app-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.css']
})
export class UserProfileMenuComponent implements OnInit {

  @Input()  buttonView: "icon" | "text";
  @Input()  isOpen: boolean;
  @Input()  user_details: User;
  @Input()  menuLinks: ActionLink[];
  @Input()  panelClass: string;
  @Input()  showSignIn: boolean;
  @Output() signin: EventEmitter<Event>;
  @Output() signout: EventEmitter<Event>;

  constructor() {
    this.signin = new EventEmitter<Event>();
    this.signout = new EventEmitter<Event>();

  }

  ngOnInit(): void {

  }

  onSignInClicked(v: Event) {
    this.signin.emit(v);
  }

  toggleContent() {
    this.isOpen = !this.isOpen;
    console.log(this.panelClass);
  }
}
