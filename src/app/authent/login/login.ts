import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [RouterLink, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
