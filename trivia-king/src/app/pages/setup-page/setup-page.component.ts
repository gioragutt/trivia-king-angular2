import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TriviaQuestions } from '../../model';

@Component({
  selector: 'trk-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent  {
  @select() teams$: Observable<TriviaQuestions>;
}
