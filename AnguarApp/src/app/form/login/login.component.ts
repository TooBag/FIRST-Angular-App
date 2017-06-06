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
  
  onSubmit(formValue) {
    console.log('username:' + formValue.login.username + "\n\r" + "password:" + formValue.login.password);
    console.log('auth result is: '
      + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }
}
