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

// Redux Implementations
import { QuestionActions, TeamActions } from './actions/';
import { reducers } from './reducers';

// App
import { AppComponent } from './app.component';
import { QuestionForCategoryPipe } from './question-for-category.pipe';

// Toolbar
import {
  HeaderScoreBoardComponent,
  TeamScoreComponent,
  ToolbarComponent
} from './toolbar';

// Home Page
import { HomePageComponent } from './pages/home-page';

// Setup Page
import { SetupPageComponent } from './pages/setup-page';

// Trivia Page
import {
  TriviaPageComponent,
  TriviaPanelComponent,
  CategoryComponent,
  QuestionComponent,
  ShowAnswerDialogComponent,
} from './pages/trivia-page';

// Routes
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TriviaPanelComponent,
    QuestionForCategoryPipe,
    ShowAnswerDialogComponent,
    HeaderScoreBoardComponent,
    TeamScoreComponent,
    HomePageComponent,
    SetupPageComponent,
    TriviaPageComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgReduxModule,
    AppRoutes
  ],
  entryComponents: [
    ShowAnswerDialogComponent
  ],
  providers: [QuestionActions, TeamActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension) {

    const rootReducer = combineReducers<IAppState>({
      questions: reducers.questions,
      categories: reducers.categories,
      teams: reducers.teams,
    });

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [createLogger()], [devTools.enhancer()]);
  }
};
