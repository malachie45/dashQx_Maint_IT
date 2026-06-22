import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // nécessaire pour *ngFor
import { Statistiques } from '../../service/statistiques';


interface EquipementStats {
  nom: string;
  entrees: number;
  sorties: number;
  missions: number;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  
  stats: {
    entrees: number;
    sorties: number;
    missions: number;
    equipements: EquipementStats[];
  } = {
    entrees: 0,
    sorties: 0,
    missions: 0,
    equipements: []
  };

  constructor(private statservice:Statistiques) { }

  statss: any = {};

  ngOnInit(): void {
    this.loadStats();
    this.getstatis();
  }

  loadStats(): void {
    // Données statiques pour le test, à remplacer par un service API
    this.stats = {
      entrees: 150,
      sorties: 120,
      missions: 35,
      equipements: [
        { nom: 'Equipement A', entrees: 50, sorties: 40, missions: 10 },
        { nom: 'Equipement B', entrees: 70, sorties: 60, missions: 15 },
        { nom: 'Equipement C', entrees: 30, sorties: 20, missions: 10 },
      ]
    };
  }

  //conexion au service stat
  getstatis(){
        this.statservice.getstatistiq().subscribe(res =>{
        this.statss = res;
      });
    }

}
