import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SalleService} from "../service/salle.service";
import {Observable, Subscription} from "rxjs";
import {Salle} from "../Modeles/Salle";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{
  salle : Salle | any;
  constructor(private salleser:SalleService,private route: ActivatedRoute,) {}

  ngOnInit(): void {
    const idSalle = +this.route.snapshot.paramMap.get('idSalle')!;
    this.salleser.getByid(idSalle).subscribe(
      (resp: Salle) => {
        this.salle = resp;
      },
      (error) => {
        console.error("Erreur lors de la récupération des détails de la salle :", error);
      }
    );
  }
  getSalleById(idSalle: number) {
    this.salleser.getByid(idSalle).subscribe(
      (resp: Salle) => {
        console.log("Détails de la salle :", resp);
        this.salle = resp;  // Assurez-vous d'avoir une propriété 'salle' dans votre composant pour stocker la réponse
      },
      (error) => {
        console.error("Erreur lors de la récupération de la salle :", error);
      }
    );
  }
}
