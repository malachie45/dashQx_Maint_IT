import { Component } from '@angular/core';
import { Sidebar } from '../../shares/sidebar/sidebar';
import { Navbar } from '../../shares/navbar/navbar';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-layoutdash',
  standalone: true,
  imports: [ Sidebar,Navbar,RouterOutlet],
  templateUrl: './layoutdash.html',
  styleUrl: './layoutdash.css',
})
export class Layoutdash {}
