import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { HeadingContentComponent } from '../heading-content/heading-content.component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerContentComponent, HeadingContentComponent, FaIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  cardContent = [
    {
      title: '232',
      subTitle: 'Happy Clients',
    },
    {
      title: '521',
      subTitle: 'Projects',
    },
    {
      title: '1463',
      subTitle: 'Hours of Support',
    },
    {
      title: '15',
      subTitle: 'Hard Workers',
    },
  ];
}
