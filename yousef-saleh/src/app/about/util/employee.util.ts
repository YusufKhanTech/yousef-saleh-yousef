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
          '        Yousef Saleh Yousef possesses a rich and diversified presence in the field of Construction and Infrastructure sectors especially at Eastern Provence Dammam and kingdom of Saudi Arabia.\n' +
          '        Finally, I assure you that Yousef Saleh Yousef will re-dedicate itself towards its commitments and strive for continuous growth.',
        image:'/assets/img/employees/al-dossary.jpg',
        keyPoints: []
      },
      {
        id: 'em002',
        name: 'Yousef Saleh Al Dossary',
        designation: 'Chairman',
        alignment: EmployeeAlignment.RIGHT,
        description: 'At Yousef Saleh Yousef Contracting & Establishment (YSY), our foundation is built on trust, excellence, and innovation. With strong values and a commitment to integrity, we continue to grow and evolve, ensuring a sustainable and prosperous future for our company and stakeholders.',
        image: '/assets/img/employees/yousef.png',
        keyPoints: [
          {id: 'ek001', value: 'Committed to delivering exceptional services with integrity and innovation.'},
          {id: 'ek002', value: 'Prioritizing safety, efficiency, and satisfaction in every project.'},
          {id: 'ek003', value: 'Dedicated to setting industry standards and uplifting communities.'}
        ]
      },
      {
        id: 'em003',
        name: 'Khalifa Al Dossary',
        designation:'Vice Chairman',
        alignment: EmployeeAlignment.LEFT,
        description: 'YSY stands for integrity, dedication, and progress. Our success is driven by strong leadership, a skilled workforce, and an unwavering commitment to excellence. We believe in fostering a culture of trust and collaboration, ensuring long-term success and meaningful contributions to region.',
        image:'/assets/img/employees/khalifa.jpeg',
        keyPoints: [
          {id: 'ek001', value: 'Driving operational excellence and ensuring timely, high-quality project delivery.'},
          {id: 'ek002', value: 'Upholding integrity, transparency, and fostering strong client and partner relationships.'},
          {id: 'ek003', value: 'Committed to overcoming challenges and contributing to Saudi Arabia\'s development.'}
        ]
      },
      {
        id: 'em004',
        name: 'Shamsuddin Khan',
        designation:'General Manager',
        alignment: EmployeeAlignment.RIGHT,
        description: 'As General Manager of Yousef Saleh Yousef Contracting and Establishment, I am focused on driving operational excellence and ensuring that every project is completed to the highest standards of quality and efficiency. Our team is dedicated to delivering exceptional results, prioritizing client satisfaction, and maintaining the integrity of our work. Through careful planning, collaboration, and a commitment to continuous improvement, we are committed to achieving sustainable growth and success for the organization.',
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
        id: 'emp01',
        name: 'Afifi Farag',
        designation: 'Financial Advisor',
        image: 'assets/img/employees/afifi.jpeg'
      },
      {
        id: 'emp02',
        name: 'Yehia Ali',
        designation: 'HR Manager',
        image: 'assets/img/employees/yahya.jpeg'
      },
      {
        id: 'emp03',
        name: 'Mohammad Arif Khan',
        designation: 'Project Engineer',
        image: 'assets/img/employees/arif.jpeg'
      }
    ]
  }
}
