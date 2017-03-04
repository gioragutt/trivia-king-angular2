import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TriviaQuestions } from './model';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'trk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() categories$: Observable<string[]>;
  @select() questions$: Observable<TriviaQuestions>;

  constructor(public snackBar: MdSnackBar) { }

  openCredit() {
    this.snackBar.open('נכתב על ידי: גיורא גוטצייט', 'סגור', {
      duration: 3500,
    });
  }
}
