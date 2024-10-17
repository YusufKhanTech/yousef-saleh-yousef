import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BannerContentComponent],
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
