import { Component, OnInit } from '@angular/core';
import { Voiture } from '../_models';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {
  marque;
  region;
  modele;
  prix;
  carburant;
  annee;
  kilometrage;

  listeVoitures = [new Voiture('Nissan', 'Quashqai', '21000', 'diesel', 'manuelle', 2010, 'image1.jpg', 1, 127000),
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
  listeVoituresFiltree;
  listeMarquesFiltree;
  listeModelesFiltree;
  listePrixFiltree;
  listeCarburantFiltree;
  listeAnneeFiltree;
  listeBoiteAvitesseFiltree;
  listeKilometrageFiltree;
  listeMarques;
  listeModeles;
  listePrix;
  listeCarburant;
  listeBoiteAvitesse;
  listeAnnee;
  listeKilometrage;

  listeRegions = [{ nom: 'Hauts de France', code: 1 }, { nom: 'Grant-Est', code: 2 }, { nom: 'Bretagne', code: 3 },
  { nom: 'Ile de France', code: 4 }, { nom: 'Normandie', code: 5 }];
  constructor() { }

  ngOnInit() {
    // TODO remplir la listeMarques avec les Marques présentes dans listeVoitures
    // TODO Modeles idem
    // listeMarquesFiltree = listeMarques*
    // idem listeModeles
    // Recuperer la liste de marque dans liste voiture
    this.listeMarques = this.listeVoitures.map(a => a.marque);

     this.listeMarquesFiltree = this.listeMarques;
    // Recuperer la liste de modele dans la liste voiture 
    this.listeModeles = this.listeVoitures.map(a => a.modele);

    // this.listeModelesFiltree = this.listeModeles;
    this.listePrix = this.listeVoitures.map(a => a.prix);
    this.listeCarburant = this.listeVoitures.map(a => a.carburant);
    this.listeBoiteAvitesse = this.listeVoitures.map(a => a.boiteAvitesse);
    this.listeAnnee = this.listeVoitures.map(a => a.annee);
    this.listeKilometrage = this.listeVoitures.map(a => a.kilometrage);

  }
  refresh() {
    console.log(this.region + ' ' + this.marque + ' ' + this.modele +
      ' ' + this.prix + ' ' + this.carburant);
    // TODO convertir la region en code region
    // let codeRegion = 1;
    //this.listeMarques.codeRegion = this.listeRegions.map(a => a.code);
    // Number(this.numero);
    //console.log(this.numero);
    //codeRegion = Number('a');
    //this.codeRegion = this.listeRegions.map(a => a.name);
    //codeRegion = parseInt(listeRegions.code);
    //console.log('a');
    /// codeRegion = Number(this.listeRegions);

    this.listeMarquesFiltree = this.listeVoitures.filter(v => v.codeRegion === this.listeMarques.codeRegion);
    // console.log(this.listeMarques.codeRegion.map());
    // console.log(this.listeVoituresFiltree.marque);
    this.listeMarquesFiltree = this.listeMarques.filter(v => v.codeRegion === this.listeMarques.codeRegion);
    this.listeModelesFiltree = this.listeModeles.filter(v => v.codeRegion === this.listeModeles.codeRegion);
    this.listePrixFiltree = this.listePrix.filter(v => v.codeRegion === this.listePrix.codeRegion);
    this.listeCarburantFiltree = this.listeCarburant.filter(v => v.codeRegion === this.listeCarburant.codeRegion);
    this.listeBoiteAvitesseFiltree = this.listeBoiteAvitesse.filter(v => v.codeRegion === this.listeBoiteAvitesse.codeRegion);
    this.listeAnneeFiltree = this.listeAnnee.filter(v => v.codeRegion === this.listeAnnee.codeRegion);
    this.listeKilometrageFiltree = this.listeKilometrage.filter(v => v.codeRegion === this.listeKilometrage.codeRegion);

  }

}
