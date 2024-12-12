import {ServiceCard, ServiceCategory, ServiceModel} from '../model/service.model';

export class ServicesUtil {

  public static getAllServices(): ServiceCategory[] {
    return [
      {
        serviceCategoryId: 1,
        serviceCategoryName: 'Constructions',
        image: 'assets/img/website-images/construction.jpg',
        icon: '',
        description: '',
        shortDescription: 'Quality-driven, reliable construction solutions for every project need.',
        serviceSubCategories: ServicesUtil.getConstructionServices(),
      },
      {
        serviceCategoryId: 2,
        serviceCategoryName: 'Maintenance & Operations',
        image: 'assets/img/website-images/maintenance.jpg',
        icon: '',
        description: '',
        shortDescription: 'Reliable upkeep and efficient operations to maximize asset performance.',
        serviceSubCategories: ServicesUtil.getMaintenanceAndOperationServices(),
      },
      {
        serviceCategoryId: 3,
        serviceCategoryName: 'Water Proofing',
        image: 'assets/img/website-images/water-proofing.jpg',
        icon: '',
        description: '',
        shortDescription: 'Protective solutions to safeguard structures from moisture and leaks.',
        serviceSubCategories: ServicesUtil.getWaterProofingServices(),
      }
    ]
  }

  public static getConstructionServices(): ServiceModel[] {
    return [
      {
        serviceId: 0,
        serviceName: 'Electrical Substation Construction',
        serviceIcon: 'ti ti-solar-panel',
        serviceDescription: 'We specialize in the construction of electrical substations, ensuring the safe and efficient\n' +
          '          distribution of electrical power. Our experienced team handles all aspects of substation design,\n' +
          '          installation, and commissioning, adhering to industry standards and regulations.',
        serviceKeyPoints: [
          {keyPoints: 'Design, construction, and maintenance of high-efficiency substations.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Compliance with safety and operational standards for reliable power distribution.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Expertise in testing, commissioning, and preventive maintenance.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Custom substation designs tailored to project-specific power needs.', icon: 'ti ti-solar-panel'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Substation Design',
              serviceIncludeDescription: 'We offer tailored substation designs that meet your project’s power requirements, ensuring both efficiency and reliability.'
            },
            {
              serviceIncludeName: 'Installation and Commissioning',
              serviceIncludeDescription: 'Our team handles the complete installation and commissioning of substations, ensuring they are operational and compliant with local regulations.'
            },
            {
              serviceIncludeName: 'Maintenance and Upgrades',
              serviceIncludeDescription: 'We provide ongoing maintenance and upgrades to ensure that your substation continues to operate at peak performance, minimizing downtime and extending its lifespan.'
            },
            {
              serviceIncludeName: 'Safety Systems',
              serviceIncludeDescription: 'We prioritize safety by integrating protective equipment and automation systems into every substation, ensuring compliance with international safety standards.'
            }
          ],
        images: ['/assets/img/website-images/substation-4.jpg']
      },
      {
        serviceId: 1,
        serviceName: 'Industrial and Commercial Building Construction',
        serviceIcon: 'ti ti-building-factory-2',
        serviceDescription: 'We specialize in delivering top-tier industrial and commercial construction services tailored to meet the needs of various industries.\n' +
          'Our team ensures that each project is built to the highest standards, combining innovation, quality materials, and precision in execution.',
        serviceKeyPoints: [
          {keyPoints: 'Custom construction of durable industrial and commercial buildings.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Expertise in warehouses, factories, office buildings, and retail spaces.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Efficient project management to ensure timely and cost-effective delivery.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Sustainable building practices for long-lasting, eco-friendly structures.', icon: 'ti ti-building-factory-2'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Planning',
              serviceIncludeDescription: 'We work closely with clients to develop building designs that meet both their functional and aesthetic requirements. Our designs incorporate modern technology and sustainability principles.'
            },
            {
              serviceIncludeName: 'Construction Management',
              serviceIncludeDescription: 'We oversee every aspect of the construction process, ensuring that your project is completed on time, within budget, and to the highest standards of quality.'
            },
            {
              serviceIncludeName: 'Safety and Compliance',
              serviceIncludeDescription: 'Our team ensures that all construction projects comply with local building codes and safety regulations, protecting both workers and future occupants.'
            },
            {
              serviceIncludeName: 'Fit-out and Customization',
              serviceIncludeDescription: 'We offer interior fit-out services tailored to your specific business needs, ensuring that your space is optimized for productivity.'
            }
          ],
        images: ['assets/img/website-images/industrial.jpg']
      },
      {
        serviceId: 2,
        serviceName: 'Pre-engineered Steel Buildings',
        serviceIcon: 'ti ti-building-estate',
        serviceDescription: 'Our pre-engineered steel buildings provide a versatile solution for various applications, including\n' +
          'warehouses and industrial facilities. These structures are designed for durability, quick installation,\n' +
          'and cost-effectiveness',
        serviceKeyPoints: [
          {keyPoints:'Cost-effective and durable steel structures for industrial and commercial use.', icon: 'ti ti-building-estate'},
          {keyPoints:'Fast and efficient assembly, reducing construction time and costs.', icon: 'ti ti-building-estate'},
          {keyPoints:'Customizable designs to meet project-specific requirements.', icon: 'ti ti-building-estate'},
          {keyPoints:'Long-lasting, low-maintenance solutions resistant to environmental factors.', icon: 'ti ti-building-estate'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Fabrication',
              serviceIncludeDescription: 'We work with you to design custom pre-engineered steel buildings that meet your specific requirements. Our fabrication process ensures precision and high-quality materials.'
            },
            {
              serviceIncludeName: 'Quick Assembly',
              serviceIncludeDescription: 'Pre-engineered buildings are designed for rapid assembly, minimizing construction time and reducing overall costs.'
            },
            {
              serviceIncludeName: 'Durability and Versatility',
              serviceIncludeDescription: 'Our steel buildings are built to withstand harsh environmental conditions and are versatile enough for a wide range of applications.'
            },
            {
              serviceIncludeName: 'Maintenance and Expansion',
              serviceIncludeDescription: 'We offer maintenance services to keep your steel buildings in top condition and provide options for future expansions as your business grows.'
            }
          ],
        images: ['assets/img/website-images/steel-building.jpg']
      },
      {
        serviceId: 3,
        serviceName: 'Cladding and Glass Solutions',
        serviceIcon: 'ti ti-building',
        serviceDescription: 'we offer comprehensive Cladding and Glass Solutions designed to transform buildings with a modern and sleek look.\n' +
          'Our focus on quality materials like aluminium cladding and glass panels ensures not only aesthetic excellence\n' +
          'but also long-term durability and protection against environmental factors.',
        serviceKeyPoints: [
          {keyPoints: 'Aesthetic cladding systems for enhanced weather protection and insulation.', icon: 'ti ti-building'},
          {keyPoints: 'Sleek glass facades that maximize natural light and energy efficiency.', icon: 'ti ti-building'},
          {keyPoints: 'Customizable designs to meet architectural visions.', icon: 'ti ti-building'},
          {keyPoints: 'Sustainable materials that improve building performance and reduce energy costs.', icon: 'ti ti-building'},
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Cladding Systems',
              serviceIncludeDescription: 'We provide a variety of cladding materials, including metal, stone, and composite panels, that offer both protection and style for your building’s exterior.'
            },
            {
              serviceIncludeName: 'Glass Facades',
              serviceIncludeDescription: 'Our glass facade systems are designed to create striking, light-filled spaces while ensuring energy efficiency and durability.'
            },
            {
              serviceIncludeName: 'Curtain Wall Systems',
              serviceIncludeDescription: 'We specialize in curtain wall systems that combine glass and other materials to create sleek, modern exteriors.'
            },
            {
              serviceIncludeName: 'Maintenance and Repair',
              serviceIncludeDescription: 'In addition to installation, we offer maintenance and repair services to keep your cladding and glass systems looking and performing their best.'
            }
          ],
        images: ['assets/img/website-images/cladding-and-glass.jpg']
      },
      {
        serviceId: 4,
        serviceName: 'Asphalting & Road Works',
        serviceIcon: 'ti ti-backhoe',
        serviceDescription: 'We offer professional asphalting and road work services, ensuring high-quality surface finishes that stand the test of time. Our experienced team is committed to delivering durable solutions for roadways, parking lots, and other essential infrastructures.',
        serviceKeyPoints:
          [
            {keyPoints: 'High-quality paving solutions for roads, parking lots, and other surfaces.', icon: ''},
            {keyPoints: 'Regular maintenance and repair services to extend surface life.', icon: ''},
            {keyPoints: 'Site preparation to ensure optimal asphalting results.', icon: ''},
            {keyPoints: 'Compliance with environmental and sustainability standards.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Paving Solutions',
              serviceIncludeDescription: 'Our asphalting services cover everything from small parking lots to large roadways. We use premium materials and proven techniques to deliver a smooth, durable surface.'
            },
            {
              serviceIncludeName: 'Maintenance Services',
              serviceIncludeDescription: 'We provide regular maintenance and repair services for asphalt surfaces, ensuring they remain in excellent condition and extend their lifespan.'
            },
            {
              serviceIncludeName: 'Site Preparation',
              serviceIncludeDescription: 'Comprehensive site assessments and preparation are critical for successful asphalting. Our team ensures that the site is adequately prepared to achieve optimal results.'
            },
            {
              serviceIncludeName: 'Environmental Compliance',
              serviceIncludeDescription: 'We adhere to local regulations and sustainability practices, ensuring our asphalting processes minimize environmental impact.'
            }
          ],
        images: ['assets/img/website-images/asphalting.jpg']
      },
      {
        serviceId: 5,
        serviceName: 'Security fencing installation & general work',
        serviceIcon: 'ti ti-shield-lock',
        serviceDescription: 'Our comprehensive security fencing installation services safeguard your construction site while enhancing site organization. We offer custom solutions tailored to your needs, ensuring your project remains secure and well-structured.',
        serviceKeyPoints:
          [
            {keyPoints: 'Custom fencing solutions for enhanced site security and access control.', icon: ''},
            {keyPoints: 'Comprehensive site organization services to maximize safety and efficiency.', icon: ''},
            {keyPoints: 'Ongoing maintenance to ensure fencing systems remain effective.\n', icon: ''},
            {keyPoints: 'Expertise in access control systems to manage site entry and exit.\n', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Custom Fencing Solutions',
              serviceIncludeDescription: 'We offer a range of fencing options, including chain-link, barbed wire, and decorative fencing, tailored to fit the unique requirements of your site. Our team will assess your security needs and recommend the best solution.'
            },
            {
              serviceIncludeName: 'Site Organization',
              serviceIncludeDescription: 'Effective organization of your construction site is essential for productivity and safety. We help plan and implement site layouts that optimize space usage while maintaining safety and security.'
            },
            {
              serviceIncludeName: 'Maintenance Services',
              serviceIncludeDescription: 'We provide ongoing maintenance for installed fencing systems, ensuring they remain secure and effective throughout your project’s duration.'
            },
            {
              serviceIncludeName: 'Access Control',
              serviceIncludeDescription: 'We implement access control measures, including gates and entry systems, to manage who can enter and exit your site. This ensures that only authorized personnel have access to critical areas.'
            },
            {
              serviceIncludeName: 'Consultation and Planning',
              serviceIncludeDescription: 'Our experienced team offers consultation services to assess your security needs and develop a comprehensive plan tailored to your project.'
            }
          ],
        images: ['assets/img/website-images/fencing.jpg']
      },
      {
        serviceId: 6,
        serviceName: 'Concrete repair and Rehabilitation',
        serviceIcon: 'ti ti-geometry',
        serviceDescription: 'At Yousef Saleh Yousef, we specialize in concrete repair and rehabilitation services that extend the lifespan of your structures. Our expert team utilizes advanced techniques to restore integrity and functionality, ensuring safety and durability.',
        serviceKeyPoints:
          [
            {keyPoints: 'Expert crack repair and surface restoration for damaged concrete.', icon: ''},
            {keyPoints: 'Reinforcement solutions to improve load-bearing capacity.', icon: ''},
            {keyPoints: 'Preventive maintenance strategies to extend the lifespan of structures.', icon: ''},
            {keyPoints: 'Consultation services to develop tailored rehabilitation plans.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Crack Repair',
              serviceIncludeDescription: 'We utilize specialized techniques to address cracks and surface imperfections, preventing further deterioration and restoring structural integrity.'
            },
            {
              serviceIncludeName: 'Surface Restoration',
              serviceIncludeDescription: 'Our team employs advanced methods to restore the appearance and durability of concrete surfaces, enhancing both aesthetics and functionality.'
            },
            {
              serviceIncludeName: 'Reinforcement',
              serviceIncludeDescription: 'We provide reinforcement solutions that improve the load-bearing capacity of your structures, ensuring they meet safety standards and regulations.'
            },
            {
              serviceIncludeName: 'Preventive Maintenance',
              serviceIncludeDescription: 'Our preventive maintenance strategies are designed to prolong the lifespan of your concrete structures, reducing the need for costly repairs in the future.'
            }
          ],
        images: ['assets/img/website-images/concrete.jpg']
      },
      {
        serviceId: 7,
        serviceName: 'Electro Mechanical Works',
        serviceIcon: 'ti ti-solar-electricity',
        serviceDescription: 'We specialize in electromechanical works that integrate electrical and mechanical systems for efficient, sustainable solutions. Our skilled team ensures reliable installation and maintenance, enhancing the performance of your infrastructure.',
        serviceKeyPoints:
          [
            {keyPoints: 'Comprehensive solutions for HVAC, electrical, and plumbing systems.', icon: ''},
            {keyPoints: 'Integration of automation and safety systems for optimized performance.', icon: ''},
            {keyPoints: 'Expert installation and maintenance services to ensure reliability.', icon: ''},
            {keyPoints: 'Energy-efficient designs and compliance with international standards.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'HVAC Systems',
              serviceIncludeDescription: 'We design and install energy-efficient heating, ventilation, and air conditioning systems that enhance comfort and air quality in your buildings. Our approach ensures compliance with local regulations and international standards.'
            },
            {
              serviceIncludeName: 'Electrical Installations',
              serviceIncludeDescription: 'Our comprehensive electrical services cover everything from wiring and lighting design to power distribution and backup systems. We prioritize safety and efficiency, ensuring that all installations are carried out by qualified professionals.'
            },
            {
              serviceIncludeName: 'Plumbing Solutions',
              serviceIncludeDescription: 'We provide reliable plumbing services that include the installation and maintenance of pipes, fixtures, and drainage systems. Our focus is on ensuring a steady supply of water while effectively managing waste.'
            },
            {
              serviceIncludeName: 'Safety Systems',
              serviceIncludeDescription: 'Safety is our top priority. We integrate advanced fire alarm systems, surveillance, and safety measures into your projects, ensuring the protection of both personnel and property.'
            },
            {
              serviceIncludeName: 'Automation',
              serviceIncludeDescription: 'We specialize in smart building solutions, implementing automation and control systems that optimize energy consumption and enhance operational efficiency.'
            }
          ],
        images: ['assets/img/website-images/electro-mech.jpg']
      },
      {
        serviceId: 8,
        serviceName: 'Portable office & Accomodation',
        serviceIcon: 'ti ti-building-skyscraper',
        serviceDescription: 'We provide innovative portable office and accommodation solutions designed for the construction industry. Our mobile structures offer comfort and functionality, ensuring your team has a productive workspace and restful living quarters on-site.',
        serviceKeyPoints:
          [
            {keyPoints: 'Quick and efficient setup of fully equipped portable offices.', icon: ''},
            {keyPoints: 'Comfortable, furnished accommodation units for workers on long-term projects.', icon: ''},
            {keyPoints: 'Customizable designs to meet specific project requirements.', icon: ''},
            {keyPoints: 'Built for sustainability with eco-friendly materials and energy-efficient systems.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Portable Office Units',
              serviceIncludeDescription: 'Our portable offices are equipped with essential amenities, including furniture, internet access, and climate control. They are designed for ease of setup and relocation, making them perfect for temporary job sites.'
            },
            {
              serviceIncludeName: 'Accommodation Units',
              serviceIncludeDescription: 'Our comfortable living quarters offer a homely atmosphere for workers on long-term projects. Each unit is furnished and equipped with essential utilities, ensuring a restful stay for your team.'
            },
            {
              serviceIncludeName: 'Custom Solutions',
              serviceIncludeDescription: 'We understand that every project has unique requirements. Our team works closely with you to customize units according to your specifications, including layout, size, and features.'
            },
            {
              serviceIncludeName: 'Rapid Deployment',
              serviceIncludeDescription: 'We pride ourselves on our ability to deliver and set up portable offices and accommodation units quickly, minimizing disruption to your project timeline.'
            },
            {
              serviceIncludeName: 'Sustainability',
              serviceIncludeDescription: 'Our portable solutions are built with eco-friendly materials and energy-efficient designs to reduce your project\'s environmental impact. We are committed to promoting sustainability in all our offerings.'
            }
          ],
        images: ['assets/img/website-images/portable-office.jpg']
      },
    ]
  }

  public static getMaintenanceAndOperationServices(): ServiceModel[] {
    return [
      {
        serviceId: 0,
        serviceName: 'Civil Maintenance',
        serviceIcon: 'ti ti-solar-electricity',
        serviceDescription: 'Civil Maintenance we offer expert civil maintenance services to ensure the longevity and functionality of your structures. Our services include repair, renovation, and upkeep of buildings, roads, and infrastructure, covering concrete works, masonry, painting, and more. We prioritize quality, safety, and efficiency to keep your assets in top condition.',
        serviceKeyPoints:
          [
            {keyPoints: 'Structural repairs for buildings and infrastructure.', icon: ''},
            {keyPoints: 'Masonry, concrete works, and surface finishing.', icon: ''},
            {keyPoints: 'Painting and waterproofing solutions.', icon: ''},
            {keyPoints: 'Road and pavement maintenance.', icon: ''},
            {keyPoints: 'Renovation and refurbishment of old structures.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Building Repairs and Renovations',
              serviceIncludeDescription: 'Structural repair for damaged buildings.\n' +
                'Renovation and refurbishment of residential and commercial properties.\n'
            },
            {
              serviceIncludeName: 'Masonry and Concrete Work',
              serviceIncludeDescription: 'Repair and maintenance of walls, floors, and foundations.\n' +
                'Concrete restoration for durability and longevity.\n'
            },
            {
              serviceIncludeName: 'Painting and Finishing',
              serviceIncludeDescription: 'Interior and exterior painting services\n' +
                'Surface preparation and decorative finishes.\n'
            },
            {
              serviceIncludeName: 'Waterproofing Solutions',
              serviceIncludeDescription: 'Prevention and repair of water leaks\n' +
                'Roof, wall, and basement waterproofing.\n'
            },
            {
              serviceIncludeName: 'Road and Pavement Maintenance',
              serviceIncludeDescription: 'Repair and resurfacing of roads, pathways, and driveways.\n' +
                'Maintenance of concrete and asphalt surfaces.\n'
            },
            {
              serviceIncludeName: 'Periodic Inspections and Preventive Maintenance',
              serviceIncludeDescription: 'Regular assessments to identify potential issues.\n' +
              'Maintenance plans to extend the life of structures.'
            }
          ],
        images: ['assets/img/website-images/civil-maintenance.jpeg'],
      },
      {
        serviceId: 1,
        serviceName: 'Electrical Maintenance',
        serviceIcon: 'ti ti-solar-electricity',
        serviceDescription: 'We provide reliable electrical maintenance services to ensure the safety and efficiency of your electrical systems. Our expertise includes troubleshooting, repairs, upgrades, and preventive care for wiring, lighting, panels, and equipment. We deliver solutions that prioritize safety, compliance, and uninterrupted performance.',
        serviceKeyPoints:
          [
            {keyPoints: 'Repair and replacement of electrical components.', icon: ''},
            {keyPoints: 'Maintenance of wiring, panels, and breakers.', icon: ''},
            {keyPoints: 'Troubleshooting and diagnostics for power systems.', icon: ''},
            {keyPoints: 'Lighting installation and maintenance.', icon: ''},
            {keyPoints: 'Preventive care to avoid electrical faults.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Wiring and Cabling Maintenance',
              serviceIncludeDescription: 'Inspection and repair of electrical wiring.Replacement of damaged cables and connectors.'
            },
            {
              serviceIncludeName: 'Panel and Circuit Maintenance',
              serviceIncludeDescription: 'Servicing of electrical panels, circuit breakers, and fuses.Troubleshooting and resolving power distribution issues.'
            },
            {
              serviceIncludeName: 'Lighting Solutions',
              serviceIncludeDescription: 'Installation and maintenance of lighting systems.Repair and replacement of indoor and outdoor lighting.'
            },
            {
              serviceIncludeName: 'Power Systems Maintenance',
              serviceIncludeDescription: 'Servicing generators, transformers, and UPS systems.Load balancing and power quality improvement.'
            },
            {
              serviceIncludeName: 'Troubleshooting and Diagnostics',
              serviceIncludeDescription: 'Identifying and fixing electrical faults and malfunctions.Using advanced tools for performance monitoring.'
            },
            {
              serviceIncludeName: 'Preventive Maintenance',
              serviceIncludeDescription: 'Scheduled inspections to avoid system failures.Testing and calibration of electrical systems.'
            },
            {
              serviceIncludeName: 'Safety and Compliance',
              serviceIncludeDescription: 'Ensuring systems meet regulatory and safety standards. Electrical hazard assessments and mitigation.'
            }
          ],
        images: ['assets/img/website-images/electrical-maintenance.jpeg']
      },
      {
        serviceId: 2,
        serviceName: 'Electro-Mechanical Maintenance',
        serviceIcon: 'ti ti-solar-electricity',
        serviceDescription: 'We specialize in electromechanical maintenance services, ensuring seamless operation of systems integrating electrical and mechanical components. From motors and pumps to control panels and HVAC systems, we provide inspections, repairs, and preventive care to maintain efficiency, reliability, and safety.',
        serviceKeyPoints:
          [
            {keyPoints: 'Maintenance and repair of motors, pumps, and generators.', icon: ''},
            {keyPoints: 'Servicing HVAC systems for reliable performance.', icon: ''},
            {keyPoints: 'Troubleshooting automated systems and controls.', icon: ''},
            {keyPoints: 'Calibration and optimization of sensors and actuators.', icon: ''},
            {keyPoints: 'Inspection and servicing of hydraulic and pneumatic systems.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'HVAC System Maintenance',
              serviceIncludeDescription: 'Regular servicing and cleaning of heating, ventilation, and air conditioning systems.Troubleshooting and repair of mechanical and electrical components.'
            },
            {
              serviceIncludeName: 'Motor and Pump Maintenance',
              serviceIncludeDescription: 'Inspection, repair, and replacement of motors and pumps.Bearing lubrication and alignment adjustments.'
            },
            {
              serviceIncludeName: 'Control System Maintenance',
              serviceIncludeDescription: 'Calibration and testing of automated control systems, such as PLCs (Programmable Logic Controllers).Troubleshooting issues with sensors and actuators.'
            },
            {
              serviceIncludeName: 'Generator Maintenance',
              serviceIncludeDescription: 'Routine servicing, testing, and maintenance of generators and power systems.Load testing and fuel system checks.'
            },
            {
              serviceIncludeName: 'Hydraulic and Pneumatic System Maintenance',
              serviceIncludeDescription: 'Repair and maintenance of hydraulic and pneumatic equipment.Inspection of hoses, valves, and pumps for leaks and wear.'
            },
            {
              serviceIncludeName: 'Predictive Maintenance',
              serviceIncludeDescription: 'Using vibration analysis, thermography, and other tools to predict failures.Monitoring system performance to prevent breakdowns.'
            },
            {
              serviceIncludeName: 'Safety Inspections',
              serviceIncludeDescription: 'Ensuring electromechanical systems comply with safety regulations.Conducting risk assessments and implementing safety measures.'
            }
          ],
        images: ['assets/img/website-images/electro-m-1.jpg']
      }
    ]
  }

  public static getWaterProofingServices(): ServiceModel[] {
    return [
      {
        serviceId: 0,
        serviceName: 'Waterproofing and Insulation Services',
        serviceIcon: 'ti ti-beach',
        serviceDescription: 'We provide comprehensive waterproofing and insulation services to protect your structures\n' +
          'from moisture damage and improve energy efficiency',
        serviceKeyPoints: [
          {keyPoints: 'Advanced waterproofing solutions for roofs, walls, and basements.', icon: ''},
          {keyPoints: 'Thermal insulation services to improve energy efficiency and comfort.', icon: ''},
          {keyPoints: 'Moisture control systems to prevent mold and dampness.', icon: ''},
          {keyPoints: 'Custom solutions designed to protect buildings from environmental damage.', icon: ''},
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Roof and Wall Waterproofing',
              serviceIncludeDescription: 'We apply advanced waterproofing membranes to protect roofs, walls, and basements from water infiltration, ensuring your building remains dry and secure.'
            },
            {
              serviceIncludeName: 'Roof Insulation',
              serviceIncludeDescription: 'Our insulation services ensure that your building is energy-efficient, keeping interiors comfortable and reducing heating and cooling costs.'
            },
            {
              serviceIncludeName: 'Moisture Control Solutions',
              serviceIncludeDescription: 'We offer moisture management systems that prevent mold and dampness, enhancing the health and safety of your buildings.'
            },
            {
              serviceIncludeName: 'Thermal Insulation',
              serviceIncludeDescription: 'We install high-performance thermal insulation systems that enhance energy efficiency while reducing environmental impact.'
            },

          ],
        images: ['assets/img/website-images/water-proofing.jpeg']
      }
    ]
  }

  public static getServiceSubCategory(): ServiceModel[] {
    return [
      {
        serviceId: 0,
        serviceName: 'Electrical Substation Construction',
        serviceIcon: 'ti ti-solar-panel',
        serviceDescription: 'We specialize in the construction of electrical substations, ensuring the safe and efficient\n' +
          '          distribution of electrical power. Our experienced team handles all aspects of substation design,\n' +
          '          installation, and commissioning, adhering to industry standards and regulations.',
        serviceKeyPoints: [
          {keyPoints: 'Design, construction, and maintenance of high-efficiency substations.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Compliance with safety and operational standards for reliable power distribution.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Expertise in testing, commissioning, and preventive maintenance.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Custom substation designs tailored to project-specific power needs.', icon: 'ti ti-solar-panel'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Substation Design',
              serviceIncludeDescription: 'We offer tailored substation designs that meet your project’s power requirements, ensuring both efficiency and reliability.'
            },
            {
              serviceIncludeName: 'Installation and Commissioning',
              serviceIncludeDescription: 'Our team handles the complete installation and commissioning of substations, ensuring they are operational and compliant with local regulations.'
            },
            {
              serviceIncludeName: 'Maintenance and Upgrades',
              serviceIncludeDescription: 'We provide ongoing maintenance and upgrades to ensure that your substation continues to operate at peak performance, minimizing downtime and extending its lifespan.'
            },
            {
              serviceIncludeName: 'Safety Systems',
              serviceIncludeDescription: 'We prioritize safety by integrating protective equipment and automation systems into every substation, ensuring compliance with international safety standards.'
            }
          ],
        images: ['assets/img/website-images/electric-substation.jpg']
      },
      {
        serviceId: 1,
        serviceName: 'Industrial and Commercial Building Construction',
        serviceIcon: 'ti ti-building-factory-2',
        serviceDescription: 'We specialize in delivering top-tier industrial and commercial construction services tailored to meet the needs of various industries.\n' +
          'Our team ensures that each project is built to the highest standards, combining innovation, quality materials, and precision in execution.',
        serviceKeyPoints: [
          {keyPoints: 'Custom construction of durable industrial and commercial buildings.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Expertise in warehouses, factories, office buildings, and retail spaces.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Efficient project management to ensure timely and cost-effective delivery.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Sustainable building practices for long-lasting, eco-friendly structures.', icon: 'ti ti-building-factory-2'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Planning',
              serviceIncludeDescription: 'We work closely with clients to develop building designs that meet both their functional and aesthetic requirements. Our designs incorporate modern technology and sustainability principles.'
            },
            {
              serviceIncludeName: 'Construction Management',
              serviceIncludeDescription: 'We oversee every aspect of the construction process, ensuring that your project is completed on time, within budget, and to the highest standards of quality.'
            },
            {
              serviceIncludeName: 'Safety and Compliance',
              serviceIncludeDescription: 'Our team ensures that all construction projects comply with local building codes and safety regulations, protecting both workers and future occupants.'
            },
            {
              serviceIncludeName: 'Fit-out and Customization',
              serviceIncludeDescription: 'We offer interior fit-out services tailored to your specific business needs, ensuring that your space is optimized for productivity.'
            }
          ],
        images: ['assets/img/website-images/industrial.jpg']
      },
      {
        serviceId: 2,
        serviceName: 'Residential Building Construction',
        serviceIcon: 'ti ti-home-check',
        serviceDescription: 'We construct high-quality residential buildings, including single-family homes, apartments, and \n' +
          'villas. Our commitment to excellence ensures that every project is completed on time and meets\n' +
          'the unique preferences of our clients.',
        serviceKeyPoints: [
          {keyPoints: 'Custom home design and construction tailored to client preferences.', icon: 'ti ti-home-check'},
          {keyPoints: 'Expertise in multi-unit residential complexes and apartment buildings.', icon: 'ti ti-home-check'},
          {keyPoints: 'Sustainable materials and energy-efficient systems for modern living.', icon: 'ti ti-home-check'},
          {keyPoints: 'Focus on combining aesthetics with functionality for high-quality homes.', icon: 'ti ti-home-check'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Custom Home Design',
              serviceIncludeDescription: 'We work closely with homeowners to create personalized home designs that reflect their vision and lifestyle, incorporating modern conveniences and sustainable practices.'
            },
            {
              serviceIncludeName: 'Construction Management',
              serviceIncludeDescription: 'Our team manages the entire construction process, ensuring timely completion and attention to detail at every stage.'
            },
            {
              serviceIncludeName: 'Sustainable Building Practices',
              serviceIncludeDescription: 'We integrate eco-friendly materials and energy-efficient technologies into our builds, helping homeowners reduce their environmental footprint.'
            },
            {
              serviceIncludeName: 'Renovation and Remodeling',
              serviceIncludeDescription: 'We also offer renovation and remodeling services to upgrade existing homes, ensuring they meet modern standards of comfort and efficiency.'
            },

          ],
        images: ['assets/img/website-images/residential-cons.jpg']
      },
      {
        serviceId: 3,
        serviceName: 'Pre-engineered Steel Buildings',
        serviceIcon: 'ti ti-building-estate',
        serviceDescription: 'Our pre-engineered steel buildings provide a versatile solution for various applications, including\n' +
          'warehouses and industrial facilities. These structures are designed for durability, quick installation,\n' +
          'and cost-effectiveness',
        serviceKeyPoints: [
          {keyPoints:'Cost-effective and durable steel structures for industrial and commercial use.', icon: 'ti ti-building-estate'},
          {keyPoints:'Fast and efficient assembly, reducing construction time and costs.', icon: 'ti ti-building-estate'},
          {keyPoints:'Customizable designs to meet project-specific requirements.', icon: 'ti ti-building-estate'},
          {keyPoints:'Long-lasting, low-maintenance solutions resistant to environmental factors.', icon: 'ti ti-building-estate'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Fabrication',
              serviceIncludeDescription: 'We work with you to design custom pre-engineered steel buildings that meet your specific requirements. Our fabrication process ensures precision and high-quality materials.'
            },
            {
              serviceIncludeName: 'Quick Assembly',
              serviceIncludeDescription: 'Pre-engineered buildings are designed for rapid assembly, minimizing construction time and reducing overall costs.'
            },
            {
              serviceIncludeName: 'Durability and Versatility',
              serviceIncludeDescription: 'Our steel buildings are built to withstand harsh environmental conditions and are versatile enough for a wide range of applications.'
            },
            {
              serviceIncludeName: 'Maintenance and Expansion',
              serviceIncludeDescription: 'We offer maintenance services to keep your steel buildings in top condition and provide options for future expansions as your business grows.'
            }
          ],
        images: ['assets/img/website-images/steel-building.jpg']
      },
      {
        serviceId: 4,
        serviceName: 'Cladding and Glass Solutions',
        serviceIcon: 'ti ti-building',
        serviceDescription: 'we offer comprehensive Cladding and Glass Solutions designed to transform buildings with a modern and sleek look.\n' +
          'Our focus on quality materials like aluminium cladding and glass panels ensures not only aesthetic excellence\n' +
          'but also long-term durability and protection against environmental factors.',
        serviceKeyPoints: [
          {keyPoints: 'Aesthetic cladding systems for enhanced weather protection and insulation.', icon: 'ti ti-building'},
          {keyPoints: 'Sleek glass facades that maximize natural light and energy efficiency.', icon: 'ti ti-building'},
          {keyPoints: 'Customizable designs to meet architectural visions.', icon: 'ti ti-building'},
          {keyPoints: 'Sustainable materials that improve building performance and reduce energy costs.', icon: 'ti ti-building'},
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Cladding Systems',
              serviceIncludeDescription: 'We provide a variety of cladding materials, including metal, stone, and composite panels, that offer both protection and style for your building’s exterior.'
            },
            {
              serviceIncludeName: 'Glass Facades',
              serviceIncludeDescription: 'Our glass facade systems are designed to create striking, light-filled spaces while ensuring energy efficiency and durability.'
            },
            {
              serviceIncludeName: 'Curtain Wall Systems',
              serviceIncludeDescription: 'We specialize in curtain wall systems that combine glass and other materials to create sleek, modern exteriors.'
            },
            {
              serviceIncludeName: 'Maintenance and Repair',
              serviceIncludeDescription: 'In addition to installation, we offer maintenance and repair services to keep your cladding and glass systems looking and performing their best.'
            }
          ],
        images: ['assets/img/website-images/cladding-and-glass.jpg']
      },
      {
        serviceId: 5,
        serviceName: 'Waterproofing and Insulation Services',
        serviceIcon: 'ti ti-beach',
        serviceDescription: 'We provide comprehensive waterproofing and insulation services to protect your structures\n' +
          'from moisture damage and improve energy efficiency',
        serviceKeyPoints: [
          {keyPoints: 'Advanced waterproofing solutions for roofs, walls, and basements.', icon: ''},
          {keyPoints: 'Thermal insulation services to improve energy efficiency and comfort.', icon: ''},
          {keyPoints: 'Moisture control systems to prevent mold and dampness.', icon: ''},
          {keyPoints: 'Custom solutions designed to protect buildings from environmental damage.', icon: ''},
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Roof and Wall Waterproofing',
              serviceIncludeDescription: 'We apply advanced waterproofing membranes to protect roofs, walls, and basements from water infiltration, ensuring your building remains dry and secure.'
            },
            {
              serviceIncludeName: 'Roof Insulation',
              serviceIncludeDescription: 'Our insulation services ensure that your building is energy-efficient, keeping interiors comfortable and reducing heating and cooling costs.'
            },
            {
              serviceIncludeName: 'Moisture Control Solutions',
              serviceIncludeDescription: 'We offer moisture management systems that prevent mold and dampness, enhancing the health and safety of your buildings.'
            },
            {
              serviceIncludeName: 'Thermal Insulation',
              serviceIncludeDescription: 'We install high-performance thermal insulation systems that enhance energy efficiency while reducing environmental impact.'
            },

          ],
        images: ['assets/img/website-images/water-proofing.jpeg']
      },
      {
        serviceId: 6,
        serviceName: 'Electro Mechanical Works',
        serviceIcon: 'ti ti-solar-electricity',
        serviceDescription: 'We specialize in electromechanical works that integrate electrical and mechanical systems for efficient, sustainable solutions. Our skilled team ensures reliable installation and maintenance, enhancing the performance of your infrastructure.',
        serviceKeyPoints:
          [
            {keyPoints: 'Comprehensive solutions for HVAC, electrical, and plumbing systems.', icon: ''},
            {keyPoints: 'Integration of automation and safety systems for optimized performance.', icon: ''},
            {keyPoints: 'Expert installation and maintenance services to ensure reliability.', icon: ''},
            {keyPoints: 'Energy-efficient designs and compliance with international standards.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'HVAC Systems',
              serviceIncludeDescription: 'We design and install energy-efficient heating, ventilation, and air conditioning systems that enhance comfort and air quality in your buildings. Our approach ensures compliance with local regulations and international standards.'
            },
            {
              serviceIncludeName: 'Electrical Installations',
              serviceIncludeDescription: 'Our comprehensive electrical services cover everything from wiring and lighting design to power distribution and backup systems. We prioritize safety and efficiency, ensuring that all installations are carried out by qualified professionals.'
            },
            {
              serviceIncludeName: 'Plumbing Solutions',
              serviceIncludeDescription: 'We provide reliable plumbing services that include the installation and maintenance of pipes, fixtures, and drainage systems. Our focus is on ensuring a steady supply of water while effectively managing waste.'
            },
            {
              serviceIncludeName: 'Safety Systems',
              serviceIncludeDescription: 'Safety is our top priority. We integrate advanced fire alarm systems, surveillance, and safety measures into your projects, ensuring the protection of both personnel and property.'
            },
            {
              serviceIncludeName: 'Automation',
              serviceIncludeDescription: 'We specialize in smart building solutions, implementing automation and control systems that optimize energy consumption and enhance operational efficiency.'
            }
          ],
        images: ['assets/img/website-images/electro-mech.jpg']
      },
      {
        serviceId: 7,
        serviceName: 'Portable office & Accomodation',
        serviceIcon: 'ti ti-building-skyscraper',
        serviceDescription: 'We provide innovative portable office and accommodation solutions designed for the construction industry. Our mobile structures offer comfort and functionality, ensuring your team has a productive workspace and restful living quarters on-site.',
        serviceKeyPoints:
          [
            {keyPoints: 'Quick and efficient setup of fully equipped portable offices.', icon: ''},
            {keyPoints: 'Comfortable, furnished accommodation units for workers on long-term projects.', icon: ''},
            {keyPoints: 'Customizable designs to meet specific project requirements.', icon: ''},
            {keyPoints: 'Built for sustainability with eco-friendly materials and energy-efficient systems.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Portable Office Units',
              serviceIncludeDescription: 'Our portable offices are equipped with essential amenities, including furniture, internet access, and climate control. They are designed for ease of setup and relocation, making them perfect for temporary job sites.'
            },
            {
              serviceIncludeName: 'Accommodation Units',
              serviceIncludeDescription: 'Our comfortable living quarters offer a homely atmosphere for workers on long-term projects. Each unit is furnished and equipped with essential utilities, ensuring a restful stay for your team.'
            },
            {
              serviceIncludeName: 'Custom Solutions',
              serviceIncludeDescription: 'We understand that every project has unique requirements. Our team works closely with you to customize units according to your specifications, including layout, size, and features.'
            },
            {
              serviceIncludeName: 'Rapid Deployment',
              serviceIncludeDescription: 'We pride ourselves on our ability to deliver and set up portable offices and accommodation units quickly, minimizing disruption to your project timeline.'
            },
            {
              serviceIncludeName: 'Sustainability',
              serviceIncludeDescription: 'Our portable solutions are built with eco-friendly materials and energy-efficient designs to reduce your project\'s environmental impact. We are committed to promoting sustainability in all our offerings.'
            }
          ],
        images: ['assets/img/website-images/portable-office.jpg']
      },
      {
        serviceId: 8,
        serviceName: 'Security fencing installation & general work',
        serviceIcon: 'ti ti-shield-lock',
        serviceDescription: 'Our comprehensive security fencing installation services safeguard your construction site while enhancing site organization. We offer custom solutions tailored to your needs, ensuring your project remains secure and well-structured.',
        serviceKeyPoints:
          [
            {keyPoints: 'Custom fencing solutions for enhanced site security and access control.', icon: ''},
            {keyPoints: 'Comprehensive site organization services to maximize safety and efficiency.', icon: ''},
            {keyPoints: 'Ongoing maintenance to ensure fencing systems remain effective.\n', icon: ''},
            {keyPoints: 'Expertise in access control systems to manage site entry and exit.\n', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Custom Fencing Solutions',
              serviceIncludeDescription: 'We offer a range of fencing options, including chain-link, barbed wire, and decorative fencing, tailored to fit the unique requirements of your site. Our team will assess your security needs and recommend the best solution.'
            },
            {
              serviceIncludeName: 'Site Organization',
              serviceIncludeDescription: 'Effective organization of your construction site is essential for productivity and safety. We help plan and implement site layouts that optimize space usage while maintaining safety and security.'
            },
            {
              serviceIncludeName: 'Maintenance Services',
              serviceIncludeDescription: 'We provide ongoing maintenance for installed fencing systems, ensuring they remain secure and effective throughout your project’s duration.'
            },
            {
              serviceIncludeName: 'Access Control',
              serviceIncludeDescription: 'We implement access control measures, including gates and entry systems, to manage who can enter and exit your site. This ensures that only authorized personnel have access to critical areas.'
            },
            {
              serviceIncludeName: 'Consultation and Planning',
              serviceIncludeDescription: 'Our experienced team offers consultation services to assess your security needs and develop a comprehensive plan tailored to your project.'
            }
          ],
        images: ['assets/img/website-images/fencing.jpg']
      },
      {
        serviceId: 9,
        serviceName: 'Concrete repair and Rehabilitation',
        serviceIcon: 'ti ti-geometry',
        serviceDescription: 'At Yousef Saleh Yousef, we specialize in concrete repair and rehabilitation services that extend the lifespan of your structures. Our expert team utilizes advanced techniques to restore integrity and functionality, ensuring safety and durability.',
        serviceKeyPoints:
          [
            {keyPoints: 'Expert crack repair and surface restoration for damaged concrete.', icon: ''},
            {keyPoints: 'Reinforcement solutions to improve load-bearing capacity.', icon: ''},
            {keyPoints: 'Preventive maintenance strategies to extend the lifespan of structures.', icon: ''},
            {keyPoints: 'Consultation services to develop tailored rehabilitation plans.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Crack Repair',
              serviceIncludeDescription: 'We utilize specialized techniques to address cracks and surface imperfections, preventing further deterioration and restoring structural integrity.'
            },
            {
              serviceIncludeName: 'Surface Restoration',
              serviceIncludeDescription: 'Our team employs advanced methods to restore the appearance and durability of concrete surfaces, enhancing both aesthetics and functionality.'
            },
            {
              serviceIncludeName: 'Reinforcement',
              serviceIncludeDescription: 'We provide reinforcement solutions that improve the load-bearing capacity of your structures, ensuring they meet safety standards and regulations.'
            },
            {
              serviceIncludeName: 'Preventive Maintenance',
              serviceIncludeDescription: 'Our preventive maintenance strategies are designed to prolong the lifespan of your concrete structures, reducing the need for costly repairs in the future.'
            }
          ],
        images: ['assets/img/website-images/concrete.jpg']
      },
      {
        serviceId: 10,
        serviceName: 'Asphalting & Road Works',
        serviceIcon: 'ti ti-backhoe',
        serviceDescription: 'We offer professional asphalting and road work services, ensuring high-quality surface finishes that stand the test of time. Our experienced team is committed to delivering durable solutions for roadways, parking lots, and other essential infrastructures.',
        serviceKeyPoints:
          [
            {keyPoints: 'High-quality paving solutions for roads, parking lots, and other surfaces.', icon: ''},
            {keyPoints: 'Regular maintenance and repair services to extend surface life.', icon: ''},
            {keyPoints: 'Site preparation to ensure optimal asphalting results.', icon: ''},
            {keyPoints: 'Compliance with environmental and sustainability standards.', icon: ''},
          ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Paving Solutions',
              serviceIncludeDescription: 'Our asphalting services cover everything from small parking lots to large roadways. We use premium materials and proven techniques to deliver a smooth, durable surface.'
            },
            {
              serviceIncludeName: 'Maintenance Services',
              serviceIncludeDescription: 'We provide regular maintenance and repair services for asphalt surfaces, ensuring they remain in excellent condition and extend their lifespan.'
            },
            {
              serviceIncludeName: 'Site Preparation',
              serviceIncludeDescription: 'Comprehensive site assessments and preparation are critical for successful asphalting. Our team ensures that the site is adequately prepared to achieve optimal results.'
            },
            {
              serviceIncludeName: 'Environmental Compliance',
              serviceIncludeDescription: 'We adhere to local regulations and sustainability practices, ensuring our asphalting processes minimize environmental impact.'
            }
          ],
        images: ['assets/img/website-images/asphalting.jpg']
      }
    ]
  }

  public static getServiceCardData(): ServiceCard[] {
    return [
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      },
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      },
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      },
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      },
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      },
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      },
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      },
      {
        heading: 'Quasi eaque omnis',
        subHeading:
          'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
      }
    ]
  }
}
