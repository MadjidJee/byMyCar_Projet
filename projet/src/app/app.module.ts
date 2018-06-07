import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VoituresComponent } from './voitures/voitures.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoituresService } from './_services/voitures.service';
import { RouterModule, Routes } from '@angular/router';
import { Voiture } from './_models';
import { PicturesComponent } from './pictures/pictures.component';
import { VoitureComponent } from './voiture/voiture.component';
import { DropComponent } from './drop/drop.component';
import { SearchComponent } from './search/search.component';
import { SliderCarComponent } from './slider-car/slider-car.component';
import { HttpClientModule } from '@angular/common/http';
import { WebComponent } from './web/web.component';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';

const appRoutes: Routes = [
  { path: '', component: VoituresComponent }, { path: 'hello', component: HelloComponent },
  { path: 'pictures', component: PicturesComponent }, { path: 'voiture/:id', component: VoitureComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    VoituresComponent,
    VoitureDetailComponent,
    PicturesComponent,
    VoitureComponent,
    DropComponent,
    SearchComponent,
    SliderCarComponent,
    WebComponent,

  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule, HttpClientModule, Ng2CarouselamosModule
  ],
  providers: [VoituresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
