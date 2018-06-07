import { Component, OnInit } from '@angular/core';
import { Voiture } from '../_models/voiture';
import { VoituresService } from '../_services/voitures.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  edit = false;
  selectedVoiture: Voiture;
  voitures = [];
  voiture = new Voiture();
  liste = '';

 // constructor(private voitureService: VoituresService) {}
 constructor(private voitureService: VoituresService, private http: HttpClient) { }

  ngOnInit() {
  // this.voitures = this.voitureService.getAll();
  // this.getAll().subscribe(r => this.liste = JSON.stringify(r));
   // this.http.get('http://localhost:8080/voitures').subscribe(r => this.showReturne(r));

   this.voitureService.getAll().subscribe(r => this.showReturne(r));
  }
  addVoiture(voiture: Voiture)  {
    //this.voitures.push(this.voiture);

     this.voitureService.add(voiture ).subscribe(r => console.log(r));

  }
  editListeVoitures(id: number) {
    console.log(id);
   // this.voiture = this.getVoitureById(id);
    this.voitureService.getOne(id).subscribe(r => this.showReturne(r));
    console.log(this.getVoitureById(id));
    this.edit = true;

  }
  getVoitureById(id: number): Voiture {
    return this.voitures.filter(a => a.id === id)[0];
  }
  iditOver() {
    this.edit = false;
    this.voiture = new Voiture();
  }

  onSelect(e: Voiture): void {
    this.selectedVoiture = e;
  }
  showReturne(r) {
    this.liste = JSON.stringify(r);
    this.voitures = JSON.parse(this.liste);
   // console.log(r);
  }
// List<Photo> fintPhotoByIdVoitures (Integer id)
}
