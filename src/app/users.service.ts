import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _baseUri = "http://localhost:8080/users/"
  constructor(private _http : HttpClient) { }

  saveUser(user){
    return this._http.post< {message : string, user : any } >(this._baseUri+'register',user);
  }

   doLogin(user){
     return this._http.post<{ message : string, user: any, token : string}>(this._baseUri+'login',user);
   }
   
  
}
