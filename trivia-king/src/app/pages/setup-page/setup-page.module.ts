import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  SetupPageComponent,
  TeamInfoInputComponent,
  TeamInfoPreviewComponent,
  TeamsManagementComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    SetupPageComponent,
    TeamInfoInputComponent,
    TeamInfoPreviewComponent,
    TeamsManagementComponent
  ],
  exports: [
    SetupPageComponent,
    TeamInfoInputComponent,
    TeamInfoPreviewComponent,
    TeamsManagementComponent
  ]
})
export class SetupPageModule { }
