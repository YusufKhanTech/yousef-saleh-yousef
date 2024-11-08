import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HeadingContentComponent} from "../heading-content/heading-content.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
    imports: [
        HeadingContentComponent,NgFor
    ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent{
  clientImages = [
    { clientName: 'saudi-electricity', logo: '/assets/img/clients/saudi-electricity-logo.png' },
    { clientName: 'national-grid', logo: '/assets/img/clients/national-grid-logo.png' },
    { clientName: 'rcjy-logo', logo: '/assets/img/clients/rcjy-logo.png' },
    { clientName: 'bank-al-bilad', logo: '/assets/img/clients/bank-al-bilad-logo.png' },
    { clientName: 'anb-bank', logo: '/assets/img/clients/anb-bank-logo.png' },
    { clientName: 'al-rajhi-bank', logo: '/assets/img/clients/al-rajhi-bank-logo.png' },
  ];
}

