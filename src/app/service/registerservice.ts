import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Registerservice {


  constructor(private httpclient:HttpClient){}

  //create user
  creatuser(data: any): Observable<any> {
    return this.httpclient.post('http://127.0.0.1:8000/api/register', data);
  }

}
