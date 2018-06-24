import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SharedModule} from '../shared/shared-module';
import { DashboardComponent } from './dashboard/dashboard.component'
import{RouterModule} from '@angular/router'
import { QuizComponent } from './quiz/quiz.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
    { 
      path:'',
      component:DashboardComponent

    },{
      path:'quiz',
      //caActivate for route protection
      component:QuizComponent
    }
  ])
  ],
  declarations: [DashboardComponent,QuizComponent]
})
export class StudentModule { }
