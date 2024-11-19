export class Employee {
  id?: string;
  name?: string;
  designation?: string;
  description?: string;
  image?: string;
  alignment = EmployeeAlignment.LEFT;
  keyPoints?: EmployeeKeyPoints[];
}

export class TeamMember {
  id?: string;
  name?: string
  designation?: string;
  image?: string;
}
export class EmployeeKeyPoints {
  id?: string;
  value?: string;
}

export enum EmployeeAlignment {
  LEFT = 'LEFT',
  RIGHT = 'RIGHt'
}
