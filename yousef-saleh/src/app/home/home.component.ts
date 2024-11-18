import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ServicesComponent } from '../services/services.component';
import { ClientComponent } from '../client/client.component';
import { HeadingContentComponent } from '../heading-content/heading-content.component';
import { OurProjectsComponent } from '../our-projects/our-projects.component';
import {Router} from '@angular/router';
import {HomeBannerComponent} from '../home-banner/home-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OurProjectsComponent,
    ServicesComponent,
    ProjectComponent,
    ClientComponent,
    HeadingContentComponent,
    HomeBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  navigateToAboutUs(): void {
    this.router.navigate(['/about']);
  }

  navigateToContactUs(): void {
    this.router.navigate(['/contact']);
  }
}
