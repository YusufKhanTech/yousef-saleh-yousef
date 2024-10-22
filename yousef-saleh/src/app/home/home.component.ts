import { Component } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {ProjectComponent} from '../project/project.component';
import {ServicesComponent} from '../services/services.component';
import {BannerContentComponent} from '../banner-content/banner-content.component';
import { HeadingContentComponent } from "../heading-content/heading-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
    ServicesComponent,
    BannerContentComponent,
    HeadingContentComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clientImages = [
    {
      clientName: '',
      logo: '/assets/img/clients/ascott-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/bank-al-bilad-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/anb-bank-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/altoukhi-logo.jpg'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/rcjy-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/ncr-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/al-rajhi-bank-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/sab-bank-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/riyad-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/national-grid-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/saudi-electricity-logo.png'
    },
    {
      clientName: '',
      logo: '/assets/img/clients/al-awwal-bank-logo.png'
    },
  ]
}
