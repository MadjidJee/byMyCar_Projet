import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from '../_models';
import { VoituresService } from '../_services/voitures.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  param: number;
  voiture;
  voitures;
  photo: 'image1.jpg';
  constructor(private activatedRoute: ActivatedRoute,
    private voitureService: VoituresService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.loadVoiture(p['id']));
    this.voiture = this.voitureService.getVoitureById(this.param);
  }
  getVoitureById(id: number): Voiture {
    return this.voitures.filter(a => a.id === id)[0];
  }

  loadVoiture(id: string) {
    this.param = +id;
    this.voiture = this.voitureService.getVoitureById(this.param);
  }
  
}
