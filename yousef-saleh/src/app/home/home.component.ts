import { Component } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {ProjectComponent} from '../project/project.component';
import {ServicesComponent} from '../services/services.component';
import {BannerContentComponent} from '../banner-content/banner-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
    ServicesComponent,
    BannerContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
