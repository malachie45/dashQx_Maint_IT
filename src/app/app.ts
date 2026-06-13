import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layoutdash } from './layout/layoutdash/layoutdash';
import { routes } from './app.routes';
import { Register } from "./authent/register/register";
import { Login } from "./authent/login/login";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Qxfront');
}
