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
    { clientName: 'al-awwal-bank-logo', logo: '/assets/img/clients/al-awwal-bank-logo.png' },
    { clientName: 'ascott-logo', logo: '/assets/img/clients/ascott-logo.png' },
    { clientName: 'ncr-logo', logo: '/assets/img/clients/ncr-logo.png' },
    { clientName: 'riyad-logo', logo: '/assets/img/clients/riyad-logo.png' },
    { clientName: 'sab-bank-logo', logo: '/assets/img/clients/sab-bank-logo.png' },
    { clientName: 'altoukhi-logo', logo: '/assets/img/clients/altoukhi-logo.jpg' },
  ];
}

