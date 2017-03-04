import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TriviaQuestions } from '../model';

@Component({
  selector: 'trk-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  @Input() categoryName: string;
  @Input() questions: TriviaQuestions;
}
