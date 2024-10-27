import { Routes } from '@angular/router';
import {ServicesComponent} from './services.component';
import {ServiceDetailComponent} from '../service-detail/service-detail.component';

export const serviceRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: ':serviceId',
    component: ServiceDetailComponent
  }
];
