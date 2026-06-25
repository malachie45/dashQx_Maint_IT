import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // nécessaire pour *ngFor
import { Statistiques } from '../../service/statistiques';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  
 

  constructor(private statservice:Statistiques) { }

  statss: any = {};
  statssbyeqpt: any[] = [];

  ngOnInit(): void {
    this.getstatis();
    this.getstatisbyeqpt();
  }

 

  //conexion au service stat
  getstatis(){
        this.statservice.getstatistiq().subscribe(res =>{
        this.statss = res;
      });
    }

    //gestion du tableau des stat
    getstatisbyeqpt(){
      this.statservice.getstatpareqpt().subscribe(res =>{
        this.statssbyeqpt = res;
      });
    }

}
