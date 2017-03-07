import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'trk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(public snackBar: MdSnackBar) { }

  openCredit() {
    this.snackBar.open('נכתב על ידי: גיורא גוטצייט', 'סגור', {
      duration: 3500,
    });
  }
}
