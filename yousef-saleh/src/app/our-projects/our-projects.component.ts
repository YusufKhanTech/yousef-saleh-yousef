import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { NgClass } from '@angular/common';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [BannerContentComponent, NgClass, ProjectComponent],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.css',
})
export class OurProjectsComponent {
  tabs = [
    'All',
    'Constructions',
    'Maintenance and operations',
    'Water Proofing'
  ];
  projectsImage = [
    'https://html.rrdevs.net/ribuild/assets/imgs/our-projects/latest-project__item-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/our-projects/latest-project__item-2.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/our-projects/latest-project__item-1.jpg',
    'https://html.rrdevs.net/ribuild/assets/imgs/our-projects/latest-project__item-2.jpg',
  ];
  activeTabIndex = 0;

  selectedTab(index: number) {
    this.activeTabIndex = index;
  }
}
