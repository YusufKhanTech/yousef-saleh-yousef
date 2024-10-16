import { Component } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ConstructionsComponent } from './constructions/constructions.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FormComponent,
    ConstructionsComponent,
    ServicesComponent,
    ProjectComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'yousef-saleh';
  ngOnInit() {
    AOS.init({
      duration: 1000,  // Default animation duration in milliseconds
      once: true,  // Animation occurs only once
    });
  }
}
