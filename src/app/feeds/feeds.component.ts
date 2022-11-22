import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  feeds: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getDota().subscribe(res => {
      this.feeds = res;
    });
  }

}
