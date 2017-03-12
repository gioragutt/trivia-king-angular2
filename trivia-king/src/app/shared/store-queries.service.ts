import { Injectable } from '@angular/core';
import { TriviaQuestion, TriviaQuestions, TriviaTeams, TriviaTeam } from '../model';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoreQueriesService {
  @select() teams$: Observable<TriviaTeams>;
  @select() questions$: Observable<TriviaQuestions>;

  getAssignedTeamForQuestion(question: TriviaQuestion): Observable<TriviaTeam | undefined> {
    return this.teams$.map(teams => teams.find(t => t.correctAnswers.find(q => q.id === question.id) !== undefined));
  }

  isQuestionAssigned(question: TriviaQuestion): Observable<boolean> {
    return this.getAssignedTeamForQuestion(question).map(t => t !== undefined);
  }
}
