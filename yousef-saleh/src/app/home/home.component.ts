import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ServicesComponent } from '../services/services.component';
import { ClientComponent } from '../client/client.component';
import {Router} from '@angular/router';
import {HomeBannerComponent} from '../home-banner/home-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServicesComponent,
    ProjectComponent,
    ClientComponent,
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
