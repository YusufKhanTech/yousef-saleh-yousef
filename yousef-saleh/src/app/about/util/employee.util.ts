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
        description: 'As Chairman of Yousef Saleh Yousef Contracting and Establishment, I am proud to lead an organization known for quality, integrity, and professionalism. Our commitment to delivering exceptional services and innovative solutions is at the core of our success. We prioritize safety, efficiency, and customer satisfaction in every project. Together with our dedicated team, we continue to set the standard for excellence and build a brighter future for our communities.',
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
        description: 'As Vice Chairman, I am honored to help steer Yousef Saleh Yousef Contracting and Establishment’s strategic direction. Our focus is on operational excellence, timely project delivery, and maintaining high-quality standards. We are committed to integrity, transparency, and building strong relationships with clients and partners. With a forward-looking approach, we are prepared to navigate future challenges and contribute to the development of Saudi Arabia.',
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
        id: 'tm01',
        name: 'Afifi Farag',
        designation: 'Financial Advisor',
        image: 'assets/img/employees/afifi.jpeg'
      },
      {
        id: 'tm02',
        name: 'Emad Mohamed',
        designation: 'HR',
        image: 'assets/img/employees/emad.jpeg'
      },
      {
        id: 'tm05',
        name: 'Mohammad Arif Khan',
        designation: 'Project Engineer',
        image: 'assets/img/employees/arif.jpeg'
      }
    ]
  }
}
