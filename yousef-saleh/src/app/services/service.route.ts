import { Routes } from '@angular/router';
import {ServicesComponent} from './services.component';
import {ServiceDetailComponent} from '../service-detail/service-detail.component';
import {ServiceCategoryComponent} from '../service-category/service-category.component';

export const serviceRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: 'service-category',
    component: ServiceCategoryComponent
  },
  {
    path: ':serviceId',
    component: ServiceDetailComponent
  }
];
