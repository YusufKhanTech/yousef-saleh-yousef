import { Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: ':projectId',
    component: ProjectDetailComponent
  }
];
