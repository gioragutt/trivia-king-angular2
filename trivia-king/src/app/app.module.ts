// Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular Material Dependencies
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Angular Redux Dependencies
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, INITIAL_STATE } from './reducers';

// Redux Dependencies
import { combineReducers } from 'redux';
import * as createLogger from 'redux-logger';
import { Actions } from './actions.service';
import { reducers } from './reducers';

import { CategoryComponent } from './category/category.component';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { TriviaPanelComponent } from './trivia-panel/trivia-panel.component';
import { QuestionForCategoryPipe } from './question-for-category.pipe';
import { ShowAnswerDialogComponent } from './question/show-answer-dialog/show-answer-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TriviaPanelComponent,
    QuestionForCategoryPipe,
    ShowAnswerDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgReduxModule
  ],
  entryComponents: [
    ShowAnswerDialogComponent
  ],
  providers: [Actions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {

    const rootReducer = combineReducers<IAppState>({
      questions: reducers.questions,
      categories: reducers.categories
    });

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [ createLogger() ]);
  }
};
