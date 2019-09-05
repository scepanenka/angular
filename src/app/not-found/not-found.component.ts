import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h3>Page not found</h3>
  <app-data></app-data>`
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
