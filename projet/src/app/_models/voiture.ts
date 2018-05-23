export class Voiture {
    static count = 0;
    public id = 0;
    public marque: string;
    public modele: string;
    public prix: string;

    constructor(marque = '', modele = '', prix = '') {
        this.id = Voiture.count++;

        this.marque = marque;
        this.modele = marque;
        this.prix = prix;
    }


}