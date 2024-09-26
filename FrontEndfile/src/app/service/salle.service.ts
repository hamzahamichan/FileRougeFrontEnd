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
  private get="http://localhost:9090/api/salles/salle";

  constructor(private http:HttpClient) { }

  addSalle(obj: Salle): Observable<any> {
    return this.http.post('http://localhost:9090/api/salles/ajouter', obj).pipe(catchError(this.handleError));
  }

  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getByid(idSalle: number): Observable<Salle> {
    const url = `${this.get}/${idSalle}`;  // Assurez-vous que l'API utilise cette structure
    return this.http.get<Salle>(url).pipe(
      catchError(this.handleError)
    );
  }




  searchSalles(nom: any, description: any, capacite: any, emplacement: any) {
    let params = new HttpParams();
    if (nom) params = params.append('nom', nom);
    if (description) params = params.append('description', description);
    if (capacite) params = params.append('capacite', capacite.toString());
    if (emplacement) params = params.append('emplacement', emplacement);

    return this.http.get<Salle[]>(`${this.search}/search`, { params });
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
