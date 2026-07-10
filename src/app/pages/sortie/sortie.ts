import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { Search } from "../../composants/search/search";
import { ServiceSortie } from '../../service/service-sortie';

@Component({
  selector: 'app-sortie',
  standalone: true,
  imports: [FormsModule, Search],
  templateUrl: './sortie.html',
  styleUrl: './sortie.css',
})
export class Sortie {

  @ViewChild('form') form!: NgForm;

  constructor(
    private dataservice: ServiceSortie
  ) {}

  //===========================
  // Image sélectionnée
  //===========================

  selectedFile!: File;

  onFileSelected(event: any) {

    if(event.target.files.length > 0){

      this.selectedFile = event.target.files[0];

    }

  }

  //===========================
  // Formulaire
  //===========================

  formData = {

    num_ord:'',
    model:'',
    eqpt:'',
    origine:'',
    codeSite:'',
    numeroSerie:'',
    motifentre:'',
    dateEntree:'',
    traitement:'',
    datesorti:'',
    statut:''

  };

  //===========================
  // Soumission
  //===========================

  onSubmit(){

    this.insertdata();

  }

  //===========================
  // Recherche automatique
  //===========================

  recupererDonnees(data:any){

      console.log(data);

      this.formData.num_ord      = data.id_eqpt;
      this.formData.eqpt         = data.nom_eqpt;
      this.formData.model        = data.model;
      this.formData.codeSite     = data.cod_sit;
      this.formData.numeroSerie  = data.serial_num;
      this.formData.motifentre   = data.motif;
      this.formData.dateEntree   = data.date_entree;
      this.formData.origine      = data.nom_site;

  }

  //===========================
  // Insertion
  //===========================

  insertdata(){

    const data = new FormData();

    data.append('image', this.selectedFile);

    data.append('num_ord', this.formData.num_ord);
    data.append('model', this.formData.model);
    data.append('eqpt', this.formData.eqpt);
    data.append('origine', this.formData.origine);
    data.append('codeSite', this.formData.codeSite);
    data.append('numeroSerie', this.formData.numeroSerie);
    data.append('motifentre', this.formData.motifentre);

    // Laravel attend "dateDebut"
    data.append('dateDebut', this.formData.dateEntree);

    data.append('traitement', this.formData.traitement);
    data.append('datesorti', this.formData.datesorti);
    data.append('statut', this.formData.statut);

    this.dataservice.insertsortie(data).subscribe({

      next:(res)=>{

        console.log(res);

        Swal.fire({

          icon:'success',
          title:'Succès',
          text:'Sortie enregistrée avec succès !',
          timer:2000,
          showConfirmButton:false

        });

        this.form.resetForm();

      },

      error:(err)=>{

        console.log(err);

        Swal.fire({

          icon:'error',
          title:'Erreur',
          text:err.error.message

        });

      }

    });

  }

  //===========================
  // Annuler
  //===========================

  onReset(form:NgForm){

    form.resetForm();

  }

}