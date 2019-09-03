import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h3>Home page</h3>
  <app-data></app-data>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
