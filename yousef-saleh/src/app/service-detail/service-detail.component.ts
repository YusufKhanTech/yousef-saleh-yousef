import { Component } from '@angular/core';
import {BannerContentComponent} from '../banner-content/banner-content.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    BannerContentComponent
  ],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent {

}
