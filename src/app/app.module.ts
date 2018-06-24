import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import{RouterModule} from '@angular/router'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
    {
      path:'admin',
      loadChildren:'./admin/admin.module#AdminModule'
    },
    {
      path:'',
      loadChildren:'./student/student.module#StudentModule'
    }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
