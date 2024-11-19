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
    { clientId: 'cl01', clientName: 'saudi-electricity', logo: '/assets/img/clients/saudi-electricity-logo.png' },
    { clientId: 'cl02', clientName: 'national-grid', logo: '/assets/img/clients/national-grid-logo.png' },
    { clientId: 'cl03', clientName: 'rcjy-logo', logo: '/assets/img/clients/rcjy-logo.png' },
    { clientId: 'cl04', clientName: 'bank-al-bilad', logo: '/assets/img/clients/bank-al-bilad-logo.png' },
    { clientId: 'cl05', clientName: 'anb-bank', logo: '/assets/img/clients/anb-bank-logo.png' },
    { clientId: 'cl06', clientName: 'al-rajhi-bank', logo: '/assets/img/clients/al-rajhi-bank-logo.png' },
    { clientId: 'cl07', clientName: 'al-awwal-bank-logo', logo: '/assets/img/clients/al-awwal-bank-logo.png' },
    { clientId: 'cl08', clientName: 'ascott-logo', logo: '/assets/img/clients/ascott-logo.png' },
    { clientId: 'cl09', clientName: 'ncr-logo', logo: '/assets/img/clients/ncr-logo.png' },
    { clientId: 'cl010', clientName: 'riyad-logo', logo: '/assets/img/clients/riyad-logo.png' },
    { clientId: 'cl011', clientName: 'sab-bank-logo', logo: '/assets/img/clients/sab-bank-logo.png' },
    { clientId: 'cl012', clientName: 'altoukhi-logo', logo: '/assets/img/clients/altoukhi-logo.jpg' },
  ];
}

