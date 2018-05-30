import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ScenarioService,
  UserService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ScenarioService,
    UserService
  ],
  declarations: []
})
export class ServiceModule { }
