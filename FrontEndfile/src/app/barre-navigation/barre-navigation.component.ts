import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-barre-navigation',
  templateUrl: './barre-navigation.component.html',
  styleUrls: ['./barre-navigation.component.css']
})
export class BarreNavigationComponent {

  constructor(private auth:AuthService , private router:Router) {
  }

}
