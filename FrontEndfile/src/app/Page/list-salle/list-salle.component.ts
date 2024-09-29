import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SalleService} from "../service/salle.service";
import {Salle} from "../Modeles/Salle";

@Component({
  selector: 'app-list-salle',
  templateUrl: './list-salle.component.html',
  styleUrls: ['./list-salle.component.css']
})
export class ListSalleComponent {

  salleForm: FormGroup;

  constructor(private formBuilder:FormBuilder , private salleSrevice:SalleService) {

    this.salleForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      capacite: [0, [Validators.required, Validators.min(1)]],
      emplacement: ['', Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if(this.salleForm.valid){
      const  nouvelle : Salle = this.salleForm.value;

      this.salleSrevice.addSalle(nouvelle).subscribe(responce =>{
        console.log("salle ajoute :", responce);
        this.salleForm.reset();
      },
      error => {
        console.error('errrorooooroorororooroor',error);
      }

        );
    }
  }
}
