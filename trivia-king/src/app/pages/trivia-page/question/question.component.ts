import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TriviaQuestion } from '../../../model';
import { QuestionActions, TeamActions } from '../../../actions';
import { MdDialog } from '@angular/material';
import { TrkModalDialogComponent, TrkModalDialogConfig } from '../../../shared';
import { QuestionResultDialogComponent, TrkQuestionResultDialogConfig } from '../index';

@Component({
  selector: 'trk-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent {
  @Input() question: TriviaQuestion;
  @Input() isAssigned: boolean;

  constructor(
    private questionActions: QuestionActions,
    private teamActions: TeamActions,
    private dialog: MdDialog
  ) { }

  showIsOkToShowAnswerDialog(callback) {
    const config: TrkModalDialogConfig = {
      title: 'שאלה',
      body: 'האם להציג את הפתרון?',
      options: { 'כן': true, 'לא': false },
      direction: 'rtl'
    };
    const dialogRef = this.dialog.open(TrkModalDialogComponent, { data: config });
    dialogRef.afterClosed().filter(retval => retval === true).subscribe(result => {
      callback();
    });
  }

  showQuestionResult() {
    const config: TrkQuestionResultDialogConfig = { question: this.question };
    const dialogRef = this.dialog.open(QuestionResultDialogComponent, { data: config });
    dialogRef.afterClosed().subscribe((teamName: string | undefined) => {
      if (teamName === undefined) {
        return;
      }
      if (teamName !== '') {
        this.teamActions.assignCorrectAnswerToTeam(teamName, this.question);
      } else {
        this.teamActions.removeCorrectAnswer(this.question);
      }
    });
  }

  changeToQuestion() {
    this.questionActions.showQuestion(this.question);
  }

  changeToAnswer() {
    this.showIsOkToShowAnswerDialog(() => {
      this.questionActions.showAnswer(this.question);
      this.showQuestionResult();
    });
  }
}
