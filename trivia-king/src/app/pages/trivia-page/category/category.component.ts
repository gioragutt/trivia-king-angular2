import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TriviaQuestions } from '../../../model';
import { StoreQueriesService } from '../../../shared';

@Component({
  selector: 'trk-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  @Input() categoryName: string;
  @Input() questions: TriviaQuestions;

  constructor(private query: StoreQueriesService) { }
}
