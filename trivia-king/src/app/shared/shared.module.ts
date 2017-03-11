import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrkModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { IterateObjectPipe } from './iterate-object.pipe';
export { TrkModalDialogComponent, TrkModalDialogConfig } from './modal-dialog/modal-dialog.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [TrkModalDialogComponent, IterateObjectPipe],
  exports: [TrkModalDialogComponent, IterateObjectPipe],
  entryComponents: [TrkModalDialogComponent]
})
export class SharedModule { }
