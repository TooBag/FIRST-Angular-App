import { Component, OnInit, Inject } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(@Inject('auth') private service) { }

  ngOnInit() { }

  onClick(username, password) {
    console.log('username:' + username + "\n\r" + "password:" + password);
    console.log('auth result is: ' + this.service.loginWithCredentials(username, password));
  }
  
}
