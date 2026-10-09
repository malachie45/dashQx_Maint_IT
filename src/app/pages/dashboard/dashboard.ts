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
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    BaseChartDirective
  ],
  templateUrl:'./dashboard.html',
  styleUrl:'./dashboard.css'
})
export class Dashboard implements OnInit {


  // ===============================
  // FILTRE PERIODE
  // ===============================

  periode:string = "month";

  dateDebut:string = '';

  dateFin:string = '';


  // ===============================
  // DONNEES
  // ===============================

  statss:any = {};

  statssbyeqpt:any[]=[];

  bilanEqpt:any[]=[];



  constructor(
    private statservice:Statistiques
  ){}



  ngOnInit():void{

    this.changerPeriode();

  }



  // ===============================
  // GESTION PERIODE
  // ===============================

  changerPeriode(){


    let today = new Date();


    switch(this.periode){


      case "today":

        this.dateDebut=this.formatDate(today);
        this.dateFin=this.formatDate(today);

      break;



      case "month":

        this.dateDebut=this.formatDate(
          new Date(today.getFullYear(),today.getMonth(),1)
        );


        this.dateFin=this.formatDate(
          new Date(today.getFullYear(),today.getMonth()+1,0)
        );

      break;



      case "lastMonth":

        this.dateDebut=this.formatDate(
          new Date(today.getFullYear(),today.getMonth()-1,1)
        );


        this.dateFin=this.formatDate(
          new Date(today.getFullYear(),today.getMonth(),0)
        );

      break;



      case "year":

        this.dateDebut=this.formatDate(
          new Date(today.getFullYear(),0,1)
        );


        this.dateFin=this.formatDate(
          new Date(today.getFullYear(),11,31)
        );

      break;


      case "custom":

        return;

    }


    this.actualiserDashboard();

  }





  // ===============================
  // RAFRAICHIR DASHBOARD
  // ===============================

  actualiserDashboard(){


    console.log(
      "periode :",
      this.dateDebut,
      this.dateFin
    );


    this.getstatis();

    this.getstatisbyeqpt();

    this.getBilanEquipements();

  }





  // ===============================
  // KPI
  // ===============================

  getstatis(){


    this.statservice
    .getstatistiq(
      this.dateDebut,
      this.dateFin
    )
    .subscribe({

      next:(res:any)=>{


        this.statss=res;


        this.pieChartData=[

          {
            data:[
              res.nombre_entrees,
              res.nombre_sorties,
              res.nombre_missions
            ],

            backgroundColor:[
              '#0d6efd',
              '#198754',
              '#ffc107'
            ]

          }

        ];


      },


      error:(err)=>{

        console.log(err);

      }


    });


  }






  // ===============================
  // TABLEAU EQUIPEMENT
  // ===============================

  /* getstatisbyeqpt(){


    this.statservice
    .getstatpareqpt(
      this.dateDebut,
      this.dateFin
    )
    .subscribe({

      next:(res:any[])=>{


        this.statssbyeqpt=res;


        this.barChartLabels =
        res.map(x=>x.nom_eqpt);



        this.barChartData=[

          {

            data:
            res.map(x=>x.entrees),

            label:"Entrées",

            backgroundColor:"#0d6efd"

          },


          {

            data:
            res.map(x=>x.sorties),

            label:"Sorties",

            backgroundColor:"#198754"

          }

        ];


      },


      error:(err)=>{

        console.log(err);

      }


    });


  } */



getstatisbyeqpt(): void {
  this.statservice
    .getstatpareqpt(this.dateDebut, this.dateFin)
    .subscribe({
      next: (res: any) => {
        console.log('Réponse API équipements :', res);

        // Vérifier que l'API retourne un tableau
        if (!Array.isArray(res)) {
          console.error('La réponse API doit être un tableau.', res);
          this.barChartLabels = [];
          this.barChartData = [
            { data: [], label: 'Entrées', backgroundColor: '#0d6efd' },
            { data: [], label: 'Sorties', backgroundColor: '#198754' }
          ];
          return;
        }

        // Afficher les clés réellement reçues
        if (res.length > 0) {
          console.log('Propriétés du premier équipement :', res[0]);
        }

        this.statssbyeqpt = res;

        this.barChartLabels = res.map(
          (x: any) => x.nom_eqpt ?? 'Équipement inconnu'
        );

        this.barChartData = [
          {
            data: res.map(
              (x: any) => Number(x.entrees ?? 0)
            ),
            label: 'Entrées',
            backgroundColor: '#0d6efd'
          },
          {
            data: res.map(
              (x: any) => Number(x.sorties ?? 0)
            ),
            label: 'Sorties',
            backgroundColor: '#198754'
          }
        ];

        console.log('Labels du graphique :', this.barChartLabels);
        console.log('Données du graphique :', this.barChartData);
      },

      error: (err: any) => {
        console.error('Erreur API graphique :', err);
      }
    });
}




  // ===============================
  // BILAN STATUT MAINTENANCE
  // ===============================


  getBilanEquipements(){


    this.statservice
    .getstatuettaux(
      this.dateDebut,
      this.dateFin
    )
    .subscribe({

      next:(res:any[])=>{


        console.log(
          "Bilan maintenance",
          res
        );


        this.bilanEqpt=res;


      },


      error:(err)=>{

        console.log(err);

      }

    });


  }






  // ===============================
  // CHARTS
  // ===============================


  pieChartLabels=[
    "Entrées",
    "Sorties",
    "Missions"
  ];


  pieChartData:any=[

    {

      data:[
        0,
        0,
        0
      ],

      backgroundColor:[
        "#0d6efd",
        "#198754",
        "#ffc107"
      ]

    }

  ];



  barChartLabels:string[]=[];


  barChartData:any=[

    {

      data:[],
      label:"Entrées",
      backgroundColor:"#0d6efd"

    },


    {

      data:[],
      label:"Sorties",
      backgroundColor:"#198754"

    }

  ];





  private formatDate(date:Date):string{


    return date.getFullYear()
    +"-"+
    String(date.getMonth()+1).padStart(2,'0')
    +"-"+
    String(date.getDate()).padStart(2,'0');

  }



}