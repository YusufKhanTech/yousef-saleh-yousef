import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {HeadingContentComponent} from "../heading-content/heading-content.component";
import {AwardAndCertificate, CERTIFICATE_TYPE} from "./model/award-and-certification.model";
import {AwardAndCertificateUtil} from "./util/award-and-certificate.util";
import {NgIf} from '@angular/common';
import {BannerContentComponent} from '../banner-content/banner-content.component';

@Component({
  selector: 'app-award',
  standalone: true,
  imports: [
    HeadingContentComponent,
    NgIf,
    BannerContentComponent,
  ],
  templateUrl: './award.component.html',
  styleUrl: './award.component.css'
})
export class AwardComponent {

  @ViewChild('carousel', {static: false}) carousel!: ElementRef;
  @ViewChild('aFourCarousel', {static: false}) aFourCarousel!: ElementRef;
  @ViewChild('isoCarousel', {static: false}) isoCarousel!: ElementRef;
  @ViewChild('aFourRecognitionCarousel', {static: false}) aFourRecognitionCarousel!: ElementRef;
  @ViewChild('preCarousel', {static: false}) preCarousel!: ElementRef;
  scrollAmount = 400;
  isSmallScreen = window.innerWidth <= 768;
  breadcrumbTexts = ['Home', 'Awards'];
  isPopupOpen = false;
  popupImageSrc: string | undefined;
  commercialCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.COMMERCIAL);
  preQualifiedCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.PREQUALIFIED);
  isoCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.ISO);
  aFourRecognitionCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.A_FOUR_RECOGNITION);

  @HostListener('window:resize', [])
  onResize(): void {
    this.isSmallScreen = window.innerWidth <= 768;
    this.scrollAmount = 358;
  }

  openPopup(src: string | undefined): void {
    this.popupImageSrc = src;
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.popupImageSrc = undefined;
  }

  downloadImage(awardAndCertificate?: AwardAndCertificate) {
    if (awardAndCertificate?.showImage) {
      fetch(awardAndCertificate?.showImage)
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = awardAndCertificate?.certificateName + '.jpg';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        })
        .catch((error) => {
          console.error('Error downloading image:', error);
        });
    }
  }

  // scroll(awardType: string, direction: 'left' | 'right'): void {
  //   const scrollAmount = direction === 'left' ? -this.scrollAmount : this.scrollAmount;
  //   let targetCarousel: any;
  //   targetCarousel = this.getCarouselByCertificateType(awardType, targetCarousel);
  //   targetCarousel.nativeElement.scrollBy({
  //     left: scrollAmount,
  //     behavior: 'smooth',
  //   });
  // }

  // scrollLeft(awardType: string): void {

  //   this.scroll(awardType, 'left');
  // }
  //
  // scrollRight(awardType: string): void {
  //   this.scroll(awardType, 'right');
  // }

  // private getCarouselByCertificateType(awardType: string, targetCarousel: any) {
  //   switch (awardType) {
  //     case CERTIFICATE_TYPE.COMMERCIAL:
  //       targetCarousel = this.carousel;
  //       break;
  //     case CERTIFICATE_TYPE.A_FOUR_COMMERCIAL:
  //       targetCarousel = this.aFourCarousel;
  //       break;
  //     case CERTIFICATE_TYPE.ISO:
  //       targetCarousel = this.isoCarousel;
  //       break;
  //     case CERTIFICATE_TYPE.A_FOUR_RECOGNITION:
  //       targetCarousel = this.aFourRecognitionCarousel;
  //       break;
  //     default:
  //       targetCarousel = this.preCarousel;
  //       break;
  //   }
  //   return targetCarousel;
  // }
}


