import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../../shared';
import { QuestionForCategoryPipe } from './question-for-category.pipe';

import {
  TriviaPageComponent,
  TriviaPanelComponent,
  CategoryComponent,
  QuestionComponent,
} from './index';

const TriviaPageComponents = [
  CategoryComponent,
  QuestionComponent,
  TriviaPanelComponent,
  TriviaPageComponent,
];

const DECLARATIONS_AND_EXPORTS = [...TriviaPageComponents, QuestionForCategoryPipe];

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule],
  declarations: DECLARATIONS_AND_EXPORTS,
  exports: DECLARATIONS_AND_EXPORTS,
})
export class TriviaPageModule { }
