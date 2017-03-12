import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TriviaQuestion, TriviaTeam } from '../../../model';
import { StoreQueriesService } from '../../../shared';

export interface TrkQuestionResultDialogConfig {
  question: TriviaQuestion;
}

@Component({
  selector: 'trk-question-result-dialog',
  templateUrl: './question-result-dialog.component.html',
  styleUrls: ['./question-result-dialog.component.css']
})
export class QuestionResultDialogComponent {
  question: TriviaQuestion;
  selectedTeam: string;

  constructor(public dialogRef: MdDialogRef<QuestionResultDialogComponent>, private query: StoreQueriesService) {
      const config = <TrkQuestionResultDialogConfig>dialogRef.config.data;
      if (config === undefined) {
        console.log('Received undefined configuration for the modal');
      }
      this.question = config.question;
      this.query.getAssignedTeamForQuestion(this.question)
        .filter((t: TriviaTeam) => t !== undefined)
        .subscribe((t: TriviaTeam) => this.selectedTeam = t.name);
   }
}