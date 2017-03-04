import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'trk-trivia-panel',
  templateUrl: './trivia-panel.component.html',
  styleUrls: ['./trivia-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaPanelComponent {
  @Input() categories: Array<string>;
}
