import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {MatDialog} from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private service:StudentService,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }
  Login(){
    this.service.Login();
  }
 
  Logout(){
    this.service.Logout();
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '450px',
      height:'350px'
    });
  }
}
