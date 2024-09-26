import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactServiceService } from "../contact-service.service";
import { Contact } from "../Modeles/Contact";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactServiceService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],  // Correction ici
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.contactForm.valid){
      const contact : Contact = this.contactForm.value;

      this.contactService.sendContactInfo(contact).subscribe(response =>{
        console.log("forms envoyéee:",response);
        this.contactForm.reset();
      },
        error => {
        console.error('not sed :',error);
        }

        )
    }

  }
}
