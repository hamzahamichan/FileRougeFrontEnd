import {
  CanActivate,
  Router,
} from '@angular/router';
import {AuthService} from "./auth.service";


export class authguardGuard implements CanActivate{

  constructor(private  service:AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if(this.service.isLoggedIn()){
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}

