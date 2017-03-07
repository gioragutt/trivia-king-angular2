import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'trk-show-answer-dialog',
  templateUrl: './show-answer-dialog.component.html',
  styleUrls: ['./show-answer-dialog.component.css']
})
export class ShowAnswerDialogComponent {
    constructor(public dialogRef: MdDialogRef<ShowAnswerDialogComponent>) {}
}
