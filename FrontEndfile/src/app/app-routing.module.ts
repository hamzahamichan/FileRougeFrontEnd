import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarreNavigationComponent} from "./barre-navigation/barre-navigation.component";
import {SalleComponent} from "./salle/salle.component";
import {RegisterComponent} from "./register/register.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ListSalleComponent} from "./list-salle/list-salle.component";
import {LoginComponent} from "./Page/login/login.component";
import {FooterComponent} from "./footer/footer.component";
import {DeclareSalleComponent} from "./declare-salle/declare-salle.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path:"",redirectTo:"acceuil",pathMatch:'full'},
  { path: "navbar", component: BarreNavigationComponent },
  { path: "salle", component: SalleComponent },
  { path: "register", component: RegisterComponent },
  {path:"découvre",component:FooterComponent},
  { path: "footer", component: HomePageComponent },
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
