import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TriviaQuestions, TriviaTeams, TriviaTeam } from '../model';

@Component({
  selector: 'trk-header-score-board',
  templateUrl: './header-score-board.component.html',
  styleUrls: ['./header-score-board.component.css']
})
export class HeaderScoreBoardComponent implements OnInit {
  @select() questions$: Observable<TriviaQuestions>;
  @select() teams$: Observable<TriviaTeams>;

  mockTeams: TriviaTeams = [];
  mockQuestions: TriviaQuestions = [];

  assignQuetionsToTeams() {
    for (let i = 0; i < this.mockTeams.length; ++i) {
      for (let j = i * 3; j < i * 3 + i; ++j) {
        this.mockTeams[i].correctAnswers.push(this.mockQuestions[j]);
      }
     };
  };

  ngOnInit() {
    this.teams$
      .switchMap((teams: TriviaTeams) => { this.mockTeams = teams; return this.questions$; })
      .switchMap((questions: TriviaQuestions) => { this.mockQuestions = questions; return Observable.of(1); })
      .subscribe((ignore: any) => this.assignQuetionsToTeams());
  }
}
