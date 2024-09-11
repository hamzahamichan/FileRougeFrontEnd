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

const routes: Routes = [
  {path:"navbar",component:BarreNavigationComponent},
  {path:"salle",component:SalleComponent},
  {path:"register",component:RegisterComponent},
  {path:"footer",component:HomePageComponent},
  {path:"acceuil",component:AcceuilComponent},
  {path:"login",component:LoginComponent},
  {path:"listsalles",component:ListSalleComponent},
  {path:"sataistiques",component:AdminPageComponent,children:[
      {path:"dashboard/navbar",component:BarreNavigationComponent},

    ]

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
