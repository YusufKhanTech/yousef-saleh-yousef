import { Component } from '@angular/core';
import { BannerContentComponent } from '../banner-content/banner-content.component';
import { HeadingContentComponent } from '../heading-content/heading-content.component';
import {EmployeeUtil} from './util/employee.util';
import {NgTemplateOutlet} from '@angular/common';
import {EmployeeAlignment} from './model/employee.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerContentComponent, HeadingContentComponent, NgTemplateOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})

export class AboutComponent {

  breadcrumbTexts= ['Home', 'About Us'];
  employeeContents = EmployeeUtil.getAllEmployees();
  teamContent = EmployeeUtil.getAllTeamMembers();
  protected readonly EmployeeAlignment = EmployeeAlignment;
}
