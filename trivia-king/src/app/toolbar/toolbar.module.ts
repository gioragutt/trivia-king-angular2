import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared';

import { HeaderScoreBoardComponent } from './header-score-board/header-score-board.component';
import { TeamScoreComponent } from './team-score/team-score.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule],
  declarations: [HeaderScoreBoardComponent, TeamScoreComponent, ToolbarComponent],
  exports: [HeaderScoreBoardComponent, TeamScoreComponent, ToolbarComponent]
})
export class ToolbarModule { }
