import {Project, PROJECT_TYPE, Tabs} from '../model/project.model';

export class ProjectUtil {

  public static getAllTabs(): Tabs[] {
    return [
      {id: 0, name: 'All'},
      {id: 1, name: 'Constructions'},
      {id: 2, name: 'Maintenance And Operations'},
      {id: 3, name: 'Water Proofing'}
    ]
  }

  public static getAllProjects(): Project[] {
    return [
      {
        id: 1,
        name: 'Power supply to Khafji Joint operation 115/13.8 KV Substation',
        projectType: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/project-images/P2.jpeg',
        description: 'Yousef Saleh Yousef Contracting & Establishment played a vital role in enhancing the power infrastructure for the Khafji Joint Operation (KJO) by delivering a robust 115/13.8KV substation power supply. Our scope included the installation of high-voltage transmission lines, transformers, and advanced protection systems, ensuring seamless energy distribution to critical operational facilities. The project was executed with precision, adhering to the highest safety and quality standards to support the growing energy demands of the region.',
        isFeaturedProject: false,
        projectInfo: {
          id: 1,
          clientName: 'Saudi Electricity Company',
          city: 'Khafji, Saudi Arabia',
          mainContractor: 'Rome Electro Arabia',
          image: 'assets/img/project-images/P1.jpeg',
          images: [
            'assets/img/project-images/P2.jpeg',
            'assets/img/project-images/image006.jpg',
            'assets/img/project-images/P2 Khafji.jpg'
          ]
        }
      },
      {
        id: 2,
        name: 'As-Sarrar-2, 115/33/13.8KV Substation',
        projectType: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/project-images/image010.jpg',
        description: 'Our team successfully executed the construction and commissioning of the As-Sarrar-2 substation, a crucial addition to the region’s power grid. This 115/33/13.8KV facility enhances electricity transmission efficiency, providing a stable power supply to residential, commercial, and industrial zones. The project involved state-of-the-art GIS technology, power transformers, and SCADA integration to ensure real-time monitoring and operational reliability.',
        isFeaturedProject: false,
        projectInfo: {
          id: 2,
          clientName: 'Saudi Electricity',
          mainContractor: 'Al Toukhi',
          city: 'SARRAR',
          image: 'assets/img/project-images/image010.jpg',
          images: [
            'assets/img/project-images/Picture1.png',
            'assets/img/project-images/WhatsApp Image 2024-12-02 at 15.03.08.jpeg',
            'assets/img/project-images/image011.jpg',
            'assets/img/project-images/image015.jpg',
            'assets/img/project-images/image018.jpg',
            'assets/img/project-images/image020.jpg',
            'assets/img/project-images/image030.jpg',
            'assets/img/project-images/image032.jpg',
            'assets/img/project-images/image038.jpg',
            'assets/img/project-images/image040.jpg',
            'assets/img/project-images/image042.jpg',
            'assets/img/project-images/image056.jpg',
            'assets/img/project-images/image050.jpg',
            'assets/img/project-images/image054.jpg',
            'assets/img/project-images/Picture5.png',
            'assets/img/project-images/image061.jpg',
            'assets/img/project-images/image066.jpg',
            'assets/img/project-images/image072.jpg'
          ]
        }
      },
      {
        id: 3,
        name: 'Construction of Pump Room',
        projectType: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/project-images/30.jpg',
        description: 'As part of our expertise in infrastructure development, YSY Contracting & Establishment efficiently designed and constructed a pump room tailored to meet the water management needs of the project site. The facility includes high-capacity pumps, advanced filtration systems, and automated controls, ensuring efficient water distribution for industrial and municipal applications. The structure was built to withstand harsh environmental conditions while maintaining optimal performance.',
        isFeaturedProject: false,
        projectInfo: {
          id: 3,
          clientName: 'Saudi Electricity Company',
          city: 'South Hoffuf',
          mainContractor: 'Rome Electro Arabia',
          images: [
            'assets/img/project-images/1.png',
            'assets/img/project-images/4.jpg',
            'assets/img/project-images/6.jpg',
            'assets/img/project-images/7.jpg',
            'assets/img/project-images/8.jpg',
            'assets/img/project-images/9.jpg',
            'assets/img/project-images/10.jpg',
            'assets/img/project-images/11.jpg',
            'assets/img/project-images/12.jpg',
            'assets/img/project-images/15.jpg',
            'assets/img/project-images/16.jpg',
            'assets/img/project-images/17.jpg',
            'assets/img/project-images/19.jpg',
            'assets/img/project-images/21.jpg',
            'assets/img/project-images/22.jpg',
            'assets/img/project-images/23.jpg',
            'assets/img/project-images/25.jpg',
            'assets/img/project-images/31.jpg',
            'assets/img/project-images/26.jpg',
            'assets/img/project-images/29.jpg',
            'assets/img/project-images/34.jpg',
            'assets/img/project-images/36.jpg',
            'assets/img/project-images/30.jpg'
          ]
        }
      },
      {
        id: 4,
        name: 'Substation Pre-Cast Boundary Wall',
        projectType: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/project-images/image186.jpg',
        description: 'Security and durability were the priorities in constructing the pre-cast boundary wall for a high-voltage substation. YSY provided a reinforced concrete perimeter solution, offering protection against external threats while maintaining accessibility for maintenance and operations. Our innovative pre-cast technology allowed for rapid installation, reduced construction time, and enhanced structural integrity, ensuring long-term reliability.',
        isFeaturedProject: false,
        projectInfo: {
          id: 4,
          image: 'assets/img/project-images/image186.jpg',
          clientName: 'Saudi Electricity Company',
          city: 'South Hoffuf',
          mainContractor: 'Rome Electro Arabia',
          images: [
            'assets/img/project-images/image150.jpg',
            'assets/img/project-images/image149.jpg',
            'assets/img/project-images/image156.jpg',
            'assets/img/project-images/image154.jpg',
            'assets/img/project-images/image159.jpg',
            'assets/img/project-images/image161.jpg',
            'assets/img/project-images/image165.jpg',
            'assets/img/project-images/image164.jpg',
            'assets/img/project-images/image168.jpg',
            'assets/img/project-images/image171.jpg',
            'assets/img/project-images/image170.jpg',
            'assets/img/project-images/image174.jpg',
            'assets/img/project-images/image173.jpg',
            'assets/img/project-images/image176.jpg',
            'assets/img/project-images/image180.jpg',
            'assets/img/project-images/image186.jpg'
          ]
        }
      },
      {
        id: 5,
        name: 'Asphalting',
        projectType: PROJECT_TYPE.CONSTRUCTIONS,
        image: 'assets/img/project-images/image208.jpg',
        description: 'YSY Contracting & Establishment took charge of high-quality asphalting works, improving road infrastructure to support transportation and logistics. Our process involved grading, compaction, and application of premium-grade asphalt, ensuring a smooth, durable, and weather-resistant surface. The project was completed with strict adherence to traffic safety standards, providing enhanced connectivity for the surrounding areas.',
        isFeaturedProject: false,
        projectInfo: {
          id: 5,
          clientName: 'Saudi Electricity Company',
          image: 'assets/img/project-images/image208.jpg',
          city: 'South Hoffuf',
          mainContractor: 'Rome Electro Arabia',
          images: [
            'assets/img/project-images/image189.jpg',
            'assets/img/project-images/image188.jpg',
            'assets/img/project-images/image192.jpg',
            'assets/img/project-images/image196.jpg',
            'assets/img/project-images/image197.jpg',
            'assets/img/project-images/image194.jpg',
            'assets/img/project-images/image203.jpg',
            'assets/img/project-images/image202.jpg',
            'assets/img/project-images/image204.jpg',
            'assets/img/project-images/image199.jpg',
            'assets/img/project-images/image206.jpg',
            'assets/img/project-images/image205.jpg',
            'assets/img/project-images/image209.jpg',
            'assets/img/project-images/image208.jpg'
          ]
        }
      },
      // {
      //   id: 6,
      //   name: 'Riyad Bank',
      //   projectType: PROJECT_TYPE.CONSTRUCTIONS,
      //   image: '/assets/img/website-images/riyad-bank-project-1.jpg',
      //   description: '',
      //   isFeaturedProject: true,
      //   projectInfo: {
      //     id: 1,
      //     clientName: 'Riyad Bank',
      //     city: 'Khafji, Saudi Arabia',
      //     mainContractor: 'Rome Electro Arabia',
      //     image: '/assets/img/website-images/riyad-bank-project-1.jpg',
      //     images: [
      //       '/assets/img/website-images/riyad-bank-project-2.jpg',
      //       '/assets/img/website-images/riyad-bank-project-3.jpg',
      //       '/assets/img/website-images/riyad-bank-project-4.jpg'
      //     ]
      //   }
      // },
      // {
      //   id: 7,
      //   name: 'Al Rajhi Bank',
      //   projectType: PROJECT_TYPE.CONSTRUCTIONS,
      //   image: '/assets/img/website-images/al-rajhi-project-3.jpg',
      //   description: '',
      //   isFeaturedProject: true,
      //   projectInfo: {
      //     id: 1,
      //     clientName: 'Al Rajhi Bank',
      //     city: 'Saudi Arabia',
      //     mainContractor: 'Rome Electro Arabia',
      //     image: '/assets/img/website-images/al-rajhi-project-3.jpg',
      //     images: [
      //       '/assets/img/website-images/al-rajhi-project-1.jpg',
      //       '/assets/img/website-images/al-rajhi-project-2.jpg',
      //       '/assets/img/website-images/al-rajhi-project-3.jpg'
      //     ]
      //   }
      // },
      // {
      //   id: 8,
      //   name: 'Al Bilad Bank',
      //   projectType: PROJECT_TYPE.CONSTRUCTIONS,
      //   image: '/assets/img/website-images/al-bilad-project-4.jpg',
      //   description: '',
      //   isFeaturedProject: true,
      //   projectInfo: {
      //     id: 1,
      //     clientName: 'Al Bilad Bank',
      //     city: 'Saudi Arabia',
      //     mainContractor: 'Rome Electro Arabia',
      //     image: '/assets/img/website-images/al-bilad-project-4.jpg',
      //     images: [
      //       '/assets/img/website-images/al-bilad-bank-project-1.jpg',
      //       '/assets/img/website-images/al-bilad-bank-project-2.jpg',
      //       '/assets/img/website-images/al-bilad-bank-project-3.jpg'
      //     ]
      //   }
      // },
      // {
      //   id: 9,
      //   name: 'Saudi Investment Bank',
      //   projectType: PROJECT_TYPE.CONSTRUCTIONS,
      //   image: '/assets/img/website-images/saudi-investment-bank.jpg',
      //   description: '',
      //   isFeaturedProject: true,
      //   projectInfo: {
      //     id: 1,
      //     clientName: 'Saudi Investment Bank',
      //     city: 'Saudi Arabia',
      //     mainContractor: 'Rome Electro Arabia',
      //     image: '/assets/img/website-images/saudi-investment-bank.jpg',
      //     images: [
      //       '/assets/img/website-images/saudi-investment-bank.jpg'
      //     ]
      //   }
      // },
      // {
      //   id: 10,
      //   name: 'Saudi Electricity Company',
      //   projectType: PROJECT_TYPE.CONSTRUCTIONS,
      //   image: '/assets/img/website-images/substation-2.jpg',
      //   description: '',
      //   isFeaturedProject: true,
      //   projectInfo: {
      //     id: 1,
      //     clientName: 'Saudi Electricity Company',
      //     city: 'Khafji, Saudi Arabia',
      //     mainContractor: 'Rome Electro Arabia',
      //     image: '/assets/img/website-images/substation-2.jpg',
      //     images: [
      //       '/assets/img/website-images/substation-2.jpg',
      //     ],
      //   }
      // }
    ]
  }
}
