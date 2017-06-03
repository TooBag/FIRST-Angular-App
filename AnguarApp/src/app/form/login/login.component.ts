import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  service: AuthService;

  constructor() {
    this.service = new AuthService();
   }

  ngOnInit() { }

  onClick(username, password) {
    console.log('username:' + username + "\n\r" + "password:" + password);
    console.log('auth result is: ' + this.service.loginWithCredentials(username, password));
  }
  
}
