import {Component, OnInit} from '@angular/core';
import {BannerContentComponent} from '../banner-content/banner-content.component';
import {ActivatedRoute} from '@angular/router';
import {ServiceIncludes, ServiceKeyPoints, ServiceModel} from '../services/model/service.model';
import {ServicesUtil} from '../services/util/service.util';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    BannerContentComponent
  ],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {

  serviceId?: number;
  service?: ServiceModel;
  selectedService?: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getServiceId();
  }

  selectService(event: Event, service: string): void {
    event.preventDefault();
    this.selectedService = service;
  }

  private getServiceId(): void {
    this.activatedRoute.params.subscribe(params => {
      this.serviceId = +params['serviceId'];
      this.service = ServicesUtil.getServices().find(s => s.serviceId === this.serviceId);
    });
  }
}
