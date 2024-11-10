import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BannerContentComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {

  isSubmitted = false;
  constructor() {}

  public sendEmail(event: Event): void {
    event.preventDefault();
    emailjs.sendForm('service_e8ptueg', 'template_80shf1s', event.target as HTMLFormElement, '3L2F3zz1tTFqoj_3K')
      .then((result: EmailJSResponseStatus) => {
        this.isSubmitted = true;
      }, (error) => {
        console.log('FAILED...', error);
      });
  }

}
