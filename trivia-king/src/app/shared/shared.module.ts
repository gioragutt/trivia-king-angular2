import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrkModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { IterateObjectPipe } from './iterate-object.pipe';
import { MaterialModule } from '@angular/material';
import { StoreQueriesService } from './store-queries.service';

export { TrkModalDialogComponent, TrkModalDialogConfig } from './modal-dialog/modal-dialog.component';
export { StoreQueriesService } from './store-queries.service';


@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [TrkModalDialogComponent, IterateObjectPipe],
  exports: [TrkModalDialogComponent, IterateObjectPipe],
  providers: [StoreQueriesService],
  entryComponents: [TrkModalDialogComponent]
})
export class SharedModule { }
