import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BannerContentComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {}
