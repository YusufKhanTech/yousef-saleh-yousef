export class Project {
  id?: number;
  name?: string;
  projectType?: PROJECT_TYPE;
  image?: string;
  description?: string;
  subDescription?: string;
  isFeaturedProject?: boolean;
  projectInfo?: ProjectInfo;
}

export class ProjectInfo {
  id?: number;
  clientName?: string;
  image?: string;
  city?: string;
  mainContractor?: string;
  images?: string[];
  keyPoints?: string[];
  website?: string;
  startDate?: string;
  endDate?: string;
}

export enum PROJECT_TYPE {
  CONSTRUCTIONS = 'CONSTRUCTIONS',
  MAINTENANCE_AND_OPERATIONS = 'MAINTENANCE AND OPERATIONS',
  WATER_PROOFING = 'WATER PROOFING'
}

export enum PROJECT_TYPE_DISPLAY {
  CONSTRUCTIONS = 'Constructions',
  MAINTENANCE_AND_OPERATIONS = 'Maintenance and Operations',
  WATER_PROOFING = 'Water Proofing'
}

export enum TABS {
    ALL = 'ALL',
    CONSTRUCTIONS = 'CONSTRUCTIONS',
    MAINTENANCE_AND_OPERATIONS = 'MAINTENANCE_AND_OPERATIONS',
    WATER_PROOFING = 'WATER_PROOFING'
}

export enum TABS_DISPLAY {
  ALL = 'All',
  CONSTRUCTIONS = 'Constructions',
  MAINTENANCE_AND_OPERATIONS = 'Maintenance & Operations',
  WATER_PROOFING = 'Water Proofing'
}
export class Tabs {
  id?: number;
  name?: string;
}
