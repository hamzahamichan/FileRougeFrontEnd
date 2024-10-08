import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authservice.getToken();
    if (token) {
      console.log('token send :', token);
      const clonedRequest = request.clone({
        headers: request.headers.set('Authorization', `Beare ${token}`)
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
