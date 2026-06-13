import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [RouterLink, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}
