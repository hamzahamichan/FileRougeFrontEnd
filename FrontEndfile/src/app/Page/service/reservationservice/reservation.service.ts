import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Reservation} from "../../../Modeles/Reservation";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:9090/api/reservation'; //

  constructor(private http: HttpClient) { }

  // Méthode pour créer une réservation en associant l'ID de la salle
  createReservation(idSalle: number, reservation: Reservation): Observable<any> {
    return this.http.post(`${this.baseUrl}/faire/${idSalle}`, reservation);  // Corrige l'URL et la variable
  }

}
