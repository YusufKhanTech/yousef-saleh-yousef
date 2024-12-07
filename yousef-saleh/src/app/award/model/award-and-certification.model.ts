export interface AwardAndCertificate {
  certificateId: string;
  certificateName: string;
  image: string;
}

export enum CERTIFICATE_TYPE {
  COMMERCIAL = 'COMMERCIAL',
  PREQUALIFIED = 'PREQUALIFIED',
  ISO = 'ISO',
  RECOGNITION = 'RECOGNITION'
}
