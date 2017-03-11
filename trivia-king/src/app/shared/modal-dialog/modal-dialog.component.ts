import { Component} from '@angular/core';
import { MdDialogRef } from '@angular/material';

export class TrkModalDialogConfig {
  title?: string = '';
  options?: { [name: string]: any } = { };
  body?: string = '';
  direction?: 'rtl' | 'ltr' = 'ltr';
}

@Component({
  selector: 'trk-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class TrkModalDialogComponent {
  config: TrkModalDialogConfig;

  constructor(public dialogRef: MdDialogRef<TrkModalDialogComponent>) {
    const config = <TrkModalDialogConfig>dialogRef.config.data;
    if (config === undefined) {
      console.log('Received undefined configuration for the modal');
    }
    this.config = config;
  }
}
