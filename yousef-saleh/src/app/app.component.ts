import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {
  faArrowUpFromGroundWater,
  faCoffee,
  faHelmetSafety,
  faLink,
  faMountainCity,
  faTrowelBricks
} from '@fortawesome/free-solid-svg-icons';
import {faCompassDrafting} from '@fortawesome/free-solid-svg-icons/faCompassDrafting';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'yousef-saleh';

  constructor(library: FaIconLibrary) {
    // services icons
    library.addIcons(faCoffee);
    library.addIcons(faMountainCity);
    library.addIcons(faArrowUpFromGroundWater);
    library.addIcons(faCompassDrafting);
    library.addIcons(faTrowelBricks);
    library.addIcons(faHelmetSafety);
    library.addIcons(faLink);
    library.addIcons(faCircleCheck);
  }
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
}
