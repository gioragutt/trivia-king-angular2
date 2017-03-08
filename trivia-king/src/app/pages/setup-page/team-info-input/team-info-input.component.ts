import { Component, OnInit } from '@angular/core';
import { TeamActions } from '../../../actions';

@Component({
  selector: 'trk-team-info-input',
  templateUrl: './team-info-input.component.html',
  styleUrls: ['./team-info-input.component.css']
})
export class TeamInfoInputComponent {
  teamName = '';

  constructor(private actions: TeamActions) { }

  onAddTeam() {
    const trimmedName = this.teamName.trim();
    console.log('onAddTeam', trimmedName);
    this.actions.addTeam(trimmedName);
    this.teamName = '';
  }
}
