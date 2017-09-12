import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {User} from './user';
@Injectable()
export class UserService {

  constructor() { }
  localurl: string = 'http://localhost:64990/api/values/';
  private headers=new Headers({'Content-Type':'application/json'});
  // login(user:User){
  //   this.http.get
  // }

}
