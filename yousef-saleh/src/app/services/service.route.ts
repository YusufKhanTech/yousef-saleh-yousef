import { Routes } from '@angular/router';
import {ServicesComponent} from './services.component';
import {ServiceCategoryComponent} from '../service-category/service-category.component';

export const serviceRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: ':serviceCategoryId/services',
    component: ServiceCategoryComponent
  }
];
