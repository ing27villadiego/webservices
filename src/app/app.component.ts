import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { ScenarioService, UserService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScenarioService,UserService]
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    this.getScenarios()
    this.getUsers()
  }

  scenariosApi: any = [];
  usersApi: any = [];

  constructor(
    public _scenarioService: ScenarioService,
    public _usersService: UserService
  ){
  }

  getScenarios(){
    this._scenarioService.getScenarios()
            .subscribe(data => {
              this.scenariosApi = data.scenarios;
            })
  }

  getUsers(){
    this._usersService.getUsers()
            .subscribe(data => {
              this.usersApi = data.usuarios;
            })
  }




}
