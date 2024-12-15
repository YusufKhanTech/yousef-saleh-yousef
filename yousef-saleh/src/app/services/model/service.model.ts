export class ServiceModel {
  serviceId?: number;
  serviceName?: string;
  serviceIcon?: string;
  serviceIncludes?: ServiceIncludes[];
  serviceImageInfos?: ServiceImageInfo[];
}

export class ServiceImageInfo {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  keyPoints?: ServiceKeyPoints[];
  align?:string;
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
