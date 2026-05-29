import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceEntree {

  apiUrl = "http://127.0.0.1:8000/api/recup";

  apiUrl2 = "http://127.0.0.1:8000/api/recup";

constructor(private httpclient:HttpClient){}

// récupérer la liste
  getEntree(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/api/recup');
  }

  // récupérer la liste des equipements en combo
  getEqptCombo(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/api/comboeqpt');
  }

  // récupérer la liste des sites
    getSiteComboFentree(): Observable<any> {
      return this.httpclient.get('http://127.0.0.1:8000/api/combsiteentre');
    }

  // ajouter un équipement
  insertEntree(data: any): Observable<any> {
    return this.httpclient.post('http://127.0.0.1:8000/api/inentrees', data);
  }

  // modifier un équipement
  updateEntree(id: number, data: any): Observable<any> {
    return this.httpclient.put(`${this.apiUrl}/${id}`, data);
  }

  // supprimer un équipement
  deleteEEntree(id: number): Observable<any> {
    return this.httpclient.delete(`${this.apiUrl2}/${id}`);
  }
}


