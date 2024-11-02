import {Component, OnInit} from '@angular/core';
import {BannerContentComponent} from '../banner-content/banner-content.component';
import {ServiceModel} from '../services/model/service.model';
import {ServicesUtil} from '../services/util/service.util';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {ServiceDetailComponent} from '../service-detail/service-detail.component';

@Component({
  selector: 'app-service-category',
  standalone: true,
  imports: [
    BannerContentComponent,
    ServiceDetailComponent
  ],
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css'
})
export class ServiceCategoryComponent implements OnInit {

  selectedService?: ServiceModel;
  serviceCategoryId?: number;
  allServices?: ServiceModel[] | undefined = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.setCategoryId();
  }

  ngOnInit(): void {
    if (!this.selectedService && this.allServices) {
      this.selectedService = this.allServices[0];
    }
  }

  selectService(event: Event, service: ServiceModel): void {
    event.preventDefault();
    this.selectedService = service;
  }

  private setCategoryId(): void {
    this.activatedRoute.params.subscribe(params => {
      this.serviceCategoryId = +params['serviceCategoryId']; // Convert serviceId to a number
      this.allServices = ServicesUtil.getAllServices().find(s=> s?.serviceCategoryId === this.serviceCategoryId)?.serviceSubCategories;
    });
  }
}
