import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Technicien {

    apiUrl = "http://127.0.0.1:8000/api/recup";

  apiUrl2 = "http://127.0.0.1:8000/api/recup";

constructor(private httpclient:HttpClient){}

// récupérer la liste
  getsorti(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/api/recup');
  }

  // ajouter un équipement
  insertechnicien(data: any): Observable<any> {
    return this.httpclient.post('http://127.0.0.1:8000/api/intech', data);
  }

  // modifier un équipement
  updatesortie(id: number, data: any): Observable<any> {
    return this.httpclient.put(`${this.apiUrl}/${id}`, data);
  }

  // supprimer un équipement
  deletesortie(id: number): Observable<any> {
    return this.httpclient.delete(`${this.apiUrl2}/${id}`);
  }

}
