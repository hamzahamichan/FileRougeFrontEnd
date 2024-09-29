import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  register() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('inscrit', res);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err, 'echec de registerement');
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  get nom() {
    return this.registerForm.get('nom');
  }

  get prenom() {
    return this.registerForm.get('prenom');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get motDePasse() {
    return this.registerForm.get('motDePasse');
  }

  get telephone() {
    return this.registerForm.get('telephone');
  }

  get adresse() {
    return this.registerForm.get('adresse');
  }

  get gender() {
    return this.registerForm.get('gender');
  }
}
