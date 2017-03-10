import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TriviaTeams } from '../../model';

@Component({
  selector: 'trk-header-score-board',
  templateUrl: './header-score-board.component.html',
  styleUrls: ['./header-score-board.component.css']
})
export class HeaderScoreBoardComponent {
  @select() teams$: Observable<TriviaTeams>;
}
