import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>Angular Routes</h1>
      <nav>
        <a routerLink="">Home </a>
        <a routerLink="/about">About </a>
        <a routerLink="/news">News </a>
        <a routerLink="/price">Price </a>
      </nav>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'stalex-Angular';
}
