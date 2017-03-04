import { Component, Input, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../reducers';
import { TriviaQuestions, TriviaQuestion } from '../model';

@Component({
  selector: 'trk-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.css']
})
export class CategoryContainerComponent implements OnInit {
  @Input() category: string;
  questions$: Observable<TriviaQuestions>;

  filterQuestions(questions: TriviaQuestions, category: string) {
    return questions.filter((question: TriviaQuestion) => question.category === this.category);
  }

  ngOnInit() {
    console.log('Category', this.category);
    this.questions$ = this.questions$
      .map(questions => this.filterQuestions(questions, this.category));
  }

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.questions$ = this.ngRedux.select('questions');
  };
};
