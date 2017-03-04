import { Component, Input } from '@angular/core';

@Component({
  selector: 'trk-trivia-panel',
  templateUrl: './trivia-panel.component.html',
  styleUrls: ['./trivia-panel.component.css']
})
export class TriviaPanelComponent {
  @Input() categories: Array<string>;
}
