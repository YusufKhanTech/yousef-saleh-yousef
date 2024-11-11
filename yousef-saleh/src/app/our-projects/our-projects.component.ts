import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { NgClass } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import {ProjectUtil} from '../project/util/project.util';
import {Project} from '../project/model/project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [BannerContentComponent, NgClass, ProjectComponent],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.css',
})
export class OurProjectsComponent {
  tabs = [
    'All',
    'Constructions',
    'Maintenance and operations',
    'Water Proofing'
  ];
  projects = ProjectUtil.getAllProjects();
  activeTabIndex = 0;

  constructor(private router: Router) {
  }

  selectedTab(index: number) {
    this.activeTabIndex = index;
  }

  navigateToProjectDetails(project: Project) {
      this.router.navigate(['/project', project?.id]);
  }
}
