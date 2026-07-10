import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceSortie {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private httpclient: HttpClient
  ) {}

  //===========================
  // Liste
  //===========================

  getsorti(): Observable<any>{

    return this.httpclient.get(
      `${this.apiUrl}/recup`
    );

  }

  //===========================
  // Insertion
  //===========================

  insertsortie(data: FormData): Observable<any>{

    return this.httpclient.post(
      `${this.apiUrl}/insortis`,
      data
    );

  }

  //===========================
  // Modification
  //===========================

  updatesortie(id:number,data:any):Observable<any>{

    return this.httpclient.put(
      `${this.apiUrl}/recup/${id}`,
      data
    );

  }

  //===========================
  // Suppression
  //===========================

  deletesortie(id:number):Observable<any>{

    return this.httpclient.delete(
      `${this.apiUrl}/recup/${id}`
    );

  }

}