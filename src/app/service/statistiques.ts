import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Statistiques {


  constructor(private httpclient:HttpClient){}


  // récupérer la liste
  getstatistiq(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/api/statistiques');
  }

  // récupérer la liste
  getstatpareqpt(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/api/statentresorti');
  }
  
}
