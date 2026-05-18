import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { Dataservice } from '../../service/dataservice';
//pour la gestion des alertes
import Swal from 'sweetalert2';


@Component({
  selector: 'app-site',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './site.html',
  styleUrls: ['./site.css'],
})
export class Site implements OnInit{

   site:any

    formData = {
    site: '',
    contact: '',
    adresse: '',
    chef_agce: '',
  };
 constructor(private dataservice:Dataservice){}

  ngOnInit() {
      // Chargement automatique des données
    this.getsitedata();
  }

  
    // Quand on clique sur "Enregistrer"
  onSubmit() {

    this.insertdata();
          // ✅ message succès
      Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'Site enregistré avec succès !',
              timer: 2000,
              showConfirmButton: false
            });
            
    // 2. Réinitialiser le formulaire apres enregistrement
          this.formData = {
            site: '',
            contact: '',
            adresse: '',
            chef_agce: '',
          };
        }

    // nettoyage formulaire

  onReset(form: NgForm) {
    form.resetForm();
  }

     getsitedata(){
        this.dataservice.getData().subscribe(res =>{
        this.site = res;
      });
    }

    //Insertion des données
    insertdata(){
      this.dataservice.insertData(this.formData).subscribe(res =>{
        console.log(this.formData);
      })
    }


}
