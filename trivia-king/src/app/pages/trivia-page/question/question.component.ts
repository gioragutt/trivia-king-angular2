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

  getDialogConfig(): TrkModalDialogConfig {
    if (this.question.type === 'image') {
      return {
        title: 'התמונה - האם להמשיך לפתרון?',
        content: this.question.question,
        options: { 'כן': true, 'לא': false },
        direction: 'rtl',
        type: 'image'
      };
    }

    return {
      title: 'השאלה - האם להציג את הפתרון?',
      content: this.question.question,
      options: { 'כן': true, 'לא': false },
      direction: 'rtl',
      type: 'large-text'
    };
  }

  showIsOkToShowAnswerDialog(callback) {
    const config = this.getDialogConfig();
    const dialogRef = this.dialog.open(TrkModalDialogComponent, { data: config });
    dialogRef.afterClosed().filter(retval => retval === true).subscribe(result => {
      callback();
    });
  }

  questionContent(): string {
     return this.question.type === 'image' ? 'תמונה' : this.question.question;
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
    this.changeToAnswer();
  }

  changeToAnswer() {
    this.showIsOkToShowAnswerDialog(() => {
      this.questionActions.showAnswer(this.question);
      this.showQuestionResult();
    });
  }
}
