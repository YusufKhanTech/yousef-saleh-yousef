export interface AwardAndCertificate {
  certificateId: string;
  certificateName: string;
  image: string;
  showImage?: string;
}

export enum CERTIFICATE_TYPE {
  COMMERCIAL = 'COMMERCIAL',
  A_FOUR_COMMERCIAL = 'A_FOUR_COMMERCIAL',
  PREQUALIFIED = 'PREQUALIFIED',
  ISO = 'ISO',
  RECOGNITION = 'RECOGNITION',
  A_FOUR_RECOGNITION = 'A_FOUR_RECOGNITION'
}
