import { JsonPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import {ServicesUtil} from '../services/util/service.util';
import {ServiceCategory} from '../services/model/service.model';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, RouterLink, BannerContentComponent, NgFor,JsonPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Fixed the styleUrls property
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  logo = 'assets/img/website-images/ysy-logo.png';
  activeItem: string = 'Home';
  navItems = [
    { name: 'Home', link: '' },
    { name: 'About Us', link: 'about' },
    { name: 'Our Projects', link: 'project' },
    { name: 'Services', icon:'ti ti-arrow-down', link: 'service-category' },
    { name: 'Contact Us', link: 'contact' },
  ];
  allServiceCategories = ServicesUtil.getAllServices();
  hoveredService: ServiceCategory | null = null;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = this.router.url;
        if (url.includes('/service-category')) {
          this.activeItem = 'Services';
        } else if(url.includes('/project')) {
          this.activeItem = 'Our Projects';
        } else {
          this.activeItem = this.navItems.find(
            (item) => `/${item.link}` === url
          )?.name || 'Home';
        }
      });
  }

  onHover(service: ServiceCategory) {
    this.hoveredService = service;
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

  navigateToHome(): void {
    this.setActiveItem('Home');
    this.router.navigate(['/']);
  }

  navigateToService(link: string | undefined, serviceCategory: ServiceCategory): void {
    if (link) {
      this.router.navigate([link + '/' + serviceCategory?.serviceCategoryId + '/services'], { relativeTo: this.activatedRoute });
      this.activeItem = 'Services';
    }
  }
}
