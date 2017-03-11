import { Component, Input } from '@angular/core';
import { TriviaTeam } from '../../../model';
import { TeamActions } from '../../../actions/team.actions';

@Component({
  selector: 'trk-team-info-preview',
  templateUrl: './team-info-preview.component.html',
  styleUrls: ['./team-info-preview.component.css']
})
export class TeamInfoPreviewComponent {
  @Input() team: TriviaTeam;
  nameToEdit: string;
  isEditing = false;

  constructor(private actions: TeamActions) { }

  disableEdit() {
    this.isEditing = false;
  }

  enableEdit() {
    this.isEditing = true;
  }

  onStartRename() {
    this.enableEdit();
    this.nameToEdit = this.team.name;
  }

  onTeamRename() {
    this.disableEdit();
    this.actions.renameTeam(this.team, this.nameToEdit);
  }

  cancelRename() {
    this.disableEdit();
  }

  removeTeam() {
    this.disableEdit();
    this.actions.removeTeam(this.team);
  }
}
