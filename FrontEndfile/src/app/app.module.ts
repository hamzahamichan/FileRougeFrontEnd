import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SalleComponent } from './salle/salle.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BarreNavigationComponent } from './barre-navigation/barre-navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListSalleComponent } from './list-salle/list-salle.component';
import { LoginComponent } from './Page/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { AboutComponent } from './about/about.component';
import { DeclareSalleComponent } from './declare-salle/declare-salle.component';


@NgModule({
  declarations: [
    AppComponent,
    SalleComponent,
    HomePageComponent,
    BarreNavigationComponent,
    RegisterComponent,
    AdminPageComponent,
    AcceuilComponent,
    ListSalleComponent,
    FooterComponent,
    ListReservationComponent,
    AboutComponent,
    DeclareSalleComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LoginComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
