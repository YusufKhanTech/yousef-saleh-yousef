import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BannerContentComponent } from '../banner-content/banner-content.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [BannerContentComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {

}
