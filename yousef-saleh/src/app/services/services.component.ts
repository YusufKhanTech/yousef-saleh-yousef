import { Component } from '@angular/core';
import { HeadingContentComponent } from "../heading-content/heading-content.component";
import {ActivatedRoute, Router} from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {ServicesUtil} from './util/service.util';
import {ServiceCard, ServiceModel} from './model/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeadingContentComponent, BannerContentComponent, FaIconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {

  isServicesBanner: boolean = false;
  services: ServiceModel[] = ServicesUtil.getServiceSubCategory();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.isServicesBanner = this.router.url.includes('services');
  }

  navigateToServiceDetails(service: ServiceModel): void {
    this.router.navigate(['/services/' + service?.serviceId], {relativeTo: this.activatedRoute});
  }
}
