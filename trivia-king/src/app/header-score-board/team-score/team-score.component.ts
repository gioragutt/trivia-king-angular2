import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TriviaTeam, TriviaQuestion } from '../../model';

@Component({
  selector: 'trk-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamScoreComponent {
  @Input() team: TriviaTeam;

  private static reduceTeamScore(total: number, question: TriviaQuestion): number {
    return total + question.score;
  }

  teamScore(): number {
    return this.team.correctAnswers.reduce(TeamScoreComponent.reduceTeamScore, 0);
  }
}
