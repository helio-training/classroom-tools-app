import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../services/questions.service";

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  
  protected questions: any;
  
  // Dependency Injection
  constructor(protected questionsService: QuestionsService) { }
  
  ngOnInit() {
    this.questionsService.getQuestions()
      .then(questions => {
        this.questions = questions;
      });
  }
  
}
