import {Component, Input, OnInit} from '@angular/core';
import {PostData} from "../models/post-data";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input('postData') data: PostData;

  constructor() { }

  ngOnInit(): void {
  }

}
