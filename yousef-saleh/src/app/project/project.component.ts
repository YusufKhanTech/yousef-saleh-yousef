import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  images = [
    "https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/remodeling-1.jpg",
    "https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/construction-1.jpg",
    "https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/repairs-1.jpg",
    "https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/design-1.jpg",
    "https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/remodeling-2.jpg",
    "https://www.bootstrapmade.com/content/demo/UpConstruction/assets/img/projects/construction-2.jpg"
  ];
}
