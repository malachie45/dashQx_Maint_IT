import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Technicien } from '../../service/technicien';

@Component({
  selector: 'app-technicien-it',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './technicien-it.html',
  styleUrl: './technicien-it.css',
})
export class TechnicienIT implements OnInit {

ngOnInit() {
  
}

tec:any[]=[];

formData = {
  mat_it: '',
  nom_tech: '',
  Pren_tech: '',
  cont_it: '',
  adr_it: '',
};

  // injection du service 
  constructor(private techservice:Technicien){}

onSubmit() {

  this.insertecho();
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
        mat_it: '',
        nom_tech: '',
        Pren_tech: '',
        cont_it: '',
        adr_it: '',
      };

}

insertecho(){
  this.techservice.insertechnicien(this.formData).subscribe(res =>{
        console.log(this.formData);  
      })
}

 onReset(form: NgForm) {
    form.resetForm();
  }





}
