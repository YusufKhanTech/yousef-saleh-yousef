import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { HeaderComponent } from './header/header.component';
import { ConstructionsComponent } from "./constructions/constructions.component";
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormComponent, ConstructionsComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yousef-saleh';
}
