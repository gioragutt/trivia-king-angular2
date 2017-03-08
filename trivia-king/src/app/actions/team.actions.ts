import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';
import { IAppState } from '../reducers';
import { TriviaQuestion, TriviaQuestionState } from '../model';

@Injectable()
export class TeamActions {
  static TEAM_ADD = 'TEAM_ADD';
  static TEAM_CHANGE_NAME = 'TEAM_CHANGE_NAME';
  static TEAM_ASSIGN_CORRECT_ANSWER = 'TEAM_ASSIGN_CORRECT_ANSWER';
  static TEAM_REMOVE_CORRECT_ANSWER = 'TEAM_REMOVE_CORRECT_ANSWER';
  static TEAM_REMOVE = 'TEAM_REMOVE';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addTeam(name: string) {
    this.ngRedux.dispatch({
      type: TeamActions.TEAM_ADD,
      payload: {
        name
      }
    });
  }
}
