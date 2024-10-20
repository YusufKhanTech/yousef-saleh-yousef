import { Component } from '@angular/core';
import { HeadingContentComponent } from "../heading-content/heading-content.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeadingContentComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
