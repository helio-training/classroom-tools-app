import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionsService {
  
  // Dependency Injection
  constructor(protected http: Http) { }
  
  getQuestions() {
    return this.http.get('http://localhost:3000/questions')
      .toPromise()
      .then(res => res.json());
  }
  
}
