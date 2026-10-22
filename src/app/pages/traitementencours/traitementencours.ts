import { Component } from '@angular/core';
import { AlerteEnCours, EquipementEnCours, Statistiques } from '../../service/statistiques';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traitementencours',
  imports: [CommonModule],
  templateUrl: './traitementencours.html',
  styleUrl: './traitementencours.css',
})
export class Traitementencours {


nombreEnCours = 0;
equipementsEnCours: EquipementEnCours[] = [];
chargement: any;
erreur: any;

// injection du service
constructor(
    private eqpencour:Statistiques
  ) {}


//recuperation des donnees de l4api

  chargerEquipementsEnCours(
  dateDebut?: string,
  dateFin?: string
): void {

  this.eqpencour.alertencour(dateDebut, dateFin).subscribe({
    next: (reponse: AlerteEnCours) => {
      this.nombreEnCours = reponse.nombre_en_cours;
      this.equipementsEnCours = reponse.equipements_en_cours ?? [];
    },
    error: (erreur) => {
      console.error(
        'Erreur lors du chargement des équipements en cours :',
        erreur
      );
    }
  });
}

}
