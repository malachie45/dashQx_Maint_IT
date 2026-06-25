import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  // -----------------------------
  // PIE CHART
  // -----------------------------
  pieChartLabels: string[] = [
    'Entrées',
    'Sorties',
    'Missions'
  ];

  pieChartData = [
    {
      data: [0, 0, 0],
      backgroundColor: [
        '#0d6efd', // bleu
        '#198754', // vert
        '#ffc107'  // jaune
      ]
    }
  ];

  // -----------------------------
  // BAR CHART
  // -----------------------------
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

  constructor(
    private statservice: Statistiques
  ) {}

  statss: any = {};
  statssbyeqpt: any[] = [];

  ngOnInit(): void {
    this.getstatis();
    this.getstatisbyeqpt();
  }

  // -----------------------------
  // STATISTIQUES GLOBALES
  // -----------------------------
  getstatis() {

    this.statservice.getstatistiq().subscribe((res: any) => {

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

  // -----------------------------
  // STATISTIQUES PAR EQUIPEMENT
  // -----------------------------
  getstatisbyeqpt() {

    this.statservice.getstatpareqpt().subscribe((res: any[]) => {

      this.statssbyeqpt = res;

      this.barChartLabels =
        res.map(item => item.nom_eqpt);

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

}