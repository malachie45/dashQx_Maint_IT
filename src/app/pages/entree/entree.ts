import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceEntree } from '../../service/service-entree';

//pour la gestion des alertes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entree',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './entree.html',
  styleUrl: './entree.css',
})
export class Entree implements OnInit {

  eqpt:any
  eq:any[]=[];
  sit:any[]=[];

   message = '';
showMessage = false;

  formData = {
    dateEntree: '',
    id_sit: null,
    id_eqpt: null,
    model: '',
    codeSite: '',
    numeroSerie: '',
    motif: '',
    traitement: '',
    dateDebut: '',
    dateFin: '',
    statut: '',
    fichier:''
  };


  // injection du service 
  constructor(private entreeservice:ServiceEntree){}
  
  ngOnInit(){
    this.combogeteqpt();
    this.combogetsitFentrees();
  }

  // cliquer sur enregistrer
  onSubmit() {
    // ✅ message succès
     
          Swal.fire({
                  icon: 'success',
                  title: 'Succès',
                  text: 'Entrée enregistré avec succès !',
                  timer: 2000,
                  showConfirmButton: false
                });
                
        // 2. Réinitialiser le formulaire
              this.formData = {
                dateEntree: '',
                id_sit: null,
                id_eqpt: null,
                model: '',
                codeSite: '',
                numeroSerie: '',
                motif: '',
                traitement: '',
                dateDebut: '',
                dateFin: '',
                statut: '',
                fichier:''
              };
        }

  onReset(form: NgForm) {
    form.resetForm();
  }


  //recuperation des entrée
  getentreedata(){
        this.entreeservice.getEntree().subscribe(res =>{
        this.eqpt = res;
      });
    }

    //récupération des sites dans combo site duForm des entrées
    combogetsitFentrees(){
      this.entreeservice.getSiteComboFentree().subscribe(res =>{
        this.sit = res;
      })
    }

    //récupération des equipements
    combogeteqpt(){
      this.entreeservice.getEqptCombo().subscribe(res =>{
        this.eq = res
      })
    }

    //insertion des données
    insertentreedata(){
      this.entreeservice.insertEntree(this.formData).subscribe(res =>{
        console.log(this.formData);  
      })
    }

}

// insertecho(){
//   this.techservice.insertechnicien(this.formData).subscribe(res =>{
//         console.log(this.formData);  
//       })
// }