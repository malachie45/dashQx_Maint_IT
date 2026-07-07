import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Statistiques } from '../../service/statistiques';
import { BaseChartDirective } from 'ng2-charts';

import {
  Chart,
  PieController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

Chart.register(
  PieController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  // =============================
  // FILTRE DE PERIODE
  // =============================

  periode: string = 'month';

  dateDebut: string = '';

  dateFin: string = '';

  // =============================
  // PIE CHART
  // =============================

  pieChartLabels: string[] = [
    'Entrées',
    'Sorties',
    'Missions'
  ];

  pieChartData = [
    {
      data: [0, 0, 0],
      backgroundColor: [
        '#0d6efd',
        '#198754',
        '#ffc107'
      ]
    }
  ];

  // =============================
  // BAR CHART
  // =============================

  barChartLabels: string[] = [];

  barChartData = [
    {
      data: [] as number[],
      label: 'Entrées',
      backgroundColor: '#0d6efd'
    },
    {
      data: [] as number[],
      label: 'Sorties',
      backgroundColor: '#198754'
    }
  ];

  // =============================
  // DONNEES
  // =============================

  statss: any = {};

  statssbyeqpt: any[] = [];

  constructor(
    private statservice: Statistiques
  ) { }

  // =============================
  // INITIALISATION
  // =============================

  ngOnInit(): void {

    this.changerPeriode();

  }

  // =============================
  // GESTION DE LA PERIODE
  // =============================

  changerPeriode(): void {

    const today = new Date();

    switch (this.periode) {

      case 'today':

        this.dateDebut = this.formatDate(today);
        this.dateFin = this.formatDate(today);

        break;

      case 'week':

        const debutSemaine = new Date(today);
        debutSemaine.setDate(today.getDate() - today.getDay() + 1);

        const finSemaine = new Date(debutSemaine);
        finSemaine.setDate(debutSemaine.getDate() + 6);

        this.dateDebut = this.formatDate(debutSemaine);
        this.dateFin = this.formatDate(finSemaine);

        break;

      case 'month':

        this.dateDebut = this.formatDate(
          new Date(today.getFullYear(), today.getMonth(), 1)
        );

        this.dateFin = this.formatDate(
          new Date(today.getFullYear(), today.getMonth() + 1, 0)
        );

        break;

      case 'lastMonth':

        this.dateDebut = this.formatDate(
          new Date(today.getFullYear(), today.getMonth() - 1, 1)
        );

        this.dateFin = this.formatDate(
          new Date(today.getFullYear(), today.getMonth(), 0)
        );

        break;

      case 'year':

        this.dateDebut = this.formatDate(
          new Date(today.getFullYear(), 0, 1)
        );

        this.dateFin = this.formatDate(
          new Date(today.getFullYear(), 11, 31)
        );

        break;

      case 'custom':

        return;

    }

    this.actualiserDashboard();

  }

  // =============================
  // ACTUALISER DASHBOARD
  // =============================

  actualiserDashboard(): void {

    this.getstatis();

    this.getstatisbyeqpt();

  }

  // =============================
  // KPI
  // =============================

  getstatis(): void {

    // Étape suivante :
    // on enverra dateDebut et dateFin au service Laravel

    this.statservice.getstatistiq(this.dateDebut,
    this.dateFin).subscribe((res: any) => {

      this.statss = res;

      this.pieChartData = [
        {
          data: [
            res.nombre_entrees,
            res.nombre_sorties,
            res.nombre_missions
          ],
          backgroundColor: [
            '#0d6efd',
            '#198754',
            '#ffc107'
          ]
        }
      ];

    });

  }

  // =============================
  // TABLEAU + BAR CHART
  // =============================

  getstatisbyeqpt(): void {

    // Étape suivante :
    // on enverra dateDebut et dateFin au service Laravel

    this.statservice.getstatpareqpt(this.dateDebut,
    this.dateFin).subscribe((res: any[]) => {

      this.statssbyeqpt = res;

      this.barChartLabels = res.map(item => item.nom_eqpt);

      this.barChartData = [

        {
          data: res.map(item => item.entrees),
          label: 'Entrées',
          backgroundColor: '#0d6efd'
        },

        {
          data: res.map(item => item.sorties),
          label: 'Sorties',
          backgroundColor: '#198754'
        }

      ];

    });

  }

  // =============================
  // FORMAT DATE
  // =============================

  private formatDate(date: Date): string {

    const annee = date.getFullYear();

    const mois = String(date.getMonth() + 1).padStart(2, '0');

    const jour = String(date.getDate()).padStart(2, '0');

    return `${annee}-${mois}-${jour}`;

  }

}