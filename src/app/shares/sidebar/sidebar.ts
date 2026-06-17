import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Logoutservice } from '../../service/logoutservice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  // Injection des dépendances
  constructor(
    private router: Router,
    private deconn: Logoutservice
  ) {}

  //fonction de deconnexion
  logout(): void {
  
      Swal.fire({
        title: 'Déconnexion',
        text: 'Voulez-vous vraiment vous déconnecter ?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Annuler'
      }).then((result) => {
  
        if (result.isConfirmed) {
  
          this.deconn.logoutuser ().subscribe({
            next: (response) => {
  
              // Suppression des données locales
              localStorage.removeItem('token');
              localStorage.removeItem('user');
  
              Swal.fire({
                title: 'Succès',
                text: response.message || 'Déconnexion réussie.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
              });
  
              // Redirection vers la page de connexion
              this.router.navigate(['']);
            },
  
            error: (error) => {
              console.error(error);
  
              // Déconnexion locale même si l'API renvoie une erreur
              localStorage.removeItem('token');
              localStorage.removeItem('user');
  
              Swal.fire({
                title: 'Information',
                text: 'Vous avez été déconnecté.',
                icon: 'info'
              });
  
              this.router.navigate(['']);
            }
          });
  
        }
  
      });
    }

}
