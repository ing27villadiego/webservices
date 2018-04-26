import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  GithubService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GithubService
  ],
  declarations: []
})
export class ServiceModule { }
