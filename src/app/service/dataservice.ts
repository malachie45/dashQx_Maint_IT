import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {

  constructor(private httpclient:HttpClient){}

getData(){
    return this.httpclient.get('http://127.0.0.1:8000/api/recup');
}

insertData(data: any){
    return this.httpclient.post('http://127.0.0.1:8000/api/insite',data);
}


}
