import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SharedModule} from '../shared/shared-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component'
import{RouterModule} from '@angular/router';
import { StudentsComponent } from './dashboard/students/students.component';
import { SubjectsComponent } from './dashboard/subjects/subjects.component'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full'
    },
    {
     path:'login',
     component:LoginComponent
    },{
      path:'dash',
      component:DashboardComponent
    }
  ])
  ],
  declarations: [DashboardComponent, LoginComponent, StudentsComponent, SubjectsComponent]
})
export class AdminModule { }
