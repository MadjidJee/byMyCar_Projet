export class Voiture {
    static count = 0;
    public id = 0;
    public marque: string;
    public modele: string;
    public prix: string;
    public carburant: string;
    public boiteAvitesse: string;
    public annee: number;
    public photo: string;
    public codeRegion: number;
    public kilometrage: number;

    constructor( marque = '', modele = '', prix = '', carbururant = '',
        boiteAvitesse = '', annee = 0, photo = '', codeRegion = 0, kilometrage = 0) {
        this.id = Voiture.count++;
        this.marque = marque;
        this.modele = modele;
        this.prix = prix;
        this.carburant = carbururant;
        this.boiteAvitesse = boiteAvitesse;
        this.annee = annee;
        this.photo = photo;
        this.codeRegion = codeRegion;
        this.kilometrage = kilometrage;

    }
}
