import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './reducers';

@Component({
  selector: 'trk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private localStorage: LocalStorageService, private store: NgRedux<IAppState>) {
    store.subscribe(() => {
      console.log('Saving state to local storage');
      localStorage.saveToLocalStorage('state', store.getState());
    });
  }
}
