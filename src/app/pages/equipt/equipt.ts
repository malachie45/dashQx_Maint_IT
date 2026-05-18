import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceEqpt } from '../../service/service-eqpt';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipt',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './equipt.html',
  styleUrl: './equipt.css',
})
export class Equipt implements OnInit {

  eqpt:any
  sit:any[]=[];

  formData = {
    num_seri: '',
    code_sit: '',
    nom_eqpt: '',
    model_eqpt: '',
    id_site: null,
  };

  constructor(private eqptervice:ServiceEqpt){}
  
  ngOnInit() {
    this.recupsite();
  }


  
  onSubmit() {
    // ✅ message succès
         this.insertdataeqpt();
              Swal.fire({
                      icon: 'success',
                      title: 'Succès',
                      text: 'Equipement enregistré avec succès !',
                      timer: 2000,
                      showConfirmButton: false
                    });
     // 2. Réinitialiser le formulaire apres enregistrement              
                this.formData = {
                num_seri: '',
                code_sit: '',
                nom_eqpt: '',
                model_eqpt: '',
                id_site: null,
              };  
  }

    // nettoyage formulaire

  onReset(form: NgForm) {
    form.resetForm();
  }

//recuperation des entrée
  getentreedata(){
        this.eqptervice.getEquipements().subscribe(res =>{
        this.eqpt = res;
      });
    }

    //recuperation des site pour alimenter la combo
    recupsite(){
      this.eqptervice.getSiteCombo().subscribe(res =>{
        this.sit = res;
      })
    }

    //insertion des données
    insertdataeqpt(){
       this.eqptervice.insertEquipement(this.formData).subscribe(res =>{
        
        // Sécurité : si id_site est une chaîne vide ou autre chose qu'un nombre, on force null
        if (!this.formData.id_site || typeof this.formData.id_site === 'object') {
      // Optionnel : vous pouvez afficher une alerte ici car le site est requis
             }

             this.eqptervice.insertEquipement(this.formData).subscribe({
    next: (res) => {
      console.log("Enregistré !", res);
        console.log(this.formData);  
      },
      error: (err) => {
      console.error("Erreur détaillée:", err.error.message);
    }
    })
    })
 

    // Affiche l'objet exact qui part vers Laravel
  /* console.log("DONNÉES ENVOYÉES :", this.formData);

  if (!this.formData.id_site) {
    Swal.fire('Erreur', 'Veuillez sélectionner un site !', 'error');
    return; // On arrête tout si l'ID est vide
  }

  this.eqptervice.insertEquipement(this.formData).subscribe(res => {
    console.log("Réponse du serveur :", res);
  }); */

}


}
