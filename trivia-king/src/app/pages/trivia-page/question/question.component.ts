import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TriviaQuestion } from '../../../model';
import { QuestionActions } from '../../../actions';
import { MdDialog } from '@angular/material';
import { TrkModalDialogComponent, TrkModalDialogConfig } from '../../../shared';

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
