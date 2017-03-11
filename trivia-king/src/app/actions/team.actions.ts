import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';
import { IAppState } from '../reducers';
import { TriviaTeam, TriviaQuestion } from '../model';

@Injectable()
export class TeamActions {
  static TEAM_ADD = 'TEAM_ADD';
  static TEAM_RENAME = 'TEAM_RENAME';
  static TEAM_ASSIGN_CORRECT_ANSWER = 'TEAM_ASSIGN_CORRECT_ANSWER';
  static TEAM_REMOVE_CORRECT_ANSWER = 'TEAM_REMOVE_CORRECT_ANSWER';
  static TEAM_REMOVE = 'TEAM_REMOVE';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  removeCorrectAnswer(question: TriviaQuestion) {
    console.log('Removing question', question, 'from team scores');
    this.ngRedux.dispatch({
      type: TeamActions.TEAM_REMOVE_CORRECT_ANSWER,
      payload: { question }
    });
  }

  assignCorrectAnswerToTeam(teamName: string, question: TriviaQuestion) {
    console.log('Adding question', question, 'to team', teamName);
    this.ngRedux.dispatch({
      type: TeamActions.TEAM_ASSIGN_CORRECT_ANSWER,
      payload: { teamName, question }
    });
  }

  removeTeam(team: TriviaTeam) {
    this.ngRedux.dispatch({
      type: TeamActions.TEAM_REMOVE,
      payload: { team }
    });
  }

  renameTeam(team: TriviaTeam, newName: string) {
    this.ngRedux.dispatch({
      type: TeamActions.TEAM_RENAME,
      payload: { team, newName }
    });
  }

  addTeam(name: string) {
    this.ngRedux.dispatch({
      type: TeamActions.TEAM_ADD,
      payload: { name }
    });
  }
}
