import { Component, ElementRef, ViewChild } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [BannerContentComponent, HeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  images = [
    'https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details-1.jpg',
  ];

  scrollAmount = 430;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });
  }
}
