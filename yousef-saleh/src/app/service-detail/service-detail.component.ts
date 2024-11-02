import {Component, Input, OnInit} from '@angular/core';
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
export class ServiceDetailComponent {

  @Input() service?: ServiceModel;
  selectedService?: string;

  constructor() {
  }

  selectService(event: Event, service?: string): void {
    event.preventDefault();
    this.selectedService = service;
  }
}
