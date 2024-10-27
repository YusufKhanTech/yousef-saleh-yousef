import { JsonPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, RouterLink, BannerContentComponent, NgFor,JsonPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Fixed the styleUrls property
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;
  logo = 'assets/img/website-images/ysy-white-logo.png';
  activeItem: string = 'Home'; // Set default active item
  navItems = [
    { name: 'Home', link: '' },
    { name: 'About', link: 'about' },
    { name: 'Services', icon:'ti ti-arrow-down', link: 'services' },
    { name: 'Contact', link: 'contact' },
  ];
  services = [
    { name: 'Web Development', link: 'web-development' },
    { name: 'App Development', link: 'app-development' },
    { name: 'SEO', link: 'seo' },
  ];

  constructor() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
    window.scrollY > 50
      ? (this.logo = 'assets/img/website-images/ysy-logo.png')
      : (this.logo = 'assets/img/website-images/ysy-white-logo.png');
  }

  setActiveItem(item: string) {
    this.activeItem = item;
    this.isMenuOpen = false; // Close the menu after selecting an item
  }
}
