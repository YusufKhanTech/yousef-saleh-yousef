import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeadingContentComponent } from '../heading-content/heading-content.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeadingContentComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects = [
    {
      id: 1,
      name: 'Riyad Bank',
      imageUrl: '/assets/img/website-images/riyad-bank-project-1.jpg',
    },
    {
      id: 2,
      name: 'Saudi Electricity Company',
      imageUrl: '/assets/img/website-images/substation-1.jpg',
    },
    {
      id: 3,
      name: 'Al Rajhi Bank',
      imageUrl: '/assets/img/website-images/al-rajhi-project-3.jpg',
    },
    {
      id: 4,
      name: 'Al Bilad Bank',
      imageUrl: '/assets/img/website-images/al-bilad-project-4.jpg',
    },
    {
      id: 5,
      name: 'Saudi Investment Bank',
      imageUrl: '/assets/img/website-images/saudi-investment-bank.jpg',
    },
    {
      id: 5,
      name: 'Saudi Electricity Company',
      imageUrl: '/assets/img/website-images/substation-2.jpg',
    },
  ];
  constructor(private router: Router) {}
  navigateToProjectDetail(projectId: number) {
    projectId
      ? this.router.navigate(['project/', projectId])
      : Error('undefined id');
  }
}
