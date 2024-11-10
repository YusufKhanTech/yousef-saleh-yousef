import { Routes } from '@angular/router';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import {OurProjectsComponent} from '../our-projects/our-projects.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: OurProjectsComponent
  },
  {
    path: ':projectId',
    component: ProjectDetailComponent
  }
];
