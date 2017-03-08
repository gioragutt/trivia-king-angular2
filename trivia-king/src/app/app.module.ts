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

import { TriviaPageModule } from './pages/trivia-page/trivia-page.module';

// Routes
import { AppRoutes } from './app.routes';
import { TeamInfoInputComponent } from './pages/setup-page/team-info-input/team-info-input.component';
import { TeamInfoPreviewComponent } from './pages/setup-page/team-info-preview/team-info-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderScoreBoardComponent,
    TeamScoreComponent,
    HomePageComponent,
    SetupPageComponent,
    ToolbarComponent,
    TeamInfoInputComponent,
    TeamInfoPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgReduxModule,
    AppRoutes,
    TriviaPageModule,
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
