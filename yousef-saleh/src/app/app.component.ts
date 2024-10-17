import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
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
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
}
