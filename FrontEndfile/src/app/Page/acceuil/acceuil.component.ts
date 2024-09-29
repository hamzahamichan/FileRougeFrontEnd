import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Salle } from "../Modeles/Salle";
import { SalleService } from "../service/salle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  searchForm: FormGroup;
  salles: Salle[] = [];
  filteredSalles: any[] = []; // Liste des salles filtrées
  searchLocation: string = ''; // Rechercher par emplacement
  searchCapacity: number | null = null;


  constructor(private fb: FormBuilder, private salleser: SalleService , private router:Router) {
    this.searchForm = this.fb.group({
      nom: [''],
      description: [''],
      capacite: [''],
      emplacement: ['']
    });
  }

  ngOnInit(): void {
    this.salleser.getSalles().subscribe((data: any[]) => {
      this.salles = data;
      this.filteredSalles = data; // Initialement, toutes les salles sont affichées
    });

   
  }

  onSearch() {

  }

  filterSalles() {
    this.filteredSalles = this.salles.filter(salle => {
      const matchesLocation = salle.emplacement.toLowerCase().includes(this.searchLocation.toLowerCase());
      const matchesCapacity = this.searchCapacity ? salle.capacite >= this.searchCapacity : true;
      return matchesLocation && matchesCapacity;
    });
  }

  listSalles() {
    this.salleser.getSalles().subscribe(
      (resp: Salle[]) => {
        console.log("Liste des salles :", resp);
        this.salles = resp;  // Assurez-vous d'avoir une variable 'salles' dans votre composant pour stocker la réponse
      },
      (error) => {
        console.error("Erreur lors de la récupération des salles :", error);
      }
    );
  }

  voirdetails() {

  }

}
