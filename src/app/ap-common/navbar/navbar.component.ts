import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationLink} from "../proto/navigation-link";
import {ResourceService} from "../../btmens/resource.service";
import {ActionLink} from "../proto/action-link";
import {User} from "../proto/user";
import {NavigationService} from "../navigation.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() links: NavigationLink[];
  @Input() menuLinks: ActionLink[];
  @Input() menuUser: User;
  @Input() menuDefaultOpen: boolean;
  @Input('signedIn') hideSignIn: boolean;

  @Output() signin: EventEmitter<Event>
  @Output() signout: EventEmitter<Event>;

  constructor(
    public resourceService: ResourceService,
    public navigation: NavigationService
  ) {
    this.signin = new EventEmitter<Event>();
    this.signout = new EventEmitter<Event>();
  }

  onSignIn(v: Event){
    this.signin.emit(v);
  }

  ngOnInit(): void {
  }

  onSignOut($event: Event) {
    this.signout.emit($event);
  }
}
