import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [RouterLink, RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
onSubmit() {
throw new Error('Method not implemented.');
}


}
