import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `<h3>News</h3>
  <app-data></app-data>`
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
