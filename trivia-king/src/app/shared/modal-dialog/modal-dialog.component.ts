import { Component} from '@angular/core';
import { MdDialogRef } from '@angular/material';

export class TrkModalDialogConfig {
  title: string;
  options: { [name: string]: string | boolean | number } = { };
  body?: string = '';
  direction?: 'rtl' | 'ltr' = 'ltr';
}

@Component({
  selector: 'trk-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  config: TrkModalDialogConfig;

  constructor(public dialogRef: MdDialogRef<ModalDialogComponent>) {
    const config = <TrkModalDialogConfig>dialogRef.config.data;
    if (config === undefined) {
      console.log('Received undefined configuration for the modal');
    }
    this.config = config;
  }
}
