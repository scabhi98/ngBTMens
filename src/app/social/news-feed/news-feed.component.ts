import { Component, OnInit } from '@angular/core';
import {PostData} from "../models/post-data";
import {CommunicatorService} from "../service/communicator.service";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  posts: PostData[];

  constructor(private datafetcher: CommunicatorService) {
    this.posts = [];
    this.datafetcher.fetchNewsPosts().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}
