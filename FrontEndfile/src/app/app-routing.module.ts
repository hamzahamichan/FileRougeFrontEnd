import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarreNavigationComponent} from "./Page/barre-navigation/barre-navigation.component";
import {SalleComponent} from "./Page/salle/salle.component";
import {RegisterComponent} from "./Page/register/register.component";
import {HomePageComponent} from "./Page/home-page/home-page.component";
import {AdminPageComponent} from "./Page/admin-page/admin-page.component";
import {AcceuilComponent} from "./Page/acceuil/acceuil.component";
import {ListSalleComponent} from "./Page/list-salle/list-salle.component";
import {LoginComponent} from "./Page/login/login.component";
import {FooterComponent} from "./Page/footer/footer.component";
import {DeclareSalleComponent} from "./Page/declare-salle/declare-salle.component";
import {AboutComponent} from "./Page/about/about.component";
import {ReservationComponent} from "./Page/reservation/reservation.component";

const routes: Routes = [
  {path:"",redirectTo:'acceuil',pathMatch:'full'},
  { path: 'navbar', component: BarreNavigationComponent },
  { path: 'salle-details/:id', component: SalleComponent },
  {path:'reservation/:id',component:ReservationComponent},
  { path: 'register', component: RegisterComponent },
  {path:'découvre',component:FooterComponent},
  { path: 'footer', component: HomePageComponent },
  { path: "login", component: LoginComponent },
  { path: "list", component: ListSalleComponent },
  { path: "statistiques", component: AdminPageComponent },
  {path:"declarervotresalle",component:DeclareSalleComponent},
  {path:"about",component:AboutComponent},
  { path: "acceuil", component: AcceuilComponent} // Ajout de la route d'accueil
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
