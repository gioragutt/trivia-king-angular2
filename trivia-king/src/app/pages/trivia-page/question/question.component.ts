import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TriviaQuestion } from '../../../model';
import { QuestionActions } from '../../../actions';
import { MdDialog } from '@angular/material';
import { ShowAnswerDialogComponent } from '../index';

@Component({
  selector: 'trk-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent {
  @Input() question: TriviaQuestion;
  constructor(private actions: QuestionActions, public dialog: MdDialog) { }

  showIsOkToShowAnswerDialog(callback) {
    const dialogRef = this.dialog.open(ShowAnswerDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        callback();
      }
    });
  }

  changeToHidden() {
    this.actions.hideQuestion(this.question);
  }

  changeToQuestion() {
    this.actions.showQuestion(this.question);
  }

  changeToAnswer() {
    this.showIsOkToShowAnswerDialog(() => {
      this.actions.showAnswer(this.question);
    });
  }
}