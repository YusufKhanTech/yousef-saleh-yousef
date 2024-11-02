import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Home page or project list
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path:'service-category',
    loadChildren: () =>
      import('./services/service.route').then((m) => m.serviceRoutes),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./project/project.route').then((m) => m.projectRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
