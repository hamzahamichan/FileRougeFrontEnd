import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "./Modeles/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private apiUrl = 'http://localhost:9090/api/v1/cn/contacte'; // Your backend endpoint

  constructor(private http: HttpClient) { }

  sendContactInfo(contact: { Email: any; phone: any; message: any }): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact);
  }
}
