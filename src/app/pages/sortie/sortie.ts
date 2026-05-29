import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceSortie } from '../../service/service-sortie';
import Swal from 'sweetalert2';
import { Search } from "../../composants/search/search";
import { Equipt } from '../equipt/equipt';

@Component({
  selector: 'app-sortie',
  standalone: true,
  imports: [FormsModule, Search],
  templateUrl: './sortie.html',
  styleUrl: './sortie.css',
})
export class Sortie {

  donneesRecherche: any;



sorti:any

  formData = {
    dateEntree: '',
    origine: '',
    codeSite: '',
    numeroSerie: '',
    motif: '',
    traitement: '',
    dateDebut: '',
    dateFin: '',
    statut: '',
    eqpt: '',
    model: ''
  };

  constructor(private dataservice:ServiceSortie){}

  onSubmit() {
    // ✅ message succès
          Swal.fire({
                  icon: 'success',
                  title: 'Succès',
                  text: 'Sortie enregistrée avec succès !',
                  timer: 2000,
                  showConfirmButton: false
                });

     // 2. Réinitialiser le formulaire           
         this.formData = {
    dateEntree: '',
    origine: '',
    codeSite: '',
    numeroSerie: '',
    motif: '',
    traitement: '',
    dateDebut: '',
    dateFin: '',
    statut: '',
    eqpt: '',
    model: ''
  };

  }

  recupererDonnees(data: any) {
    this.donneesRecherche = data;
    console.log(data);
    // remplissage automatique des champs
      this.formData.eqpt = data.data[0].eqpt;
      this.formData.model = data.data[0].model;
      this.formData.codeSite = data.data[0].cod_sit;
      this.formData.numeroSerie = data.data[0].serial_num;
      
}


  getsitedata(){
        this.dataservice.getsorti().subscribe(res =>{
        this.sorti = res;
      });
    }

    //Insertion des données
    insertdata(){
      this.dataservice.insertsortie(this.formData).subscribe(res =>{
        console.log(this.formData);
      })
    }

  onReset(form: NgForm) {
    form.resetForm();
  }
}
