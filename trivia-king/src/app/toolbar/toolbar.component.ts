import { Component } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';
import { TrkModalDialogComponent, TrkModalDialogConfig } from '../shared';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'trk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(
    private snackBar: MdSnackBar,
    private dialog: MdDialog,
    private router: Router
  ) { }

  resetGame() {
    const config: TrkModalDialogConfig = {
      title: 'איפוס המשחק',
      content: 'אתה בטוח שתרצה לאפס את המשחק? באמת באמת בטוח?!',
      options: { 'כן': true, 'לא': false },
      direction: 'rtl',
      type: 'text',
    };
    const dialogRef = this.dialog.open(TrkModalDialogComponent, { data: config });
    dialogRef.afterClosed().filter(retval => retval === true).subscribe(() => {
      LocalStorageService.removeFromLocalStorage('state');
      this.router.navigate(['/home']);
      window.location.reload();
    });
  }

  openCredit() {
    this.snackBar.open('נכתב על ידי: גיורא גוטצייט ורון גרין', 'סגור', {
      duration: 3500,
    });
  }
}
