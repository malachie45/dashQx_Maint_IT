
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Équipement en cours d'intervention
export interface EquipementEnCours {
  id: number;
  model: string;
  cod_sit: string;
  serial_num: string;
  technicien: string;
}

// Réponse de l'API /alertencours
export interface AlerteEnCours {
  nombre_en_cours: number;
  equipements_en_cours: EquipementEnCours[];
}

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
  // Taux par statut et par équipement
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
  // Alerte : équipements en cours
  // =============================
  alertencour(
    dateDebut?: string,
    dateFin?: string
  ): Observable<AlerteEnCours> {

    let params = new HttpParams();

    if (dateDebut && dateFin) {
      params = params
        .set('dateDebut', dateDebut)
        .set('dateFin', dateFin);
    }

    return this.httpclient.get<AlerteEnCours>(
      `${this.api}/alertencours`,
      { params }
    );
  }
}
