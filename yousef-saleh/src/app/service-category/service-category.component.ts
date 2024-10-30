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

  constructionServices: ServiceModel[] = ServicesUtil.getConstructionServices();
  selectedService: ServiceModel = this.constructionServices[0];

  constructor() { }

  ngOnInit(): void {
    if (!this.selectedService && this.constructionServices.length > 0) {
      this.selectedService = this.constructionServices[0];
    }
  }

  selectService(event: Event, service: ServiceModel): void {
    event.preventDefault();
    this.selectedService = service;
  }
}
