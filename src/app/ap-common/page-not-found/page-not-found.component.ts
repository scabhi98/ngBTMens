import { Component, OnInit } from '@angular/core';
import {ResourceService} from "../../btmens/resource.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    public resource: ResourceService
  ) { }

  ngOnInit(): void {
  }

}
