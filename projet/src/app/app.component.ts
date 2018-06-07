import { Component } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app';
 // name = 'madjid';
 
 items: Array<any> = [];
  constructor() {
    this.items = [
      { name : 'assets/images/image1.jpg'},
      { name : 'assets/images/image2jpg'},
      { name : 'assets/images/image3.jpg'},
      { name : 'assets/images/image4.jpg'},
      { name : 'assets/images/image5.jpg'},
      { name : 'assets/images/image6.jpg'},
      { name : 'assets/images/image7jpg'},
    ];
  }
}
