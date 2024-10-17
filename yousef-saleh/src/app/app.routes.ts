import { Routes } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

export const routes: Routes = [
    {path:'project-detail/:id',component:ProjectDetailComponent}
];
