import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BannerContentComponent, FaIconComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {}
