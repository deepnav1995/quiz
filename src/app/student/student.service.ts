import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  login;
  constructor() { 
   this.login= false;
  }
 Login(){
  this.login=true;
 }
 Logout(){
   this.login=false;
 }

}
