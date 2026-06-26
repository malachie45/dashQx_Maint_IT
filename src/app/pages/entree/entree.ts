import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceEntree } from '../../service/service-entree';

// gestion des alertes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entree',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './entree.html',
  styleUrl: './entree.css',
})
export class Entree implements OnInit {


  eqpt: any;
  eq: any[] = [];
  sit: any[] = [];
  techno: any[] = [];
  typinterv: any[] = [];

  // fichier sélectionné
  selectedFile!: File;

  message = '';
  showMessage = false;

  formData = {
    dateEntree: '',
    modele: '',
    id_sit: null,
    id_eqpt: null,
    id_techn: null,
    id_typinterv: null,
    codeSite: '',
    numeroSerie: '',
    motif: '',
    dateDebut: '',
    statut: '',
    fichier: ''
  };

  // injection du service
  constructor(private entreeservice: ServiceEntree) {}

  ngOnInit() {

    //initialisation des combo
    this.combogeteqpt();
    this.combogetsitFentrees();
    this.combogettechnoFentrees()
    this.combogettypintervFentrees()
    

  }

  // récupération du fichier
  onFileSelected(event: any) {

    if (event.target.files.length > 0) {

      this.selectedFile = event.target.files[0];

    }

  }

  // cliquer sur enregistrer
  onSubmit() {

    this.insertentreedata();

    // réinitialisation du formulaire
        this.formData = {
          dateEntree: '',
          modele: '',
          id_sit: null,
          id_eqpt: null,
          id_techn: null,
          id_typinterv: null,
          codeSite: '',
          numeroSerie: '',
          motif: '',
          dateDebut: '',
          statut: '',
          fichier: ''
        };

  }

  onReset(form: NgForm) {

    form.resetForm();

  }

  // récupération des entrées
  getentreedata() {

    this.entreeservice.getEntree().subscribe(res => {

      this.eqpt = res;

    });

  }

  // récupération des sites
  combogetsitFentrees() {

    this.entreeservice.getSiteComboFentree().subscribe(res => {

      this.sit = res;

    });

  }
  // récupération des Technicien
  combogettechnoFentrees() {

    this.entreeservice.gettechnoComboFentree().subscribe(res => {

      this.techno = res;

    });

  }
  // récupération des Technicien
  combogettypintervFentrees() {

    this.entreeservice.gettypintervComboFentree().subscribe(res => {

      this.typinterv = res;

    });

  }




  // récupération des équipements
  combogeteqpt() {

    this.entreeservice.getEqptCombo().subscribe(res => {

      this.eq = res;

    });

  }

  // insertion des données
  insertentreedata() {

    const data = new FormData();

    // image
    data.append('fichier', this.selectedFile);

    // correspond à "model" attendu par Laravel
    data.append('model', this.formData.modele);

    data.append('dateEntree', this.formData.dateEntree);
    data.append('dateDebut', this.formData.dateDebut);
    data.append('codeSite', this.formData.codeSite);
    data.append('numeroSerie', this.formData.numeroSerie);
    data.append('motif', this.formData.motif);
    data.append('statut', this.formData.statut);

    data.append('id_sit', String(this.formData.id_sit));
    data.append('id_eqpt', String(this.formData.id_eqpt));

    this.entreeservice.insertEntree(data).subscribe({

      next: (res) => {

        console.log(res);

        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Entrée enregistrée avec succès !',
          timer: 2000,
          showConfirmButton: false
        });

        

      },

      error: (err) => {

        console.log(err);

        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Erreur lors de l’enregistrement'
        });

      }

    });

  }

}