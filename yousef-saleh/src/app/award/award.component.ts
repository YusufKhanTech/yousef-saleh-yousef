import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {BannerContentComponent} from "../banner-content/banner-content.component";
import { NgIf } from '@angular/common';
import {HeadingContentComponent} from "../heading-content/heading-content.component";
import { CERTIFICATE_TYPE} from "./model/award-and-certification.model";
import {AwardAndCertificateUtil} from "./util/award-and-certificate.util";

@Component({
  selector: 'app-award',
  standalone: true,
  imports: [
    BannerContentComponent,
    NgIf,
    HeadingContentComponent,
  ],
  templateUrl: './award.component.html',
  styleUrl: './award.component.css'
})
export class AwardComponent {

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('aFourCarousel', { static: false }) aFourCarousel!: ElementRef;
  @ViewChild('recognitionCarousel', { static: false }) recognitionCarousel!: ElementRef;
  @ViewChild('isoCarousel', { static: false }) isoCarousel!: ElementRef;
  @ViewChild('aFourRecognitionCarousel', { static: false }) aFourRecognitionCarousel!: ElementRef;
  @ViewChild('preCarousel', { static: false }) preCarousel!: ElementRef;
  scrollAmount = 400;
  isSmallScreen = window.innerWidth <= 768;
  breadcrumbTexts = ['Home', 'Awards'];
  isPopupOpen = false;
  popupImageSrc: string | undefined;
  commercialCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.COMMERCIAL);
  aFourCommercialCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.A_FOUR_COMMERCIAL);
  preQualifiedCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.PREQUALIFIED);
  isoCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.ISO);
  recognitionCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.RECOGNITION);
  aFourRecognitionCertificates = AwardAndCertificateUtil.getCertificatesByCategory(CERTIFICATE_TYPE.A_FOUR_RECOGNITION);
  protected readonly CERTIFICATE_TYPE = CERTIFICATE_TYPE;

  @HostListener('window:resize', [])
  onResize(): void {
    this.isSmallScreen = window.innerWidth <= 768;
    this.scrollAmount = 330;
  }
  openPopup(src: string | undefined): void {
    this.popupImageSrc = src;
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.popupImageSrc = undefined;
  }

  scroll(awardType: string, direction: 'left' | 'right'): void {
    const scrollAmount = direction === 'left' ? -this.scrollAmount : this.scrollAmount;
    let targetCarousel: any;
    targetCarousel = this.getCarouselByCertificateType(awardType, targetCarousel);
    targetCarousel.nativeElement.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }

  private getCarouselByCertificateType(awardType: string, targetCarousel: any) {
    switch (awardType) {
      case CERTIFICATE_TYPE.COMMERCIAL:
        targetCarousel = this.carousel;
        break;
      case CERTIFICATE_TYPE.A_FOUR_COMMERCIAL:
        targetCarousel = this.aFourCarousel;
        break;
      case CERTIFICATE_TYPE.RECOGNITION:
        targetCarousel = this.recognitionCarousel;
        break;
      case CERTIFICATE_TYPE.ISO:
        targetCarousel = this.isoCarousel;
        break;
      case CERTIFICATE_TYPE.A_FOUR_RECOGNITION:
        targetCarousel = this.aFourRecognitionCarousel;
        break;
      default:
        targetCarousel = this.preCarousel;
        break;
    }
    return targetCarousel;
  }

  scrollLeft(awardType: string): void {
    this.scroll(awardType, 'left');
  }

  scrollRight(awardType: string): void {
    this.scroll(awardType, 'right');
  }

}
