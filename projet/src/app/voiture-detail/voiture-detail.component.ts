import { Component, OnInit, Input } from '@angular/core';
import { Voiture } from '../_models/voiture';



@Component({
  selector: 'app-voiture-detail',
  templateUrl: './voiture-detail.component.html',
  styleUrls: ['./voiture-detail.component.css']
})
export class VoitureDetailComponent implements OnInit {
  @Input() voiture: Voiture;
  constructor() { }

  ngOnInit() {
  }

}
