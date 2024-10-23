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
      clientName: 'saudi-electricity',
      logo: '/assets/img/clients/saudi-electricity-logo.png'
    },
    {
      clientName: 'national-grid',
      logo: '/assets/img/clients/national-grid-logo.png'
    },
    {
      clientName: 'rcjy-logo',
      logo: '/assets/img/clients/rcjy-logo.png'
    },
    {
      clientName: 'bank-al-bilad',
      logo: '/assets/img/clients/bank-al-bilad-logo.png'
    },
    {
      clientName: 'anb-bank',
      logo: '/assets/img/clients/anb-bank-logo.png'
    },
    {
      clientName: 'al-rajhi-bank',
      logo: '/assets/img/clients/al-rajhi-bank-logo.png'
    },
    {
      clientName: 'sab-bank',
      logo: '/assets/img/clients/sab-bank-logo.png'
    },
    {
      clientName: 'riyad',
      logo: '/assets/img/clients/riyad-logo.png'
    },
    {
      clientName: 'al-awwal-bank',
      logo: '/assets/img/clients/al-awwal-bank-logo.png'
    },
    {
      clientName: 'ascott',
      logo: '/assets/img/clients/ascott-logo.png'
    },
    {
      clientName: 'altoukhi',
      logo: '/assets/img/clients/altoukhi-logo.jpg'
    },
    {
      clientName: 'ncr',
      logo: '/assets/img/clients/ncr-logo.png'
    }
  ]
}
