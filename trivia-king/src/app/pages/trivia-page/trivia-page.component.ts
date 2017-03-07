import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TriviaQuestions } from '../../model';

@Component({
  selector: 'trk-trivia-page',
  templateUrl: './trivia-page.component.html',
  styleUrls: ['./trivia-page.component.css']
})
export class TriviaPageComponent  {
  @select() categories$: Observable<string[]>;
  @select() questions$: Observable<TriviaQuestions>;
}
