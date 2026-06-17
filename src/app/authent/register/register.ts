import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Registerservice } from '../../service/registerservice';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

//validation du formulaire
  onSubmit() {
    //appel de la fonction d'insertion
    this.createuser();
}

  onReset(form: NgForm) {

    form.resetForm();

  } 

  //oeil du password
  showPassword = false;

  togglePassword(): void {
    this.showPassword = !
    this.showPassword;
  }

// champs du formulaire
  formData={
    naame:'',
    email:'',
    password:'',
    password_confirmation:'',
  }

  //injection du service
  constructor(
    private router:Router,
    private registerservice:Registerservice){}
    

  // créer un utilisateur

  createuser(){

    const data = new FormData();

    data.append('naame', this.formData.naame);
    data.append('email', this.formData.email);
    data.append('password', this.formData.password);
    data.append('password_confirmation', this.formData.password_confirmation);

    // envoi au le service dédidé pour l'api
    this.registerservice.creatuser(data).subscribe({ 
      
      next: (res) => {

         console.log(res);
    
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'utilisateur créé avec succès !',
              timer: 2000,
              showConfirmButton: false,
            }).then(() => {
              this.router.navigate(['']);
            });

            //redirection vers la page login
              

            // réinitialisation du formulaire
            this.formData={
                naame:'',
                email:'',
                password:'',
                password_confirmation:'',
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
