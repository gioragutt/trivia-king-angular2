import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class Actions {
  static QUESTION_HIDE = 'QUESTION_HIDE';
  static QUESTION_SHOW_QUESTION = 'QUESTION_SHOW_QUESTION';
  static QUESTION_SHOW_ANSWER = 'QUESTION_SHOW_ANSWER';

  hideQuestion()
}