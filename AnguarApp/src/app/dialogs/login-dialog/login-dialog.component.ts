import { Component, OnInit } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-login',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  public username: string;

  constructor(public dialogRef: MdDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }

}
