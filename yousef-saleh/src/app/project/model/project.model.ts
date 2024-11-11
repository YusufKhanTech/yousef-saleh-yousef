export class Project {
  id?: number;
  name?: string;
  category?: PROJECT_TYPE;
  image?: string;
  description?: string;
  projectInfo?: ProjectInfo;
}

export class ProjectInfo {
  id?: number;
  clientName?: string;
  images?: string[];
  website?: string;
  startDate?: string;
  endDate?: string;
}

export enum PROJECT_TYPE {
  CONSTRUCTIONS = 'CONSTRUCTIONS',
  MAINTENANCE_AND_OPERATIONS = 'MAINTENANCE_AND_OPERATIONS',
  WATER_PROOFING = 'WATER_PROOFING'
}
