import { Component, Input } from '@angular/core';
import { TriviaQuestion } from '../model';

@Component({
  selector: 'trk-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: TriviaQuestion;
}
