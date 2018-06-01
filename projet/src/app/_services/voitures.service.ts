import { Injectable, EventEmitter } from '@angular/core';
import { Voiture } from '../_models';


@Injectable({
  providedIn: 'root'
})
export class VoituresService {
  voitures = [new Voiture('Nissan', 'Quashqai', '21000', 'diesel', 'manuelle', 2000, 'image1.jpg'),
  new Voiture('bmw', 'x3', '45000', 'diesel', 'automatique', 2001, 'image2.jpg'),
  new Voiture('dodge', 'durango', '73000', 'diesel', 'manuelle', 2002, 'image3.jpg'),
  new Voiture('peugeot', '3008', '51000', 'diesel', 'automatique', 2017, 'image4.jpg')];

  constructor() {

  }
  getVoitures() {
    return this.voitures;
  }
  getVoitureById(id: number): Voiture {
    return this.voitures.filter(a => a.id === id)[0];
  }

}
