import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-content',
  standalone: true,
  imports: [],
  templateUrl: './heading-content.component.html',
  styleUrl: './heading-content.component.css'
})
export class HeadingContentComponent {
@Input() title!:string;
@Input() subTitle!:string;
}
