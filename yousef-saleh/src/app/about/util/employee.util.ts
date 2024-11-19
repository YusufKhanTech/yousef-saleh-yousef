import {Employee, EmployeeAlignment, TeamMember} from '../model/employee.model';

export class EmployeeUtil {

  public static getAllEmployees(): Employee[] {
    return [
      {
        id: 'em001',
        name: 'Saleh Yousef Al-Dossary',
        designation:'Founder',
        alignment: EmployeeAlignment.LEFT,
        description: 'A journey of success always requires the quality of foresight, strategy and professionalism along with the power of trust.\n' +
          '        Our inspiration comes from your Trust and Willingness to believe in our capability to deliver.\n' +
          '        Commitment, hard work and attention have helped this company to be on par with international companies in terms of standards of performance and quality of projects.\n' +
          '        <br><br>Yousef Saleh Yousef possesses a rich and diversified presence in the field of Construction and Infrastructure sectors especially at Eastern Provence Dammam and kingdom of Saudi Arabia.\n' +
          '        Finally, I assure you that Yousef Saleh Yousef will re-dedicate itself towards its commitments and strive for continuous growth.',
        image:'/assets/img/employees/al-dossary.jpg',
        keyPoints: []
      },
      {
        id: 'em002',
        name: 'Yousef Saleh Al Dossary',
        designation: 'Chairman',
        alignment: EmployeeAlignment.RIGHT,
        description: 'Yousef Saleh Al Dossary is a seasoned leader with extensive experience in the construction industry. He has played a pivotal role in driving the company’s growth, ensuring the delivery of high-quality projects and maintaining strong client relationships. His strategic vision and hands-on approach have been instrumental in achieving business success.',
        image: '/assets/img/employees/yousef.png',
        keyPoints: [
          {id: 'ek001', value: 'Over a decade of leadership experience in the construction sector.'},
          {id: 'ek002', value: 'Proven track record of managing successful, high-quality projects.'},
          {id: 'ek003', value: 'Strong focus on client satisfaction and long-term partnerships.'}
        ]
      },
      {
        id: 'em003',
        name: 'Khalifa Al Dossary',
        designation:'Vice Chairman',
        alignment: EmployeeAlignment.LEFT,
        description: 'Khalifa Al Dossary, as the Vice Chairman, ensuring the highest standards of quality, and fostering a culture of excellence. We pride ourselves on delivering exceptional results while maintaining strong relationships with our clients and partners. Our focus is on sustainable growth and creating value at every stage of the project.',
        image:'/assets/img/employees/khalifa.jpeg',
        keyPoints: [
          {id: 'ek001', value: 'Focus on innovation and quality.'},
          {id: 'ek002', value: 'Strong client and partner relationships.'},
          {id: 'ek003', value: 'Commitment to sustainable growth and value creation.'}
        ]
      },
      {
        id: 'em004',
        name: 'Shamsuddin Khan',
        designation:'General Manager',
        alignment: EmployeeAlignment.RIGHT,
        description: 'Shamsuddin Khan, as the General Manager, brings a wealth of expertise in operations and project management within the construction industry. His leadership ensures the seamless execution of projects, from planning to completion, while maintaining the highest standards of quality and efficiency. His dedication to operational excellence has been key to the company\'s success.',
        image:'/assets/img/employees/shams.jpeg',
        keyPoints: [
          {id: 'ek001', value: 'Expertise in managing day-to-day operations and project coordination.'},
          {id: 'ek002', value: 'Strong problem-solving abilities and attention to detail.'},
          {id: 'ek003', value: 'Focused on ensuring timely and successful project completion.'}
        ]
      }
    ]
  }

  public static getAllTeamMembers(): TeamMember[] {
    return [
      {
        id: 'tm01',
        name: 'Afifi Farag',
        designation: 'Financial Advisor',
        image: 'assets/img/employees/afifi.jpeg'
      },
      {
        id: 'tm02',
        name: 'Emad Mohamed Murtada',
        designation: 'HR',
        image: 'assets/img/employees/emad.jpeg'
      },
      // {
      //   id: 'tm03',
      //   name: 'Saqib Naseer',
      //   designation: 'Document Controller',
      //   image: 'assets/img/employees/saqib.jpeg'
      // },
      {
        id: 'tm04',
        name: 'Mohammed Samid bashir Ulde',
        designation: 'AutoCAD Draftsman & Supervisor',
        image: 'assets/img/employees/samid.jpeg'
      },
      {
        id: 'tm05',
        name: 'Mohammad Arif Khan',
        designation: 'Project Engineer',
        image: 'assets/img/employees/arif.jpeg'
      },
      {
        id: 'tm06',
        name: 'Serajuddin Khan',
        designation: 'Quantity Surveyor & Site Engineer',
        image: 'assets/img/employees/serajuddin.jpeg'
      },
      {
        id: 'tm07',
        name: 'Mohd Kaleem ',
        designation: 'Site Engineer',
        image: 'assets/img/employees/kaleem.jpeg'
      },
      {
        id: 'tm08',
        name: 'Ali Tahir',
        designation: 'Site Engineer',
        image: 'assets/img/employees/ali.jpeg'
      },
      {
        id: 'tm09',
        name: 'Rethal Arabi',
        designation: 'Site Engineer',
        image: 'assets/img/employees/rethal.jpeg'
      },
      {
        id: 'tm010',
        name: 'Mohamed Yoosuf Asan Kani',
        designation: 'Site Engineer',
        image: 'assets/img/employees/yoosuf.jpeg'
      },
      {
        id: 'tm011',
        name: 'Vidhadhar Jangio',
        designation: 'Site Engineer',
        image: 'assets/img/employees/vidhadhar.jpeg'
      },
      {
        id: 'tm012',
        name: 'Mohammad Mustafa Jamil Ahmad',
        designation: 'Site Engineer',
        image: 'assets/img/employees/mustafa.jpeg'
      },
      {
        id: 'tm013',
        name: 'Ayum Kabari Sabila Khatun',
        designation: 'Site Engineer',
        image: 'assets/img/employees/ayyum.jpeg'
      },
      {
        id: 'tm014',
        name: 'Muhammad Asif Muhammad Arshad',
        designation: 'Site Engineer',
        image: 'assets/img/employees/asif.jpeg'
      },
      {
        id: 'tm05',
        name: 'Mohammad Irfan Alam',
        designation: 'Safety Supervisor',
        image: 'assets/img/employees/irfan.jpeg'
      }
    ]
  }
}
