import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Home page or project list
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.route').then(m => m.projectRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
