import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Statistiques {

  private api = 'http://127.0.0.1:8000/api';

  constructor(private httpclient: HttpClient) {}

  // =============================
  // KPI
  // =============================
  getstatistiq(
    dateDebut: string,
    dateFin: string
  ): Observable<any> {

    const params = new HttpParams()
      .set('dateDebut', dateDebut)
      .set('dateFin', dateFin);

    return this.httpclient.get(
      `${this.api}/statistiques`,
      { params }
    );

  }

  // =============================
  // Tableau + graphique
  // =============================
  getstatpareqpt(
    dateDebut: string,
    dateFin: string
  ): Observable<any> {

    const params = new HttpParams()
      .set('dateDebut', dateDebut)
      .set('dateFin', dateFin);

    return this.httpclient.get(
      `${this.api}/statentresorti`,
      { params }
    );

  }


  // =============================
  // Taux par statut et par eqpt
  // =============================
  getstatuettaux(
    dateDebut: string,
    dateFin: string
  ): Observable<any> {

    const params = new HttpParams()
      .set('dateDebut', dateDebut)
      .set('dateFin', dateFin);

    return this.httpclient.get(
      `${this.api}/bilanequipements`,
      { params }
    );

  }

   // =============================
  // Alerte jean
  // =============================

  

alertencour(dateDebut?: string, dateFin?: string) {
  let params: any = {};

  if (dateDebut && dateFin) {
    params = { dateDebut, dateFin };
  }

  return this.httpclient.get<{ nombre_en_cours: number }>(
    'http://127.0.0.1:8000/api/alertencours',
    { params }
  );
}


}
