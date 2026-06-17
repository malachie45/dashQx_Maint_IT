import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Loginservice } from '../../service/loginservice';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [RouterLink, RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  //soumission du formulaire
  onSubmit() {
    this.userconnect()
  }

  // click sur le bouton annuler
  onReset(form: NgForm) {
    form.resetForm();
  } 

  //creation du formulaire
  formData={
    email:'',
    password:'',
  }

constructor(
  //variable pour la navigation
  private route:Router,
  //injection du service loginservice
  private logservice:Loginservice){}

userconnect(){
  //récupération des entrées du formulaire
  const data = new FormData();
    data.append('email', this.formData.email);
    data.append('password', this.formData.password);

    // envoi au le service dédidé pour l'api
        this.logservice.loguser (data).subscribe({ 
          
          next: (res) => {
    
              console.log(res);
          
                  Swal.fire({
                    icon: 'success',
                    title: 'Succès',
                    text: 'utilisateur créé avec succès !',
                    timer: 2000,
                    showConfirmButton: false,
                  }).then(() => {
              this.route.navigate(['/lay']);
            });
                  // réinitialisation du formulaire
                  this.formData={
                      email:'',
                      password:'',
                    }
    
              },
    
                // GESTION DES ERREUR
                error: (err) => {
                
                        console.log(err);
                
                        Swal.fire({
                          icon: 'error',
                          title: 'Erreur',
                          text: 'Erreur lors de l’enregistrement'
                        });
                
                      }
        
               
              
              })

}


}
