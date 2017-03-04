import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TriviaQuestions } from './model';

@Component({
  selector: 'trk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @select() categories$: Observable<string[]>;
    @select() questions$: Observable<TriviaQuestions>;
}
