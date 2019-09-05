import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stalex-Angular';
  userName: string ="";
  response: any;

  constructor(private http: HttpClient){

  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response)=>{
      this.response = response;
    })
  }
}
