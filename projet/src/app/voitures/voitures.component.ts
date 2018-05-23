import { Component, OnInit } from '@angular/core';
import { Voiture } from '../_models/voiture';



@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
edit=false;
 // voitures = [{ 'marque': 'audi', 'modele': 'a3', 'prix': '21000' },
 // { 'marque': 'bmw', 'modele': 'x3', 'prix': '45000' },
  //{ 'marque': 'dodge', 'modele': 'durango', 'prix': '73000' }];


 // voiture = { 'marque': '', 'modele': '', 'prix': '', 'test': 'Voiture' };


  voitures  = [new Voiture('Nissan', 'Quashqai', '21000'),
  new Voiture('bmw', 'x3', '45000'),
  new Voiture('dodge', 'durango', '73000')];

  voiture = new Voiture();
  constructor() { }

  ngOnInit() {
  }
  addVoiture() {
    this.voitures.push(this.voiture);
    //this.voiture = { 'marque': '', 'modele': '', 'prix': ''};
  }
  editListeVoitures(id:number) {
      console.log(id);
      this.voiture=this.getVoitureById(id);
      console.log(this.getVoitureById(id));
      this.edit=true;
      
  }
  getVoitureById(id:number): Voiture{
   // for(let i=0; i<this.voitures.length;i++){
    //  if (this.voitures[i].id===id){
    //    return this.voitures[i];
    //  }
   // }

    //return null;

   return  this.voitures.filter(a=> a.id===id)[0];
   
  }
  iditOver(){
    this.edit=false;
    this.voiture= new Voiture();
  }
}
