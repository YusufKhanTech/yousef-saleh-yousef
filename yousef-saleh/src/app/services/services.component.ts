import { Component } from '@angular/core';
import { HeadingContentComponent } from "../heading-content/heading-content.component";
import { Router } from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeadingContentComponent, BannerContentComponent, FaIconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  isServicesBanner: boolean = false;
  serviceCardData = [
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
  ];

  constructor(private router: Router) {
    this.isServicesBanner = this.router.url.includes('services');
  }
}

export class ServiceModel {
  serviceId: number = 0;
  serviceName: string = '';
  serviceDescription: string = '';
  keyPoints: ServiceKeyPoints[] = [];
  images: string[] = [];
}

export class ServiceKeyPoints {
  icon: string = '';
  keyPointName: string = '';
}
