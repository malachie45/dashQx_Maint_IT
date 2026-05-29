import { Component,  EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Searchservice } from '../../service/search';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  rec: any;
 // pour preparer l'envoi au composant Y
  @Output() resultatRecherche = new EventEmitter<any>();

  formData = {
    recherch: '',
  };

  constructor(private rechservice: Searchservice) {}

  onSubmit() {
    this.rechservice.getsearch(this.formData.recherch)
      .subscribe(res => {

        this.rec = res;

        // envoie au parent Y
        this.resultatRecherche.emit(this.rec);

      });
  }
}