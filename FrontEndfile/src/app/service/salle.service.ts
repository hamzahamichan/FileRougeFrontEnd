import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Salle} from "../Modeles/Salle";


@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private apiUrl="http://localhost:9090/api/salles/salles";
  constructor(private http:HttpClient) { }

  addSalle(obj: Salle): Observable<any> {
    return this.http.post('http://localhost:9090/api/salles/ajouter', obj);
  }
  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl);
  }
}
