import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomePageComponent, SetupPageComponent, TriviaPageComponent } from './pages';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home',  component: HomePageComponent },
  { path: 'setup', component: SetupPageComponent },
  { path: 'trivia', component: TriviaPageComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
