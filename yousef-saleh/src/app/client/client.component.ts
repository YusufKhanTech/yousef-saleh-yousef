import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HeadingContentComponent} from "../heading-content/heading-content.component";

@Component({
  selector: 'app-client',
  standalone: true,
    imports: [
        HeadingContentComponent
    ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit, OnDestroy {
  @ViewChild('clientsTrack') clientsTrack?: ElementRef;
  currentIndex = 0;
  logoWidth = 150;
  scrollInterval: any;

  clientImages = [
    {
      clientName: 'saudi-electricity',
      logo: '/assets/img/clients/saudi-electricity-logo.png'
    },
    {
      clientName: 'national-grid',
      logo: '/assets/img/clients/national-grid-logo.png'
    },
    {
      clientName: 'rcjy-logo',
      logo: '/assets/img/clients/rcjy-logo.png'
    },
    {
      clientName: 'bank-al-bilad',
      logo: '/assets/img/clients/bank-al-bilad-logo.png'
    },
    {
      clientName: 'anb-bank',
      logo: '/assets/img/clients/anb-bank-logo.png'
    },
    {
      clientName: 'al-rajhi-bank',
      logo: '/assets/img/clients/al-rajhi-bank-logo.png'
    },
    {
      clientName: 'sab-bank',
      logo: '/assets/img/clients/sab-bank-logo.png'
    },
    {
      clientName: 'riyad',
      logo: '/assets/img/clients/riyad-logo.png'
    },
    {
      clientName: 'al-awwal-bank',
      logo: '/assets/img/clients/al-awwal-bank-logo.png'
    },
    {
      clientName: 'ascott',
      logo: '/assets/img/clients/ascott-logo.png'
    },
    {
      clientName: 'altoukhi',
      logo: '/assets/img/clients/altoukhi-logo.jpg'
    },
    {
      clientName: 'ncr',
      logo: '/assets/img/clients/ncr-logo.png'
    }
  ]

  ngOnInit() {
    // Initial delay before starting the scroll effect
    setTimeout(() => {
      this.scrollInterval = setInterval(() => this.scrollClients(), 3000); // Slide every 3 seconds
    }, 3000); // Initial delay of 3 seconds
  }
  scrollClients() {
    if (this.clientsTrack?.nativeElement) {
      this.clientsTrack.nativeElement.style.transition = 'transform 0.5s ease';
      this.clientsTrack.nativeElement.style.transform = `translateX(-${this.logoWidth}px)`;

      setTimeout(() => {
        if (this.clientsTrack?.nativeElement) {
          this.clientsTrack.nativeElement.style.transition = 'none';
          this.clientsTrack.nativeElement.style.transform = 'translateX(0)';
        }
        const firstItem = this.clientImages.shift();
        if (firstItem) {
          this.clientImages.push(firstItem);
        }
      }, 500);
    }
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}
