import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  login;
  signup;
  constructor() { 
    this.login=true;
    this.signup=false;
  }

  ngOnInit() {
  }
  SignUp(){
    this.login=false;
    this.signup=true;
  }
  Login(){
    this.login=true;
    this.signup=false;
  }

}
