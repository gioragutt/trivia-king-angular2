import { Component} from '@angular/core';
import { MdDialogRef } from '@angular/material';

export class TrkModalDialogConfig {
  title? = ''; // title of the dialog
  options?: { [name: string]: any } = { }; // options: map between (button text) and (return value on dialog.afterClosed)
  content? = ''; // content of the dialog - if type is image, content is considered to be the image path
  type?: 'text' | 'large-text' | 'image' = 'text'; // type of the dialog body
  direction?: 'rtl' | 'ltr' = 'ltr'; // direction of the dialog
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

  isText(): boolean {
    return this.config.type === 'text' || this.config.type === 'large-text';
  }

  isImage(): boolean {
    return this.config.type === 'image';
  }

  isLargeText(): boolean {
    return this.config.type === 'large-text';
  }
}
