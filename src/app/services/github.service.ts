import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'd7bac0de34e542f2d035';
  private client_secret = '8a4105f8c0977542253958b809d43b29f0384ed3';

  constructor(private _http:Http) {
    
  }

  updateUser(username: string) {
    this.username = username;
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
}
