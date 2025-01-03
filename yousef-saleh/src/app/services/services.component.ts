import { Component, Input } from '@angular/core';
import { HeadingContentComponent } from "../heading-content/heading-content.component";
import {ActivatedRoute, Router} from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import {ServicesUtil} from './util/service.util';
import { ServiceCategory} from './model/service.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeadingContentComponent, BannerContentComponent,NgStyle],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  @Input() margin:string = '70px';
  isServicesBanner: boolean = false;
  breadcrumbTexts = ['Home', 'Services'];
  serviceCategories: ServiceCategory[] = ServicesUtil.getAllServices();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.isServicesBanner = this.router.url.includes('services');
  }

  navigateToServiceDetails(serviceCategory: ServiceCategory): void {
    this.router.navigate(['/service-category/' + serviceCategory?.serviceCategoryId + '/services'], {relativeTo: this.activatedRoute});
  }
}
