import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceEqpt {

  apiUrl = "http://127.0.0.1:8000/api/recup";

  apiUrl2 = "http://127.0.0.1:8000/api/recup";

constructor(private httpclient:HttpClient){}

// récupérer la liste
  getEquipements(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/api/recup');
  }

  // récupérer la liste
  getSiteCombo(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/api/combsite');
  }

  // ajouter un équipement
  insertEquipement(data: any) {
    return this.httpclient.post('http://127.0.0.1:8000/api/ineqpt', data);
  }

  // modifier un équipement
  updateEquipement(id: number, data: any): Observable<any> {
    return this.httpclient.put(`${this.apiUrl}/${id}`, data);
  }

  // supprimer un équipement
  deleteEquipement(id: number): Observable<any> {
    return this.httpclient.delete(`${this.apiUrl2}/${id}`);
  }

}
