import { Component, Input } from '@angular/core';
import { TriviaQuestions } from '../model';

@Component({
  selector: 'trk-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() categoryName: string;
  @Input() questions: TriviaQuestions;
}
