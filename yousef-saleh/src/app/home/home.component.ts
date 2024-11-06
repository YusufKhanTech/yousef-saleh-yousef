import {Component} from '@angular/core';
import {ProjectComponent} from '../project/project.component';
import {ServicesComponent} from '../services/services.component';
import {BannerContentComponent} from '../banner-content/banner-content.component';
import {ClientComponent} from '../client/client.component';
import { HeadingContentComponent } from "../heading-content/heading-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerContentComponent,
    ServicesComponent,
    ProjectComponent,
    ClientComponent,
    HeadingContentComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
