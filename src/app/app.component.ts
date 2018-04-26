import { Component, OnInit } from '@angular/core';
import { GithubService, PixabayService } from './services/service.index';
import {  Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Fotos } from './models/fotos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    this.getUsers()
    this.getImages()
  }

  dataApi: any = {};
  userApi: any = {};
  imagesApi: any = [];

  constructor(
    public _githubService: GithubService
  ){
  }

  getUsers(){
    this._githubService.getUsers()
            .subscribe(data => {
              this.dataApi = data;
            })
  }

  getUser(user){
    if(user.length <=0){
      this.getUsers();
      return;
    }
    this._githubService.getUser(user)
            .subscribe(data => {
              this.userApi = data;
            })
  }


  getImages(){
    this._githubService.getImages()
            .subscribe(data => {
              this.imagesApi = data.hits;
            })
  }


}
