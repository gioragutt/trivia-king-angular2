import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../../shared';
import { QuestionForCategoryPipe } from './question-for-category.pipe';

import {
  TriviaPageComponent,
  TriviaPanelComponent,
  CategoryComponent,
  QuestionComponent,
  QuestionResultDialogComponent
} from './index';

const TriviaPageComponents = [
  CategoryComponent,
  QuestionComponent,
  TriviaPanelComponent,
  TriviaPageComponent,
  QuestionResultDialogComponent
];

const DECLARATIONS_AND_EXPORTS = [...TriviaPageComponents, QuestionForCategoryPipe];

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, FormsModule],
  declarations: DECLARATIONS_AND_EXPORTS,
  exports: DECLARATIONS_AND_EXPORTS,
  entryComponents: [QuestionResultDialogComponent]
})
export class TriviaPageModule { }
