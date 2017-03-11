import { Component, Input } from '@angular/core';
import { TriviaTeams } from '../../../model';

@Component({
  selector: 'trk-teams-management',
  templateUrl: './teams-management.component.html',
  styleUrls: ['./teams-management.component.css']
})
export class TeamsManagementComponent {
  @Input() teams: TriviaTeams;
}
