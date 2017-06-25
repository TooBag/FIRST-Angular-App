import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';

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
    var success : boolean = AuthService.loginWithCredentials(formValue.login.username, formValue.login.password);

    console.log('username:' + formValue.login.username + "\n\r" + "password:" + formValue.login.password);
    console.log('auth result is: ' + success);

    if (success) {
      this.openDialog(formValue.login.username);
    }
  }

  private openDialog(username : string) {
    let dialogRef = this.dialog.open(LoginDialogComponent);
    
    dialogRef.componentInstance.username = username;
  }
}
