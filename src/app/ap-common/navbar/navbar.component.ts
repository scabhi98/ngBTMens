import {Component, Input, OnInit} from '@angular/core';
import {NavigationLink} from "../proto/navigation-link";
import {ResourceService} from "../../btmens/resource.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() links: NavigationLink[];

  constructor(
    public resourceService: ResourceService
  ) { }

  ngOnInit(): void {
  }

}
