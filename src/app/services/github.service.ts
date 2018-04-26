import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { REST_URLS_GITHUB, REST_URLS_PIXABAY } from '../config/config';

@Injectable()
export class GithubService {

  private username = 'ing27villadiego';
  private client_id = '48780b555e7af4247615';
  private client_secret = '512f9aebf1e4774afaaef9006a0cd7182ff917cb';

  totalHits: number = 0;

  constructor(private _http: HttpClient) {
    console.log('GithubService Init...')
  }

  getUsers(){
    let url =  REST_URLS_GITHUB + 'ing27villadiego';
     return this._http.get(url)
              .map( (resp: any) => {
                //this.totalHits = resp.totalHits;
                return resp;

              })
  }

  getUser(user: string){
    let url =  REST_URLS_GITHUB + user;
     return this._http.get(url)
              .map( (resp: any) => {
                return resp;

              })
  }

  getImages(){
    let url =  REST_URLS_PIXABAY;
     return this._http.get(url)
              .map( (resp: any) => {
                this.totalHits = resp.totalHits;
                return resp;

              })
  }

}
