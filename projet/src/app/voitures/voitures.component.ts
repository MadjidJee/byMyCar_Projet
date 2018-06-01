import { Component, OnInit } from '@angular/core';
import { Voiture } from '../_models/voiture';
import { VoituresService } from '../_services/voitures.service';




@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  edit = false;
  selectedVoiture: Voiture;
  voitures;

  voiture = new Voiture();
  constructor(private voitureService: VoituresService) {

  }

  ngOnInit() {
    this.voitures = this.voitureService.getVoitures();

  }
  addVoiture() {
    this.voitures.push(this.voiture);

  }
  editListeVoitures(id: number) {
    console.log(id);
    this.voiture = this.getVoitureById(id);
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

}
