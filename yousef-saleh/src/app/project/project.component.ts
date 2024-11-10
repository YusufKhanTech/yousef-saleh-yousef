import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BannerContentComponent } from "../banner-content/banner-content.component";
import { HeadingContentComponent } from "../heading-content/heading-content.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor, BannerContentComponent, HeadingContentComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  isProject:boolean = false;
  projectImages = [
      { id: 1, imageUrl: 'https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/remodeling-1.jpg' },
      { id: 2, imageUrl: 'https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/construction-1.jpg' },
      { id: 3, imageUrl: 'https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/repairs-1.jpg' },
      { id: 4, imageUrl: 'https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/design-1.jpg' },
      { id: 5, imageUrl: 'https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/remodeling-2.jpg' },
      { id: 6, imageUrl: 'https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/construction-2.jpg' },
    ];
  constructor(private router: Router) {
    this.isProject = this.router.url.includes('project');
  }
  navigateToProjectDetail(projectId: number) {
    projectId ? this.router.navigate(['project/', projectId]) : Error('undefined id');
  }
}
