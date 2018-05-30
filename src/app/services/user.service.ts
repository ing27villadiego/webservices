import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { REST_URLS_GAMES } from '../config/config';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {
    console.log('GithubService Init...')
  }

  getUsers(){
    let url =  REST_URLS_GAMES + 'usuarios';
     return this._http.get(url)
              .map( (resp: any) => {
                //this.totalHits = resp.totalHits;
                return resp;

              })
  }


}
