export class AwardAndCertificationModel {
  id?: string;
  title?: string;
  subTitle?: string;
  image?: string;
  type?: RECOGNITION_TYPE;
}

export enum RECOGNITION_TYPE {
  AWARDS = 'AWARDS',
  CERTIFICATION = 'CERTIFICATION',
  COMMERCIAL = 'COMMERCIAL'
}
