import {AwardAndCertificate, CERTIFICATE_TYPE} from '../model/award-and-certification.model';

export class AwardAndCertificateUtil {

  public static commercialCertificates: AwardAndCertificate[] = [
    { certificateId: 'cc01', certificateName: 'registeration', image: '/assets/img/awards/cr-registration.png' },
    { certificateId: 'cc02', certificateName: 'rcjy-logo', image: '/assets/img/awards/contractor-classification.png' },
    { certificateId: 'cc03', certificateName: 'chamber', image: '/assets/img/awards/cc-chamber.png' }
  ];

  public static aFourCommercialCertificates: AwardAndCertificate[] = [
    { certificateId: 'acc01', certificateName: 'vat', image: '/assets/img/awards/vat-certification.png' },
    { certificateId: 'acc03', certificateName: 'zakat', image: '/assets/img/awards/contractor-classification-1.png' },
    { certificateId: 'acc02', certificateName: 'zakat-1', image: '/assets/img/awards/zakat-certificate.png' },
    { certificateId: 'acc03', certificateName: 'zakat', image: '/assets/img/awards/saudization-certificate.png' },
    { certificateId: 'acc03', certificateName: 'zakat', image: '/assets/img/awards/gosi-certificate.png' },
    { certificateId: 'acc03', certificateName: 'zakat', image: '/assets/img/awards/national-address.png' }
  ];

  public static preQualifiedCertificates: AwardAndCertificate[] = [
    { certificateId: 'pqc01', certificateName: 'saudi-electricity', image: '/assets/img/awards/sec-approval-app.png' },
    { certificateId: 'pqc02', certificateName: 'saudi-electricity-1', image: '/assets/img/awards/sec-pre-qualification.png' }
  ];

  public static  isoCertificates: AwardAndCertificate[] = [
    { certificateId: 'ic01', certificateName: '9001-2015', image: '/assets/img/awards/ISO-9001-2015.png' },
    { certificateId: 'ic02', certificateName: '14001-2015', image: '/assets/img/awards/ISO-14001-2015.png' },
    { certificateId: 'ic03', certificateName: '45001-2018', image: '/assets/img/awards/ISO-45001-2018.png' }
  ];

  public static  aFourRecognitionCertificates: AwardAndCertificate[] = [
    { certificateId: 'arc02', certificateName: 'national-grid', image: '/assets/img/awards/national-grid-app-certificate.png' },
    { certificateId: 'arc03', certificateName: 'zamil', image: '/assets/img/awards/zamil-app-certificate.png' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/awards/sec-approval-app.png' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/awards/sec-work-progress-certificate.png' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/awards/sec-approval-certificate.png' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/awards/awards-saudi-electricity.jpeg' },
  ];

  public static getCertificatesByCategory(category: string): AwardAndCertificate[] {
    switch (category) {
      case CERTIFICATE_TYPE.COMMERCIAL:
        return this.commercialCertificates;
      case CERTIFICATE_TYPE.A_FOUR_COMMERCIAL:
        return this.aFourCommercialCertificates;
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
