import { Component, OnInit } from '@angular/core';
import{Router} from "@angular/router"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  login=false;
  constructor(
    private router:Router
  ) { }
  arr=[
    'Javascript',
    'Angular',
    'Java',
    'express js',
    'Node js',
    'Typescript',
    'Mongodb'            
  ]

  ngOnInit() {
  }
 Login(){
   this.login=true;
 }

 Logout(){
   this.login=false;
 }
 
 display(value){
   this.router.navigate(['/quiz'])
 }
 
}
