import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {

  constructor(private httpclient:HttpClient){}

  //create user
  loguser(data: any): Observable<any> {
    return this.httpclient.post('http://127.0.0.1:8000/api/loginuser', data);
  }

}
