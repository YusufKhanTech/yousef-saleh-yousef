import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [BannerContentComponent, HeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {

}
