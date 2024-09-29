import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {jwtDecode} from "jwt-decode";
import {Payload} from "./Modeles/payload";
import {AuthenticationRequest} from "./Modeles/authenticationRequest";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9090/api/v1/auth';
  private userId: number | null = null;
  private email: string | null = null;
  private role: string[] | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode pour enregistrer un utilisateur
  register(request: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, request);
  }

  // Méthode pour récupérer les rôles de l'utilisateur
  getRole(): string[] {
    if (!this.role) {
      const token = this.getToken();
      if (token) {
        const decodedToken = this.decodToken(token) as Payload;
        this.role = decodedToken.roles || [];
      }
    }
    return this.role || [];
  }

  // Méthode pour sauvegarder le jeton JWT
  saveToken(token: string) {
    localStorage.setItem('authtoken', token);
    this.setUserfromData(token);
  }

  // Méthode de connexion
  login(request:AuthenticationRequest): Observable<any> {
    return this.http.post<{ token: string; userId: number }>(`${this.apiUrl}/autheticate`, request)
      .pipe(
        tap((response: { token: string; userId: number }) => {
          this.saveToken(response.token);
          this.userId = response.userId;
          localStorage.setItem('userid', this.userId?.toString() || '');
          console.log('User ID:', this.userId);
        })
      );
  }

  // Définir les informations de l'utilisateur à partir du token décodé
  setUserfromData(token: string): void {
    const decodedToken = this.decodToken(token) as Payload;
    console.log('Decoded token:', decodedToken);
    this.email = decodedToken.sub;
    this.role = decodedToken.roles || [];
    this.userId = decodedToken.idUser || null;
  }

  // Méthode pour décoder le JWT
  private decodToken(token: string): Payload {
    return jwtDecode(token); // Vous pouvez maintenant utiliser l'interface CustomJwtPayload
  }

  // Méthode pour récupérer le token du localStorage
  getToken(): string | null {
    return localStorage.getItem('authtoken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

