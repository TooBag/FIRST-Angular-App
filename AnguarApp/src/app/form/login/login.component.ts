import { Component, OnInit, Inject } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor(@Inject('auth') private service) { }

  ngOnInit() { }

  onClick() {
    console.log('username:' + this.username + "\n\r" + "password:" + this.password);
    console.log('auth result is: ' + 
    this.service.loginWithCredentials(this.username, this.password));
  }
  
}
