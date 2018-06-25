import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SharedModule} from '../shared/shared-module';
import { DashboardComponent } from './dashboard/dashboard.component'
import{RouterModule} from '@angular/router'
import { QuizComponent } from './quiz/quiz.component';
import { LoginDialogComponent } from './dashboard/login-dialog/login-dialog.component';
import { QuizSubjectsComponent } from './dashboard/quiz-subjects/quiz-subjects.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
    { 
      path:'',
      component:DashboardComponent,
      children:[{
        path:'',
        component:QuizSubjectsComponent
      },{
        path:'quiz',
        component:QuizComponent
      }
    ]
    }
  ])
  ],
  entryComponents:[LoginDialogComponent],
  declarations: [DashboardComponent,QuizComponent, LoginDialogComponent, QuizSubjectsComponent]
})
export class StudentModule { }
