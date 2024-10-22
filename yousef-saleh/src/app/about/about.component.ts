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
  teamContent = [
    // {
    //   name: 'Afifi Farag',
    //   designation: 'Financial Advisor',
    //   image: 'assets/img/employees/afifi.jpeg'
    // },
    // {
    //   name: 'Saqib Naseer',
    //   designation: 'Document Controller',
    //   image: 'assets/img/employees/saqib.jpeg'
    // },
    {
      name: 'Mohammed Samid bashir Ulde',
      designation: 'AutoCAD Draftsman & Supervisor',
      image: 'assets/img/employees/samid.jpeg'
    },
    // {
    //   name: 'Emad Mohamed Murtada',
    //   designation: 'HR',
    //   image: 'assets/img/employees/emad.jpeg'
    // },
    {
      name: 'Mohammad Arif Khan',
      designation: 'Project Engineer',
      image: 'assets/img/employees/arif.jpeg'
    },
    {
      name: 'Serajuddin Khan',
      designation: 'Quantity Surveyor & Site Engineer',
      image: 'assets/img/employees/serajuddin.jpeg'
    },
    {
      name: 'Mohd Kaleem ',
      designation: 'Site Engineer',
      image: 'assets/img/employees/kaleem.jpeg'
    },
    {
      name: 'Ali Tahir',
      designation: 'Site Engineer',
      image: 'assets/img/employees/ali.jpeg'
    },
    {
      name: 'Rethal Arabi',
      designation: 'Site Engineer',
      image: 'assets/img/employees/rethal.jpeg'
    },
    {
      name: 'Mohamed Yoosuf Asan Kani',
      designation: 'Site Engineer',
      image: 'assets/img/employees/yoosuf.jpeg'
    },
    {
      name: 'Vidhadhar Jangio',
      designation: 'Site Engineer',
      image: 'assets/img/employees/vidhadhar.jpeg'
    },
    {
      name: 'Mohammad Mustafa Jamil Ahmad',
      designation: 'Site Engineer',
      image: 'assets/img/employees/mustafa.jpeg'
    },
    {
      name: 'Ayum Kabari Sabila Khatun',
      designation: 'Site Engineer',
      image: 'assets/img/employees/ayyum.jpeg'
    },
    {
      name: 'Muhammad Asif Muhammad Arshad',
      designation: 'Site Engineer',
      image: 'assets/img/employees/asif.jpeg'
    },
    {
      name: 'Mohammad Irfan Alam',
      designation: 'Safety Supervisor',
      image: 'assets/img/employees/irfan.jpeg'
    },
  ];
}
