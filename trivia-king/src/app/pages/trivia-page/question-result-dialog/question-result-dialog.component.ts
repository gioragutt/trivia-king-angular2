import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TriviaQuestion, TriviaTeams, TriviaTeam } from '../../../model';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

export interface TrkQuestionResultDialogConfig {
  question: TriviaQuestion;
}

@Component({
  selector: 'trk-question-result-dialog',
  templateUrl: './question-result-dialog.component.html',
  styleUrls: ['./question-result-dialog.component.css']
})
export class QuestionResultDialogComponent {
  @select() teams$: Observable<TriviaTeams>;
  question: TriviaQuestion;
  selectedTeam: string;

  constructor(public dialogRef: MdDialogRef<QuestionResultDialogComponent>) {
    this.teams$.subscribe(teams => {
      const config = <TrkQuestionResultDialogConfig>dialogRef.config.data;
      if (config === undefined) {
        console.log('Received undefined configuration for the modal');
      }
      this.question = config.question;
      const team = teams.find(t => t.correctAnswers.includes(this.question));
      if (team !== undefined) {
        this.selectedTeam = team.name;
      }
    });
   }

}
