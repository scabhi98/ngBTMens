import {Component, Input, OnInit} from '@angular/core';
import {PostType} from "../models/post-type.enum";
import {PostData} from "../models/post-data";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
}
