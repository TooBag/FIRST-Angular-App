import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'form-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  
  private submit (formValue) {
    console.log('username:' + formValue.login.username + "\n\r" + "password:" + formValue.login.password);
    console.log('auth result is: '
      + AuthService.loginWithCredentials(formValue.login.username, formValue.login.password));
  }
}
