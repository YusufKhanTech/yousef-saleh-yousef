import {AwardAndCertificate, CERTIFICATE_TYPE} from '../model/award-and-certification.model';

export class AwardAndCertificateUtil {

  public static commercialCertificates: AwardAndCertificate[] = [
    { certificateId: 'cc01', certificateName: 'CR', image: '/assets/img/awards/ministry-of-commerce.png', showImage: '/assets/img/awards/cr-registration.png' },
    { certificateId: 'cc02', certificateName: 'saudi-contractor-classification', image: '/assets/img/awards/cc-1.jpeg', showImage: '/assets/img/awards/contractor-classification.png' },
    { certificateId: 'cc03', certificateName: 'chamber', image: '/assets/img/awards/asharqia-chamber.svg', showImage: '/assets/img/awards/cc-chamber.png' },
    { certificateId: 'cc04', certificateName: 'national-address', image: '/assets/img/awards/national-address.svg', showImage: '/assets/img/awards/cc-chamber.jpeg' },
    { certificateId: 'cc05', certificateName: 'gosi-certification', image: '/assets/img/awards/gosi.svg', showImage: '/assets/img/awards/cc-chamber.jpeg' },
    { certificateId: 'cc06', certificateName: 'vat-certification', image: '/assets/img/awards/zakat.png', showImage: '/assets/img/awards/cc-vat.jpeg' },
    { certificateId: 'cc07', certificateName: 'zakat-certification', image: '/assets/img/awards/zakat.png' , showImage: '/assets/img/awards/cc-zakat-1.jpeg' }
  ];

  public static aFourCommercialCertificates: AwardAndCertificate[] = [
    { certificateId: 'acc01', certificateName: 'vat', image: '/assets/img/awards/cc-vat.jpeg' },
    { certificateId: 'acc02', certificateName: 'zakat-1', image: '/assets/img/awards/cc-zakat-1.jpeg' },
    { certificateId: 'acc03', certificateName: 'zakat', image: '/assets/img/awards/cc-zakat.jpeg' }
  ];

  public static preQualifiedCertificates: AwardAndCertificate[] = [
    { certificateId: 'pqc01', certificateName: 'PQ-saudi-electricity', image: '/assets/img/clients/saudi-electricity-logo.png', showImage: '/assets/img/awards/sec-approval-app.png' },
    { certificateId: 'pqc02', certificateName: 'PQ-saudi-electricity', image: '/assets/img/clients/saudi-electricity-logo.png', showImage: '/assets/img/awards/sec-pre-qualification.png' }
  ];

  public static  isoCertificates: AwardAndCertificate[] = [
    { certificateId: 'ic01', certificateName: 'ISO-9001-2015', image: '/assets/img/awards/ISO-9001-2015-logo.jpg', showImage: '/assets/img/awards/ISO-9001-2015.png'},
    { certificateId: 'ic02', certificateName: 'ISO-14001-2015', image: '/assets/img/awards/ISO-14001-2015-logo.jpg', showImage: '/assets/img/awards/ISO-14001-2015.png'},
    { certificateId: 'ic03', certificateName: 'ISO-45001-2018', image: '/assets/img/awards/ISO-45001-2018-logo.jpg', showImage: '/assets/img/awards/ISO-45001-2018.png' }
  ];

  public static  aFourRecognitionCertificates: AwardAndCertificate[] = [
    { certificateId: 'arc02', certificateName: 'national-grid', image: '/assets/img/clients/national-grid-logo.png', showImage: '/assets/img/awards/national-grid-app-certificate.png' },
    { certificateId: 'arc03', certificateName: 'zamil-coolcare', image: '/assets/img/clients/national-grid-logo.png',showImage: '/assets/img/awards/zamil-app-certificate.png' },
    { certificateId: 'arc01', certificateName: 'national-grid-award',image: '/assets/img/clients/national-grid-logo.png', showImage: '/assets/img/awards/sec-approval-app.png' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/clients/national-grid-logo.png', showImage: '/assets/img/awards/sec-work-progress-certificate.png' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/clients/national-grid-logo.png', showImage: '/assets/img/awards/sec-approval-certificate.png' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/clients/national-grid-logo.png', showImage: '/assets/img/awards/awards-saudi-electricity.jpeg' },
  ];

  public static getCertificatesByCategory(category: string): AwardAndCertificate[] {
    switch (category) {
      case CERTIFICATE_TYPE.COMMERCIAL:
        return this.commercialCertificates;
      case CERTIFICATE_TYPE.PREQUALIFIED:
        return this.preQualifiedCertificates;
      case CERTIFICATE_TYPE.ISO:
        return this.isoCertificates;
      case CERTIFICATE_TYPE.A_FOUR_RECOGNITION:
        return this.aFourRecognitionCertificates;
      default:
        return [];
    }
  }
}
