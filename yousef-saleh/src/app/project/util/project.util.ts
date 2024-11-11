import {Project, PROJECT_TYPE} from '../model/project.model';

export class ProjectUtil {

  public static getAllProjects(): Project[] {
    return [
      {
        id: 1,
        name: 'Electrical Substation',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/electric-substation.jpg',
        description: '',
        projectInfo: {
          id: 1,
          clientName: 'Saudi Electricity Company',
          images: [
            'assets/img/website-images/elec-sub-1.jpg',
            'assets/img/website-images/elec-subs-2.jpg',
            'assets/img/website-images/elec-sub-3.jpg'
          ],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 2,
        name: 'Civil Maintenance',
        category: PROJECT_TYPE.MAINTENANCE_AND_OPERATIONS,
        image: 'assets/img/website-images/electro-mech.jpg',
        description: '',
        projectInfo: {
          id: 2,
          clientName: 'NCR',
          images: [
            'assets/img/website-images/civil-1.jpg',
            'assets/img/website-images/civil-2.jpg'
          ],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 3,
        name: 'Industrial & Commercial building construction',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/industrial.jpg',
        description: '',
        projectInfo: {
          id: 3,
          clientName: 'Bank Al Bilad',
          images: [],
          startDate: '11 Jan 2021',
          endDate: '20 Dec 2022',
        },
      },
      {
        id: 4,
        name: 'Electrical Maintenance',
        category: PROJECT_TYPE.MAINTENANCE_AND_OPERATIONS,
        image: 'assets/img/website-images/electrical-m-1.jpg',
        description: '',
        projectInfo: {
          id: 4,
          clientName: 'Riyad Bank',
          images: [
            'assets/img/website-images/elec-m-1.jpg',
            'assets/img/website-images/elec-m-2.jpg'
          ],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 5,
        name: 'Pre Engineered Steel Buildings',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/steel-building.jpg',
        description: '',
        projectInfo: {
          id: 5,
          clientName: 'Arab National Bank',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 6,
        name: 'Water Proofing & Insulation Services',
        category: PROJECT_TYPE.WATER_PROOFING,
        image: 'assets/img/website-images/water-proofing.jpeg',
        description: '',
        projectInfo: {
          id: 6,
          clientName: 'Saudi Electricity Company',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        }
      },
      {
        id: 7,
        name: 'Cladding and Glass solutions',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/cladding-and-glass.jpg',
        description: '',
        projectInfo: {
          id: 7,
          clientName: 'AL Rajhi Bank',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 8,
        name: 'Asphalting & Road works',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/asphalting.jpg',
        description: '',
        projectInfo: {
          id: 8,
          clientName: 'National Grid',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 9,
        name: 'Fending Installations',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/fencing.jpg',
        description: '',
        projectInfo: {
          id: 9,
          clientName: 'Royal Commission for Jubail & Yanbu',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 10,
        name: 'Concrete repair',
        category: PROJECT_TYPE.MAINTENANCE_AND_OPERATIONS,
        image: 'assets/img/website-images/concrete.jpg',
        description: '',
        projectInfo: {
          id: 10,
          clientName: 'Alawwal Bank',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 11,
        name: 'Electro Mechanical Works',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/electro-mech.jpg',
        description: '',
        projectInfo: {
          id: 11,
          clientName: 'Ascott',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 12,
        name: 'Portable office & Accommodation',
        category: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/website-images/portable-office.jpg',
        description: '',
        projectInfo: {
          id: 12,
          clientName: 'Al Toukhi',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        },
      },
      {
        id: 13,
        name: 'Electro Mechanical Repair / Maintenance',
        category: PROJECT_TYPE.MAINTENANCE_AND_OPERATIONS,
        image: 'assets/img/website-images/electrical-m-2.jpg',
        description: '',
        projectInfo: {
          id: 13,
          clientName: 'SAB Bank',
          images: [],
          startDate: '11 Nov 2021',
          endDate: '20 January 2022',
        }
      }
    ]
  }
}
