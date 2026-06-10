import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Searchservice {


  constructor(private httpclient:HttpClient){}

  getsearch(recherch: string): Observable<any> {
  return this.httpclient.get(
    `http://127.0.0.1:8000/api/recherche-entree?recherch=${recherch}`
  );
}


}
