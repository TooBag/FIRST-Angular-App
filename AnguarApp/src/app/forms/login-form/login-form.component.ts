import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import { MdDialog } from '@angular/material';

import { AuthService } from '../../core/auth/auth.service';

import { LoginDialogComponent } from '../../dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'form-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() { }
  
  private submit (formValue) {
    var sucess : boolean = AuthService.loginWithCredentials(formValue.login.username, formValue.login.password);

    console.log('username:' + formValue.login.username + "\n\r" + "password:" + formValue.login.password);
    console.log('auth result is: ' + sucess);

    if (sucess) {
      this.openDialog();
    }
  }

  private openDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}
