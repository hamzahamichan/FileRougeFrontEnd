import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
} from '@angular/router';
import {AuthService} from "./auth.service";

export class roleguardGuard implements CanActivate{
  constructor(private service: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles = route.data['roles'] as Array<string>; // Utilisez 'route' ici

    if (this.service.isLoggedIn()) {
      const userRole = this.service.getRole();

      if (requiredRoles.includes(<string><any>userRole || '')) {
        return true;
      } else {
        // Redirection si l'utilisateur n'a pas les rôles requis
        this.router.navigate(['http://localhost:8080']);
        return false;
      }
    } else {
      // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
      this.router.navigate(['/login']);
      return false;
    }
  }
}
