import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://192.168.1.40:3000/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post('http://192.168.1.40:3000/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get('http://192.168.1.40:3000/users/username');
  }

}
