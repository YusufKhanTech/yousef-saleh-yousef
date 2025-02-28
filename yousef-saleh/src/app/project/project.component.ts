import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeadingContentComponent } from '../heading-content/heading-content.component';
import {ProjectUtil} from './util/project.util';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeadingContentComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects = ProjectUtil.getAllProjects();
  constructor(private router: Router) {
  }

  navigateToProjectDetail(projectId?: number) {
    projectId
      ? this.router.navigate(['project/', projectId])
      : Error('undefined id');
  }
}
