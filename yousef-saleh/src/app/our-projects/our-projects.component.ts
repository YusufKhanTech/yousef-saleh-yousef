import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { NgClass } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import {ProjectUtil} from '../project/util/project.util';
import {Project, Tabs, TABS_DISPLAY} from '../project/model/project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [BannerContentComponent, NgClass, ProjectComponent],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.css',
})
export class OurProjectsComponent {

  tabs = ProjectUtil.getAllTabs();
  projects = ProjectUtil.getAllProjects();
  activeTabIndex = 0;
  breadcrumbTexts= ['Home', 'Our Projects'];

  constructor(private router: Router) {
  }

  selectedTab(index: number, tab: Tabs) {
    this.activeTabIndex = index;
    if (tab?.name === TABS_DISPLAY.ALL) {
      this.projects = ProjectUtil.getAllProjects();
    } else {
      this.projects = ProjectUtil.getAllProjects().filter(project =>  (project.projectType?.replaceAll('_', ' ').toLowerCase()) === (tab.name)?.toLowerCase());
    }
  }

  navigateToProjectDetails(project: Project) {
      this.router.navigate(['/project', project?.id]);
  }
}
