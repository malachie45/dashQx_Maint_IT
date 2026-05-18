import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceMission } from '../../service/service-mission';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mission',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './mission.html',
  styleUrl: './mission.css',
})
export class Mission {

    formData = {
    date_deb_miss: '',
    date_fin_miss: '',
    Motif: '',
    destina: '',
    observa: '',
  };

constructor(private dataservice:ServiceMission){}

mission: any

  // Quand on clique sur "Enregistrer"
  onSubmit() {
    console.log("Données envoyées :", this.formData);
    //  message succès
          Swal.fire({
                  icon: 'success',
                  title: 'Succès',
                  text: 'Mission enregistrée avec succès !',
                  timer: 2000,
                  showConfirmButton: false
                });
    // 2. Réinitialiser le formulaire apres enregistrement
          this.formData = {
                date_deb_miss: '',
                date_fin_miss: '',
                Motif: '',
                destina: '',
                observa: '',
              };
  }

    // nettoyage formulaire

  onReset(form: NgForm) {
    form.resetForm();
  }


  getsitedata(){
        this.dataservice.getMissions().subscribe(res =>{
        this.mission = res;
      });
    }

    //Insertion des données
    insertdata(){
      this.dataservice.insertMissions(this.formData).subscribe(res =>{
        console.log(this.formData);
        
      })
    }

}
