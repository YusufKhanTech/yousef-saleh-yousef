import { Component, Input } from '@angular/core';
import { ServiceModel } from '../services/model/service.model';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [],
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
