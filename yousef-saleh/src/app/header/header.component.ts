import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerContentComponent } from "../banner-content/banner-content.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, BannerContentComponent,NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Fixed the styleUrls property
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;
  activeItem: string = 'Home'; // Set default active item
  navItems = [
    { name: 'Home', link: '' },
    { name: 'About', link: 'about' },
    { name: 'Services', link: 'services' },
    { name: 'Contact', link: 'contact' }
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
  }

  setActiveItem(item: string) {
    this.activeItem = item;
  }
}
