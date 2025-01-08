export class ServiceModel {
  serviceId?: number;
  serviceName?: string;
  serviceIcon?: string;
  image?: string;
  description?: string;
  keyPoints?: ServiceKeyPoints[];
  serviceIncludes?: ServiceIncludes[];
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
