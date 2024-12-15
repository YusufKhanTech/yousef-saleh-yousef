import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
    { name: 'Our Success', link: 'award' },
    { name: 'Contact Us', link: 'contact' },
  ];

  constructor(private router: Router) {}

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
}
