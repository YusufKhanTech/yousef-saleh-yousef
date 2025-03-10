import {AwardAndCertificate, CERTIFICATE_TYPE} from '../model/award-and-certification.model';

export class AwardAndCertificateUtil {

  public static commercialCertificates: AwardAndCertificate[] = [
    { certificateId: 'cc01', certificateName: 'registeration', image: '/assets/img/awards/cc-registeration.jpeg' },
    { certificateId: 'cc02', certificateName: 'rcjy-logo', image: '/assets/img/awards/cc-1.jpeg' },
    { certificateId: 'cc03', certificateName: 'chamber', image: '/assets/img/awards/cc-chamber.jpeg' }
  ];

  public static aFourCommercialCertificates: AwardAndCertificate[] = [
    { certificateId: 'acc01', certificateName: 'vat', image: '/assets/img/awards/cc-vat.jpeg' },
    { certificateId: 'acc02', certificateName: 'zakat-1', image: '/assets/img/awards/cc-zakat-1.jpeg' },
    { certificateId: 'acc03', certificateName: 'zakat', image: '/assets/img/awards/cc-zakat.jpeg' }
  ];

  public static preQualifiedCertificates: AwardAndCertificate[] = [
    { certificateId: 'pqc01', certificateName: 'saudi-electricity', image: '/assets/img/awards/pq-saudi-electricity.jpeg' },
    { certificateId: 'pqc02', certificateName: 'saudi-electricity-1', image: '/assets/img/awards/pq-saudi-electricity-1.jpeg' }
  ];

  public static  isoCertificates: AwardAndCertificate[] = [
    { certificateId: 'ic01', certificateName: '9001-2015', image: '/assets/img/awards/9001-2015.jpeg' },
    { certificateId: 'ic02', certificateName: '14001-2015', image: '/assets/img/awards/14001-2015.jpeg' },
    { certificateId: 'ic03', certificateName: '45001-2018', image: '/assets/img/awards/45001-2018.jpeg' }
  ];

  public static  aFourRecognitionCertificates: AwardAndCertificate[] = [
    { certificateId: 'arc02', certificateName: 'national-grid', image: '/assets/img/awards/COA-national-grid.jpeg' },
    { certificateId: 'arc03', certificateName: 'zamil', image: '/assets/img/awards/COA-zamil.jpeg' },
    { certificateId: 'arc01', certificateName: 'awards-saudi-electricity', image: '/assets/img/awards/awards-saudi-electricity.jpeg' }
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
