import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';
import { IAppState } from './reducers';
import { TriviaQuestion, TriviaQuestionState } from './model';

@Injectable()
export class Actions {
  static QUESTION_HIDE = 'QUESTION_HIDE';
  static QUESTION_SHOW_QUESTION = 'QUESTION_SHOW_QUESTION';
  static QUESTION_SHOW_ANSWER = 'QUESTION_SHOW_ANSWER';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  dispatchQuestionUpdate(question: TriviaQuestion, action: string) {
    this.ngRedux.dispatch({
      type: action,
      payload: {
        question
      }
    });
  }

  hideQuestion(question: TriviaQuestion) {
    this.dispatchQuestionUpdate(question, Actions.QUESTION_HIDE);
  }

  showQuestion(question: TriviaQuestion) {
    this.dispatchQuestionUpdate(question, Actions.QUESTION_SHOW_QUESTION);
  }

  showAnswer(question: TriviaQuestion) {
    this.dispatchQuestionUpdate(question, Actions.QUESTION_SHOW_ANSWER);
  }
}