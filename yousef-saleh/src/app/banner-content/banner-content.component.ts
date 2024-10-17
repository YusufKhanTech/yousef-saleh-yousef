import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner-content',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './banner-content.component.html',
  styleUrl: './banner-content.component.css'
})
export class BannerContentComponent {
@Input() title!:string;
@Input() subTitle!:string;
@Input() buttonText!:string;
@Input() bannerHeight:string = '100vh';
@Output() buttonClick = new EventEmitter<any>();

onButtonClick(){
  this.buttonClick.emit();
}
}
