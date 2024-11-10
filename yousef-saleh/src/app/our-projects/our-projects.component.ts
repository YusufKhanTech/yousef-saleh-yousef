import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [BannerContentComponent,NgClass],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.css'
})
export class OurProjectsComponent {
tabs = ["All","Constrctions","Water Proffing","Maintenance and operations"];
activeTabIndex = 0;

selectedTab(index:number){
  this.activeTabIndex = index;
}
}
