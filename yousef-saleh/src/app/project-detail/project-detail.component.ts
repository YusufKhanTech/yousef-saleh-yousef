import { Component, ElementRef, ViewChild } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { HeaderComponent } from '../header/header.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicesUtil} from '../services/util/service.util';
import {ProjectUtil} from '../project/util/project.util';
import {Project, PROJECT_TYPE_DISPLAY} from '../project/model/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [BannerContentComponent, HeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent {
    @ViewChild('carousel', { static: false }) carousel!: ElementRef;
    projectId?: number;
    project?: Project;
    scrollAmount = 430;
    protected readonly PROJECT_TYPE_DISPLAY = PROJECT_TYPE_DISPLAY;

    constructor(private activatedRoute: ActivatedRoute) {
      this.setProjectId();
    }

    scrollLeft() {
      this.carousel.nativeElement.scrollBy({
        left: -this.scrollAmount,
        behavior: 'smooth'
      });
    }

    scrollRight() {
      this.carousel.nativeElement.scrollBy({
        left: this.scrollAmount,
        behavior: 'smooth'
      });
    }

  private setProjectId(): void {
    this.activatedRoute.params.subscribe(params => {
      this.projectId = +params['projectId'];
      this.project = ProjectUtil.getAllProjects().find(project => project?.id === this.projectId);
    });
  }
}
