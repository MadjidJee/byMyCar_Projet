Create database buyMyCar ;
use buyMyCar;

create table voitures (
id int NOT NULL AUTO_INCREMENT,
marque varchar(255),
modele varchar(255),
prix varchar(255), 
carburant varchar(255),
boiteAvitesse varchar(255),
annee int, 
photo varchar(255),
codeRegion int, 
PRIMARY KEY(id)
);

alter table voitures add kilometrage int ; 
alter table voitures modify id int NOT NULL AUTO_INCREMENT ; 

insert into voitures (id,marque,modele,prix,carburant,boiteAvitesse,annee,photo,codeRegion,kilometrage) 
values ( 1, 'Nissan', 'Quashqai', '21000', 'diesel', 'manuelle', 2010, 'image1.jpg', 1, 127000);

insert into voitures (id,marque,modele,prix,carburant,boiteAvitesse,annee,photo,codeRegion,kilometrage) 
values ( 2, 'bmw', 'x3', '45000', 'diesel', 'automatique', 2015, 'image2.jpg', 2, 92000);
show columns from  voitures from buymycar; 
select*from voiture; 

insert into voiture (id,marque,modele,prix,carburant,boiteAvitesse,annee,photo,codeRegion,kilometrage) 
values(3, 'peugeot', '3008', '51000', 'hybride', 'automatique', 2017, 'image4.jpg', 1, 122000),
				 (4, 'audi', 'Q7', '99000', 'essence', 'automatique', 2016, 'image5', 2, 110000),
				 (5, 'Bmw', 'X5', '68000', 'diesel', 'manuelle', 2013, 'image6', 3, 1200),
				 (6, 'toyota', 'SUV ', '88000', 'hybride', 'automatique', 2018, 'image7', 4, 35000),
				 (7, 'renault', 'kadjar ', '67000', 'diesel', 'automatique', 2015, 'image8', 2, 65000),
				 (8, 'audi', 'Q5', '79000', 'hybride', 'automatique', 2013, 'image9', 5, 92000),
				 (9, 'audi', 'Q3', '73000', 'essence', 'manuelle', 2011, 'image10', 3, 41000),
				 (10, 'Bmw', 'X3', '68000', 'diesel', 'manuelle', 2013, 'image11', 4, 41000),
				 (11, 'peugeot', '3008', '51000', 'hybride', 'automatique', 2017, 'image12.jpg', 5, 45000);
                 
select*from voiture; 
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image1.jpg' where id=1;

update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image2.jpg' where id=2;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image3.jpg' where id=3;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image4.jpg' where id=4;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image5.jpg' where id=5;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image6.jpg' where id=6;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image7.jpg' where id=7;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image8.jpg' where id=8;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image9.jpg' where id=9;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image10.jpg' where id=10;
update voitures set photo='C:\Users\ma19d\Desktop\Jee\semaine 9\projet\projet\src\assets\images\image11.jpg' where id=11;


select*from voiture; 

RENAME TABLE voitures TO voiture;
alter table voiture rename column  "boiteAvitesse" to "boiteavitesse";  



