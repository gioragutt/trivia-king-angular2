import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'trk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public snackBar: MdSnackBar) { }

  openCredit() {
    this.snackBar.open('נכתב על ידי: גיורא גוטצייט', 'סגור', {
      duration: 3500,
    });
  }
}
