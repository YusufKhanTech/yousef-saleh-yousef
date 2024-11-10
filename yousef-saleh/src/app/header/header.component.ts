import { JsonPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import {ServicesUtil} from '../services/util/service.util';
import {ServiceCategory} from '../services/model/service.model';

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
  activeItem: string = 'Home';
  navItems = [
    { name: 'Home', link: '' },
    { name: 'About', link: 'about' },
    { name: 'Services', icon:'ti ti-arrow-down', link: 'services' },
    { name: 'Contact', link: 'contact' },
  ];
  allServiceCategories = ServicesUtil.getAllServices();
  hoveredService: ServiceCategory | null = null;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  onHover(service: ServiceCategory) {
    this.hoveredService = service;
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
    this.isMenuOpen = false;
  }

  navigateToContactUs(): void {
    this.router.navigate(['/contact']);
  }

  navigateToLinkedin(): void {
    window.open('https://www.linkedin.com/company/yousef-saleh-yousef-contracting-and-establishment/', '_blank')
  }
}
