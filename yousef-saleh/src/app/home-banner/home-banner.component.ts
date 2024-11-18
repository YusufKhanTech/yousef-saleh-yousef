import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgForOf
  ],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent implements OnInit, OnDestroy {

  backgroundImageUrls = [
    { key: '/assets/img/website-images/home-bg-1.jpeg' },
    { key: '/assets/img/website-images/home-bg-2.jpg' },
    { key: '/assets/img/website-images/home-bg-3.jpg' },
    { key: '/assets/img/website-images/home-bg-4.jpg' },
    { key: '/assets/img/website-images/home-bg-5.jpg' },
    { key: '/assets/img/website-images/home-bg-6.jpg' }
  ];
  activeIndex = 0;
  private intervalId: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startImageCarousel();
  }

  get currentBackgroundImage() {
    return `url(${this.backgroundImageUrls[this.activeIndex].key})`;
  }


  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startImageCarousel(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.backgroundImageUrls.length;
      console.log('Active image index:', this.activeIndex); // Check if this logs correctly
    }, 3000);
  }

  navigateToServices(): void {
    this.router.navigate(['/service-category']);
  }
}
