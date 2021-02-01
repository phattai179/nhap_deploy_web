import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-dream-app';

  constructor(private auth : AuthService){}
  ngOnInit(){

    const user = localStorage.getItem('USER')
    
    if(user){
      this.auth.currentUser.next(JSON.parse(user))
    }

  }
}
