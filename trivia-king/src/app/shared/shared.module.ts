import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { IterateObjectPipe } from './iterate-object.pipe';
export { ModalDialogComponent, TrkModalDialogConfig } from './modal-dialog/modal-dialog.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ModalDialogComponent, IterateObjectPipe],
  exports: [ModalDialogComponent, IterateObjectPipe],
  entryComponents: [ModalDialogComponent]
})
export class SharedModule { }
