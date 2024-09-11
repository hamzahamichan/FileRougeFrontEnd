import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Reservation} from "./Modeles/Reservation";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:9090/api/reservation/faire'; // URL de votre API

  constructor(private http: HttpClient) { }

  createReservation(reservation:Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }
}
