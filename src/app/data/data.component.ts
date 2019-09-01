import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  message: string;
  items = ["Angular", "React", "Vue", "Bootstrap","Node.js"]
  isCollapsed: boolean = true;
  constructor() {
    setInterval( ()=> {this.message = new Date().toLocaleTimeString()}, 1000
    )
  }

  toogleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }



}
