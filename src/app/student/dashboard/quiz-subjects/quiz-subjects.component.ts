import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-quiz-subjects',
  templateUrl: './quiz-subjects.component.html',
  styleUrls: ['./quiz-subjects.component.css']
})
export class QuizSubjectsComponent implements OnInit {
  login;
  arr=[
    'Javascript',
    'Angular',
    'Java',
    'express js',
    'Node js',
    'Typescript',
    'Mongodb'            
  ]

  constructor(
    private router:Router,
    private service:StudentService
  ) { }

  ngOnInit() {
  }

  display(value){
    this.router.navigate(['/quiz'])
  }

}
