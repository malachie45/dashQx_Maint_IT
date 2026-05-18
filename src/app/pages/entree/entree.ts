import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceEntree } from '../../service/service-entree';

//pour la gestion des alertes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entree',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entree.html',
  styleUrl: './entree.css',
})
export class Entree {

  eqpt:any

   message = '';
showMessage = false;

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
    fichier:''
  };


  // injection du service 
  constructor(private entreeservice:ServiceEntree){}

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
                origine: '',
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

    //insertion des données
    insertentreedata(){
      this.entreeservice.insertEntree(this.formData).subscribe(res =>{
        console.log(this.formData);  
      })
    }

}
