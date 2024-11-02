export class ServiceModel {
  serviceId?: number;
  serviceName?: string;
  serviceIcon?: string;
  serviceDescription?: string;
  serviceKeyPoints?: ServiceKeyPoints[];
  serviceIncludes?: ServiceIncludes[];
  images?: string[];
}

export class ServiceCard {
  heading?: string;
  subHeading?: string;
}
export class ServiceKeyPoints {
  icon?: string;
  keyPoints?: string;
}

export class ServiceIncludes {
  serviceIncludeName?: string;
  serviceIncludeDescription?: string;
}

export class ServiceCategory {
  serviceCategoryId?: number;
  serviceCategoryName?: string;
  serviceSubCategories?: ServiceModel[];
  image?: string;
  icon?: string;
  description?: string;
  shortDescription?: string;
}
