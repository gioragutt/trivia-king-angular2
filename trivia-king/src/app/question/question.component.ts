import { Component, Input } from '@angular/core';
import { TriviaQuestion } from '../model';
import { Actions } from '../actions.service';

@Component({
  selector: 'trk-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: TriviaQuestion;

  constructor(private actions: Actions) { }

  changeToHidden() {
    this.actions.hideQuestion(this.question);
  }

  changeToQuestion() {
    this.actions.showQuestion(this.question);
  }

  changeToAnswer() {
    this.actions.showAnswer(this.question);
  }
}
