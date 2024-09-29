import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Salle} from "../Modeles/Salle";


@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private search="http://localhost:9090/api/salles/search";
  private apiUrl="http://localhost:9090/api/salles/salles";

  constructor(private http:HttpClient) { }

  addSalle(obj: Salle): Observable<any> {
    return this.http.post('http://localhost:9090/api/salles/ajouter', obj).pipe(catchError(this.handleError));
  }

  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getByid(idSalle:number){
    const byID = "http://localhost:9090/api/salles/salle";
    return this.http.get(byID).pipe(catchError(this.handleError));
  }






  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
