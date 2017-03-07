import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';
import { IAppState } from '../reducers';
import { TriviaQuestion, TriviaQuestionState } from '../model';

@Injectable()
export class QuestionActions {
  static QUESTION_HIDE = 'QUESTION_HIDE';
  static QUESTION_SHOW_QUESTION = 'QUESTION_SHOW_QUESTION';
  static QUESTION_SHOW_ANSWER = 'QUESTION_SHOW_ANSWER';

  static TEAM_ADD_NEW = 'TEAM_ADD_NEW';
  static TEAM_EDIT = 'TEAM_EDIT';
  static TEAM_REMOVE = 'TEAM_REMOVE';

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
    this.dispatchQuestionUpdate(question, QuestionActions.QUESTION_HIDE);
  }

  showQuestion(question: TriviaQuestion) {
    this.dispatchQuestionUpdate(question, QuestionActions.QUESTION_SHOW_QUESTION);
  }

  showAnswer(question: TriviaQuestion) {
    this.dispatchQuestionUpdate(question, QuestionActions.QUESTION_SHOW_ANSWER);
  }
}