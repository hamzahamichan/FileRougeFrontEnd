import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SalleService} from "../service/salle.service";
import {Observable, Subscription} from "rxjs";
import {Salle} from "../Modeles/Salle";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {
  salles: Salle[] = [];
  salleForm !: FormGroup;

  constructor(private fb: FormBuilder,private salleser:SalleService) {}

  ngOnInit(): void {
    this.loadSalles();
    this.salleForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]],
      emplacement: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.salleForm.valid) {
      const nouvelleSalle: Salle = this.salleForm.value;
      console.log('Nouvelle Salle:', nouvelleSalle);
      this.salleser.addSalle(nouvelleSalle).subscribe(
        (response) => {
          console.log('Salle ajoutée avec succès:', response);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la salle:', error);
        }
      );
    }
  }
  loadSalles(): void {
    this.salleser.getSalles().subscribe((data: Salle[]) => {
      this.salles = data;
    });
  }

}
