import { Injectable, EventEmitter } from '@angular/core';
import { Voiture } from '../_models';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class VoituresService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  voitures = [];
  /*
    voitures = [new Voiture('Nissan', 'Quashqai', '21000', 'diesel', 'manuelle', 2010, 'image1.jpg', 1, 127000),
    new Voiture('bmw', 'x3', '45000', 'diesel', 'automatique', 2015, 'image2.jpg', 2, 92000),
    new Voiture('dodge', 'durango', '73000', 'diesel', 'manuelle', 2012, 'image3.jpg', 1, 54000),
    new Voiture('peugeot', '3008', '51000', 'hybride', 'automatique', 2017, 'image4.jpg', 1, 122000),
    new Voiture('audi', 'Q7', '99000', 'essence', 'automatique', 2016, 'image5', 2, 110000),
    new Voiture('Bmw', 'X5', '68000', 'diesel', 'manuelle', 2013, 'image6', 3, 1200),
    new Voiture('toyota', 'SUV ', '88000', 'hybride', 'automatique', 2018, 'image7', 4, 35000),
    new Voiture('renault', 'kadjar ', '67000', 'diesel', 'automatique', 2015, 'image8', 2, 65000),
    new Voiture('audi', 'Q5', '79000', 'hybride', 'automatique', 2013, 'image9', 5, 92000),
    new Voiture('audi', 'Q3', '73000', 'essence', 'manuelle', 2011, 'image10', 3, 41000),
    new Voiture('Bmw', 'X3', '68000', 'diesel', 'manuelle', 2013, 'image11', 4, 41000),
    new Voiture('peugeot', '3008', '51000', 'hybride', 'automatique', 2017, 'image12.jpg', 5, 45000)];
  */
  getVoitures() {
    return this.voitures;
  }
  getVoitureById(id: number): Voiture {
    return this.voitures.filter(a => a.id === id)[0];
  }

  getAll() {
    return this.http.get(this.url + 'voitures');
  }

  getOne(id: number) {
    return this.http.get(this.url + 'voitures' + '/' + id);
  }
  add(voiture: Voiture) {
    const cpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
   // const options = new RequestOptions({ headers: cpHeaders });
    // iciF
 return this.http.post(this.url + 'voitures/addVoiture', voiture);
  }

}
