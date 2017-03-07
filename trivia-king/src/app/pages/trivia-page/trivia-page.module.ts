import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { QuestionForCategoryPipe } from './question-for-category.pipe';

import {
  TriviaPageComponent,
  TriviaPanelComponent,
  CategoryComponent,
  QuestionComponent,
  ShowAnswerDialogComponent,
} from './index';

const TriviaPageComponents = [
  CategoryComponent,
  QuestionComponent,
  TriviaPanelComponent,
  ShowAnswerDialogComponent,
  TriviaPageComponent,
];

const DECLARATIONS_AND_EXPORTS = [...TriviaPageComponents, QuestionForCategoryPipe];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: DECLARATIONS_AND_EXPORTS,
  exports: DECLARATIONS_AND_EXPORTS,
  entryComponents: [ShowAnswerDialogComponent]
})
export class TriviaPageModule { }
