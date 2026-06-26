import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Technicien } from '../../service/technicien';

@Component({
  selector: 'app-typemaintenance',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './typemaintenance.html',
  styleUrl: './typemaintenance.css',
})
export class Typemaintenance {

  // champs du formulaire
    formData = {
      typ_trait: '',
    };

  onSubmit() {
    this.insertypmaint();

    // Succes apres enregistrement
    
       Swal.fire({
         icon: 'success',
         title: 'Succès',
         text: 'Technicien avec succès !',
         timer: 2000,
         showConfirmButton: false
        });
    
     // 2. Réinitialiser le formulaire apres enregistrement 
          this.formData = {
            typ_trait: '',
          };
    }




  

    // injection du service 
      constructor(private typintervservice:Technicien){}

    //methode d'insertion de type de maintenance
      insertypmaint(){
    this.typintervservice.insertypmaint(this.formData).subscribe(res =>{
          console.log(this.formData);  
        })
    }

     // reset du formulaire
      onReset(form: NgForm) {
          form.resetForm();
        }
      }
