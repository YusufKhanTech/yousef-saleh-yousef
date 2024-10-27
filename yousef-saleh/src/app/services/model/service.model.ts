export class ServiceModel {
  serviceId: number = 0;
  serviceName: string = '';
  serviceIcon: string = '';
  serviceDescription: string = '';
  serviceKeyPoints: ServiceKeyPoints[] = [];
  serviceIncludes: ServiceIncludes[] = [];
  images: string[] = [];
}

export class ServiceCard {
  heading: string = '';
  subHeading: string = '';
}
export class ServiceKeyPoints {
  icon?: string = '';
  keyPoints: string = '';
}

export class ServiceIncludes {
  serviceIncludeName: string = '';
  serviceIncludeDescription: string = '';
}
