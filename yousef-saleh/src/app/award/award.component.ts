import {Component} from '@angular/core';
import {BannerContentComponent} from "../banner-content/banner-content.component";
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-award',
  standalone: true,
  imports: [
    BannerContentComponent,
    NgIf,
  ],
  templateUrl: './award.component.html',
  styleUrl: './award.component.css'
})
export class AwardComponent {
  breadcrumbTexts = ['Home', 'Awards'];
  isPopupOpen = false;
  popupImageSrc: string | undefined;

  awardImages = [
    { awardId: 'cl01', awardName: 'saudi-electricity', logo: '/assets/img/clients/saudi-electricity-logo.png' },
    { awardId: 'cl02', awardName: 'national-grid', logo: '/assets/img/clients/national-grid-logo.png' },
    { awardId: 'cl03', awardName: 'rcjy-logo', logo: '/assets/img/clients/rcjy-logo.png' },
    { awardId: 'cl04', awardName: 'bank-al-bilad', logo: '/assets/img/clients/bank-al-bilad-logo.png' },
    { awardId: 'cl05', awardName: 'anb-bank', logo: '/assets/img/clients/anb-bank-logo.png' },
    { awardId: 'cl06', awardName: 'al-rajhi-bank', logo: '/assets/img/clients/al-rajhi-bank-logo.png' },
    { awardId: 'cl07', awardName: 'al-awwal-bank-logo', logo: '/assets/img/clients/al-awwal-bank-logo.png' },
    { awardId: 'cl08', awardName: 'ascott-logo', logo: '/assets/img/clients/ascott-logo.png' },
    { awardId: 'cl09', awardName: 'ncr-logo', logo: '/assets/img/clients/NCR.png' },
    { awardId: 'cl010', awardName: 'riyad-logo', logo: '/assets/img/clients/riyad-logo.png' },
    { awardId: 'cl011', awardName: 'sab-bank-logo', logo: '/assets/img/clients/sab-bank-logo.png' },
    { awardId: 'cl012', awardName: 'altoukhi-logo', logo: '/assets/img/clients/altoukhi-logo.jpg' },
  ];

  openPopup(src: string | undefined): void {
    console.log("src: ",src)
    this.popupImageSrc = src;
    this.isPopupOpen = true;
  }

  // Method to close the popup
  closePopup(): void {
    this.isPopupOpen = false;
    this.popupImageSrc = undefined;
  }
}
