import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TriviaQuestions } from '../../../model';

@Component({
  selector: 'trk-trivia-panel',
  templateUrl: './trivia-panel.component.html',
  styleUrls: ['./trivia-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaPanelComponent {
  @Input() categories: Array<string>;
  @Input() questions: TriviaQuestions;
}
