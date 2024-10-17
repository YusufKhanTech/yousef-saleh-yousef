import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
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
