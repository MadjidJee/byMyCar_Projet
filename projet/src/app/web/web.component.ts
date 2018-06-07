import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  liste = ' ';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/voitures').subscribe(r => this.showReturne(r));

  }
  showReturne(r) {
    this.liste = JSON.stringify(r);
    console.log(r);
  }

}
