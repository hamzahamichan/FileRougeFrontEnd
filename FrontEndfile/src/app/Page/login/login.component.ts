import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AuthService} from "../service/AuthService/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {

  errorMessagr: string | null = null;

  constructor(private auth: AuthService, private router: Router) {
  }

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }
    const request = loginForm.value;
    this.auth.login(request).subscribe({
      next: (res: { token: string; userId: number; }) => {
        this.auth.saveToken(res.token);
        const role = this.auth.getRole();
        console.log('Role is ', role);

        if (role.includes('ADMIN')) {
          this.router.navigate(['']);
        } else if (role.includes('USER')) {
          this.router.navigate(['/reserver']);
        } else {
          this.router.navigate(['']);
        }
      },
      error: (error: any) => {
        console.error('Login failed', error);
        this.errorMessagr = "Login failed. Please check your credentials.";
      }
    });
  }
}


