import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SalleService} from "../service/salle.service";
import {Salle} from "../Modeles/Salle";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{


  constructor(private salleService: SalleService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

}
