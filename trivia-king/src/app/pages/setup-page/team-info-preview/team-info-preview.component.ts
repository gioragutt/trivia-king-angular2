import { Component, Input } from '@angular/core';
import { TriviaTeam } from '../../../model';

@Component({
  selector: 'trk-team-info-preview',
  templateUrl: './team-info-preview.component.html',
  styleUrls: ['./team-info-preview.component.css']
})
export class TeamInfoPreviewComponent {
  @Input() team: TriviaTeam;
}
