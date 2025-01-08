import { ServiceCategory, ServiceModel } from '../model/service.model';

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
        image: '/assets/img/website-images/substation-4.jpg',
        satisfiedClientCount: 112,
        completedProjectCount: 120,
        description: 'We provide end-to-end electrical substation construction services, including design, equipment installation, grounding, and testing. We ensure efficient power distribution with safe, reliable, and compliant solutions tailored to your project needs.',
        keyPoints: [
          {keyPoints: 'Custom design and engineering for optimized power distribution.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Installation of transformers, switchgear, and protective equipment.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Grounding and lightning protection systems.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Testing and commissioning for operational reliability.', icon: 'ti ti-solar-panel'},
          {keyPoints: 'Integration of automation and control systems like SCADA.', icon: 'ti ti-solar-panel'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Engineering',
              serviceIncludeDescription: 'Detailed substation layouts and power system design. Load analysis and capacity planning for optimal performance.'
            },
            {
              serviceIncludeName: 'Civil Works',
              serviceIncludeDescription: 'Site preparation, foundation construction, and fencing. Building control rooms and supporting structures.'
            },
            {
              serviceIncludeName: 'Equipment Installation',
              serviceIncludeDescription: 'Setup of transformers, switchgear, and circuit breakers. Installation of busbars, isolators, and relays.'
            },
            {
              serviceIncludeName: 'Cable and Wiring',
              serviceIncludeDescription: 'High-voltage cable laying and termination. Connection of control and communication systems.'
            },
            {
              serviceIncludeName: 'Grounding and Lightning Protection',
              serviceIncludeDescription: 'Installation of grounding grids and safety systems. Implementation of lightning arrestors.'
            },
            {
              serviceIncludeName: 'Testing and Commissioning',
              serviceIncludeDescription: 'Comprehensive testing of electrical systems. Ensuring operational safety, reliability, and compliance.'
            },
            {
              serviceIncludeName: 'Automation and Control Integration',
              serviceIncludeDescription: 'SCADA system setup for monitoring and control. Installation of protection relays and automation equipment.'
            },
            {
              serviceIncludeName: 'Maintenance and Upgrades',
              serviceIncludeDescription: 'Routine maintenance for long-term reliability. Upgrading substations to meet evolving power needs.'
            }
          ],
      },
      {
        serviceId: 1,
        serviceName: 'Industrial and Commercial Building Construction',
        serviceIcon: 'ti ti-building-factory-2',
        image: '/assets/img/website-images/industrial-s.jpg',
        satisfiedClientCount: 322,
        completedProjectCount: 320,
        description: 'We deliver top-notch industrial and commercial building construction services, offering innovative designs, quality construction, and timely project delivery tailored to your business needs.',
        keyPoints: [
          {keyPoints: 'Customized design and planning for industrial and commercial spaces.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'High-quality construction using durable materials.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Integration of modern facilities and sustainable practices.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Compliance with safety and regulatory standards.', icon: 'ti ti-building-factory-2'},
          {keyPoints: 'Timely completion and cost-effective solutions.', icon: 'ti ti-building-factory-2'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Planning',
              serviceIncludeDescription: 'Architectural design tailored to industrial and commercial needs. Structural engineering and space optimization planning.'
            },
            {
              serviceIncludeName: 'Site Preparation and Earthworks',
              serviceIncludeDescription: 'Site clearing, grading, and excavation. Foundation construction and soil stabilization.'
            },
            {
              serviceIncludeName: 'Structural Construction',
              serviceIncludeDescription: 'Steel, concrete, and prefabricated structure construction. Erection of industrial warehouses, factories, and office spaces.'
            },
            {
              serviceIncludeName: 'Mechanical, Electrical, and Plumbing (MEP) Services',
              serviceIncludeDescription: 'Installation of HVAC systems, electrical wiring, and plumbing. Integration of fire safety systems and utilities.'
            },
            {
              serviceIncludeName: 'Interior and Exterior Finishing',
              serviceIncludeDescription: 'Flooring, painting, and ceiling installation. Facade design and landscaping for commercial appeal.'
            },
            {
              serviceIncludeName: 'Specialized Facilities',
              serviceIncludeDescription: 'Construction of loading bays, storage areas, and workshops. Integration of advanced automation systems for industrial buildings.'
            },
            {
              serviceIncludeName: 'Safety and Regulatory Compliance',
              serviceIncludeDescription: 'Ensuring adherence to local building codes and industry standards. Implementing advanced safety measures during and after construction.'
            },
            {
              serviceIncludeName: 'Project Management and Delivery',
              serviceIncludeDescription: 'End-to-end project management for seamless execution. On-time delivery with adherence to budget constraints.'
            }
          ],
      },
      {
        serviceId: 2,
        serviceName: 'Pre-engineered Steel Buildings',
        serviceIcon: 'ti ti-building-estate',
        image: '/assets/img/website-images/steel-s.jpg',
        satisfiedClientCount: 222,
        completedProjectCount: 150,
        description: 'We specialize in constructing durable, cost-effective, and customizable pre-engineered steel buildings, offering efficient solutions for industrial, commercial, and agricultural projects.',
        keyPoints: [
          {keyPoints:'Cost-effective and quick to construct compared to traditional methods.', icon: 'ti ti-building-estate'},
          {keyPoints:'Fully customizable design for diverse applications.', icon: 'ti ti-building-estate'},
          {keyPoints:'High durability with corrosion-resistant materials.', icon: 'ti ti-building-estate'},
          {keyPoints:'Environmentally friendly and energy-efficient solutions.', icon: 'ti ti-building-estate'},
          {keyPoints:'Low maintenance requirements with long-lasting performance.', icon: 'ti ti-building-estate'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Engineering',
              serviceIncludeDescription: 'Customized design based on client specifications. Structural analysis and optimization for durability and efficiency.'
            },
            {
              serviceIncludeName: 'Fabrication and Material Supply',
              serviceIncludeDescription: 'High-quality steel fabrication for all building components. Supply of pre-engineered materials like frames, panels, and fasteners.'
            },
            {
              serviceIncludeName: 'Site Preparation and Foundation Construction',
              serviceIncludeDescription: 'Ground leveling, excavation, and foundation installation. Ensuring a stable base for steel structures.'
            },
            {
              serviceIncludeName: 'Steel Frame Erection',
              serviceIncludeDescription: 'Assembly and installation of pre-fabricated steel frames. Accurate alignment for structural integrity.'
            },
            {
              serviceIncludeName: 'Wall and Roof Installation',
              serviceIncludeDescription: 'Installation of insulated panels, cladding, and roofing systems. Weatherproofing for enhanced durability and energy efficiency.'
            },
            {
              serviceIncludeName: 'Integration of Facilities',
              serviceIncludeDescription: 'Adding features like mezzanine floors, ventilation, and lighting. Space optimization for industrial, commercial, or agricultural use.'
            },
            {
              serviceIncludeName: 'Maintenance and Repairs',
              serviceIncludeDescription: 'Periodic inspections and preventive maintenance services. Repair and replacement of damaged components.'
            },
            {
              serviceIncludeName: 'Project Management',
              serviceIncludeDescription: 'End-to-end management for timely and efficient project completion. Coordination of all construction phases, ensuring quality and safety.'
            }
          ],
      },
      {
        serviceId: 3,
        serviceName: 'Cladding and Glass Solutions',
        serviceIcon: 'ti ti-building',
        image: '/assets/img/website-images/glass-s.jpg',
        satisfiedClientCount: 112,
        completedProjectCount: 120,
        description: 'We provide advanced cladding and glass solutions, offering durable, aesthetically pleasing, and energy-efficient designs tailored to enhance the appearance and performance of buildings.',
        keyPoints: [
          {keyPoints: 'Aesthetic enhancement with modern and sleek designs.', icon: 'ti ti-building'},
          {keyPoints: 'Improved energy efficiency through thermal insulation and glazing.', icon: 'ti ti-building'},
          {keyPoints: 'Durable and weather-resistant materials for long-term performance.', icon: 'ti ti-building'},
          {keyPoints: 'Customizable options to suit architectural requirements.', icon: 'ti ti-building'},
          {keyPoints: 'Ensures compliance with safety and building standards.', icon: 'ti ti-building'}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Consultation',
              serviceIncludeDescription: 'Customized cladding and glass design based on architectural needs. Expert consultation on material selection and finishes.'
            },
            {
              serviceIncludeName: 'Cladding Installation',
              serviceIncludeDescription: 'Installation of aluminum, composite, stone, or metal cladding. Weatherproofing and sealing to ensure durability.'
            },
            {
              serviceIncludeName: 'Glass Facade Installation',
              serviceIncludeDescription: 'Installation of energy-efficient glazing systems. Curtain walls, frameless glass facades, and structural glazing.'
            },
            {
              serviceIncludeName: 'Insulation and Thermal Efficiency',
              serviceIncludeDescription: 'Integration of thermal insulation for energy efficiency. Double-glazing and low-emissivity glass options.'
            },
            {
              serviceIncludeName: 'Skylights and Specialized Glass Structures',
              serviceIncludeDescription: 'Installation of skylights, canopies, and glass partitions. Design and construction of unique glass architectural features.'
            },
            {
              serviceIncludeName: 'Maintenance and Repairs',
              serviceIncludeDescription: 'Cleaning, polishing, and sealing services for glass and cladding. Repair and replacement of damaged panels or glass.'
            },
            {
              serviceIncludeName: 'Safety and Compliance',
              serviceIncludeDescription: 'Installation of fire-rated glass and cladding systems. Ensuring compliance with building codes and safety standards.'
            },
            {
              serviceIncludeName: 'Project Management',
              serviceIncludeDescription: 'End-to-end management for seamless execution of cladding and glass projects. Coordination between design, fabrication, and installation teams.'
            }
          ],
      },
      {
        serviceId: 4,
        serviceName: 'Asphalting & Road Works',
        serviceIcon: 'ti ti-backhoe',
        image: '/assets/img/website-images/asphalting-s.jpg',
        satisfiedClientCount: 112,
        completedProjectCount: 120,
        description: 'We deliver professional asphalting and road construction services, providing durable, high-quality roads and pavements with a focus on safety, efficiency, and long-lasting performance.',
        keyPoints: [
          {keyPoints: 'Comprehensive road construction, from planning to completion.', icon: ''},
          {keyPoints: 'Durable asphalting solutions for high-traffic areas.', icon: ''},
          {keyPoints: 'Expertise in paving, resurfacing, and maintenance.', icon: ''},
          {keyPoints: 'Use of high-quality materials to ensure longevity.', icon: ''},
          {keyPoints: 'Adherence to safety and regulatory standards.', icon: ''},
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Road Design and Planning',
              serviceIncludeDescription: 'Surveying and engineering design for road layouts. Traffic flow analysis and drainage system integration.'
            },
            {
              serviceIncludeName: 'Site Preparation',
              serviceIncludeDescription: 'Clearing, excavation, and grading for road foundations. Soil stabilization and base course construction.'
            },
            {
              serviceIncludeName: 'Asphalting and Paving',
              serviceIncludeDescription: 'Laying high-quality asphalt for roads, driveways, and parking lots. Precision paving to ensure smooth, even surfaces.'
            },
            {
              serviceIncludeName: 'Road Resurfacing and Repairs',
              serviceIncludeDescription: 'Asphalt resurfacing to extend the lifespan of existing roads. Pothole repair, crack sealing, and overlay services.'
            },
            {
              serviceIncludeName: 'Markings and Signage Installation',
              serviceIncludeDescription: 'Road line markings and safety signs for traffic management. Installation of reflective markers for enhanced visibility.'
            },
            {
              serviceIncludeName: 'Drainage and Utility Integration',
              serviceIncludeDescription: 'Construction of drainage systems to prevent waterlogging. Coordination of road construction with utility installations.'
            },
            {
              serviceIncludeName: 'Maintenance Services',
              serviceIncludeDescription: 'Regular maintenance of roads and pavements. Inspections and timely repairs to ensure durability.'
            },
            {
            serviceIncludeName: 'Specialized Road Works',
            serviceIncludeDescription: 'Construction of walkways, cycle paths, and speed humps. Asphalt solutions for industrial and commercial areas.'
          },
          ],
      },
      {
        serviceId: 5,
        serviceName: 'Security fencing installation & general work',
        serviceIcon: 'ti ti-shield-lock',
        image: 'assets/img/website-images/fencing.jpg',
        satisfiedClientCount: 912,
        completedProjectCount: 820,
        description: 'We specialize in the installation of high-quality security fencing, providing reliable and durable solutions for property protection. Our services include designing, installing, and maintaining security fences to ensure maximum safety and privacy.',
        keyPoints: [
          {keyPoints: 'Customizable security fence solutions for residential, commercial, and industrial properties.', icon: ''},
          {keyPoints: 'Use of durable, high-quality materials for enhanced security.', icon: ''},
          {keyPoints: 'Installation of various types of fences, including chain link, barbed wire, and wrought iron.', icon: ''},
          {keyPoints: 'Integration of gates, access control systems, and surveillance features.', icon: ''},
          {keyPoints: 'Focus on safety, privacy, and long-lasting performance.', icon: ''}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Design and Consultation',
              serviceIncludeDescription: 'Customized fence design based on property requirements. Expert consultation to recommend the best materials and styles.'
            },
            {
              serviceIncludeName: 'Installation of Security Fencing',
              serviceIncludeDescription: 'Installation of chain link, mesh, barbed wire, or wrought iron fences. Secure placement for residential, commercial, and industrial properties.'
            },
            {
              serviceIncludeName: 'Gates and Access Control Systems',
              serviceIncludeDescription: 'Installation of automated or manual gates for restricted access. Integration of access control systems such as keypads, card readers, or biometric systems.'
            },
            {
              serviceIncludeName: 'Surveillance and Security Features',
              serviceIncludeDescription: 'Installation of surveillance cameras and motion detectors. Integration of lighting systems for added visibility and security.'
            },
            {
              serviceIncludeName: 'Maintenance and Repairs',
              serviceIncludeDescription: 'Regular maintenance services to ensure the integrity of the fence. Repair services for damaged or deteriorated security fences.'
            },
            {
              serviceIncludeName: 'Site Preparation and Groundworks',
              serviceIncludeDescription: 'Land clearing and excavation for proper fence installation. Soil and foundation preparation for fence stability.'
            },
            {
              serviceIncludeName: 'Specialized Security Solutions',
              serviceIncludeDescription: 'Installation of anti-climb fences, electric fences, and other specialized security measures. Solutions for perimeter security, private properties, and high-risk areas.'
            }
          ],
      },
      {
        serviceId: 6,
        serviceName: 'Concrete repair and Rehabilitation',
        serviceIcon: 'ti ti-geometry',
        image: '/assets/img/website-images/concrete-s.jpg',
        satisfiedClientCount: 612,
        completedProjectCount: 220,
        description: 'We offer expert concrete repair and rehabilitation services, ensuring the restoration of structural integrity and extending the lifespan of concrete structures. Our solutions address cracks, corrosion, and deterioration, enhancing durability and safety.',
        keyPoints: [
          {keyPoints: 'Expertise in repairing damaged concrete structures.', icon: ''},
          {keyPoints: 'Solutions for cracks, surface wear, and structural issues.', icon: ''},
          {keyPoints: 'Use of advanced materials and techniques for durable repairs.', icon: ''},
          {keyPoints: 'Restoration of concrete’s aesthetic and functional properties.', icon: ''},
          {keyPoints: 'Compliance with safety and regulatory standards for long-lasting results.', icon: ''},
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Crack Repair and Sealing',
              serviceIncludeDescription: 'Identification and sealing of surface cracks in concrete. Use of injection techniques and epoxy resins for long-lasting results.'
            },
            {
              serviceIncludeName: 'Concrete Surface Restoration',
              serviceIncludeDescription: 'Surface cleaning, resurfacing, and retexturing. Application of protective coatings to prevent further damage.'
            },
            {
              serviceIncludeName: 'Corrosion Protection',
              serviceIncludeDescription: 'Treatment of reinforcement corrosion with specialized coatings and inhibitors. Cathodic protection systems to prevent future corrosion.'
            },
            {
              serviceIncludeName: 'Structural Strengthening and Reinforcement',
              serviceIncludeDescription: 'Reinforcement using carbon fiber, steel plates, or other materials. Strengthening of beams, columns, and foundations.'
            },
            {
              serviceIncludeName: 'Concrete Jacketing',
              serviceIncludeDescription: 'Application of additional concrete layers to enhance structural load-bearing capacity. Suitable for columns, beams, and structural elements.'
            },
            {
              serviceIncludeName: 'Waterproofing and Moisture Control',
              serviceIncludeDescription: 'Installation of waterproof membranes to prevent water penetration. Moisture barrier solutions to protect against water damage.'
            },
            {
              serviceIncludeName: 'Foundation and Basement Repair',
              serviceIncludeDescription: 'Repair of damaged foundations and basement walls. Stabilization of settling or shifting foundations.'
            },
            {
              serviceIncludeName: 'Evaluation and Inspection',
              serviceIncludeDescription: 'Thorough inspection to assess the extent of damage. Detailed evaluation reports and recommendations for repairs.'
            }
          ],
      },
      {
        serviceId: 7,
        serviceName: 'Electro Mechanical Works',
        serviceIcon: 'ti ti-solar-electricity',
        image: 'assets/img/website-images/electro-m-1.jpg',
        satisfiedClientCount: 112,
        completedProjectCount: 120,
        description: 'We specialize in electro-mechanical works, providing integrated solutions for electrical and mechanical systems in industrial, commercial, and residential projects. Our services include the installation, maintenance, and repair of advanced electrical and mechanical systems to ensure smooth and efficient operations.',
        keyPoints: [
          {keyPoints: 'Integration of electrical and mechanical systems for optimal performance.', icon: ''},
          {keyPoints: 'Expertise in designing, installing, and maintaining complex systems.', icon: ''},
          {keyPoints: 'Focus on energy efficiency, safety, and system longevity.', icon: ''},
          {keyPoints: 'Specialized solutions for a wide range of industries..', icon: ''},
          {keyPoints: 'Skilled team providing reliable, high-quality services for diverse projects..', icon: ''}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Electrical System Installation',
              serviceIncludeDescription: 'Installation of power distribution systems, electrical panels, and wiring. Setup of lighting, control systems, and energy-efficient solutions.'
            },
            {
              serviceIncludeName: 'Mechanical System Installation',
              serviceIncludeDescription: 'Installation of HVAC (Heating, Ventilation, and Air Conditioning) systems. Plumbing, piping, and mechanical equipment installation for buildings and industrial setups.'
            },
            {
              serviceIncludeName: 'Maintenance and Repairs',
              serviceIncludeDescription: 'Routine maintenance of electrical and mechanical systems. Emergency repairs and troubleshooting to ensure system reliability.'
            },
            {
              serviceIncludeName: 'Automation and Control Systems',
              serviceIncludeDescription: 'Installation of automated systems for energy management and operational efficiency. Integration of sensors, controllers, and monitoring systems.'
            },
            {
              serviceIncludeName: 'Power Generation and Distribution',
              serviceIncludeDescription: 'Installation of backup generators, transformers, and switchgears. Management of power distribution networks for consistent electricity supply.'
            },
            {
              serviceIncludeName: 'Pump and Valve Installation',
              serviceIncludeDescription: 'Installation of pumps and valve systems for water, fluid, and gas control. Maintenance and repair of pumping stations and associated equipment.'
            },
            {
              serviceIncludeName: 'Fire Fighting and Safety Systems',
              serviceIncludeDescription: 'Installation of fire alarm systems, sprinklers, and extinguishers. Integration of safety systems, including emergency lighting and exit signage.'
            },
            {
              serviceIncludeName: 'Testing and Commissioning',
              serviceIncludeDescription: 'Thorough testing of electrical and mechanical systems to ensure proper functionality. Commissioning services for new installations to meet operational standards.'
            }
          ],
      },
      {
        serviceId: 8,
        serviceName: 'Portable office & Accommodation',
        serviceIcon: 'ti ti-building-skyscraper',
        image: 'assets/img/website-images/portable-s.jpg',
        satisfiedClientCount: 112,
        completedProjectCount: 120,
        description: 'We offer high-quality portable office and accommodation solutions designed for temporary or mobile use. These units provide a cost-effective, flexible, and comfortable alternative for on-site offices, worker accommodations, or remote project locations.',
        keyPoints: [
          {keyPoints: 'Customizable portable units for office and living spaces.', icon: ''},
          {keyPoints: 'Quick setup and relocation for temporary needs.', icon: ''},
          {keyPoints: 'Energy-efficient and well-insulated for comfort.', icon: ''},
          {keyPoints: 'Flexible design options to suit project requirements.', icon: ''},
          {keyPoints: 'Durable and secure structures for various industries and applications.', icon: ''},
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Portable Office Design and Setup',
              serviceIncludeDescription: 'Design and setup of temporary office spaces with necessary facilities. Custom layouts to include workstations, meeting rooms, and storage.'
            },
            {
              serviceIncludeName: 'Worker Accommodation Units',
              serviceIncludeDescription: 'Provision of portable accommodation for workers, with sleeping quarters, sanitation, and common areas. Fully furnished and equipped for comfort and privacy.'
            },
            {
              serviceIncludeName: 'Mobile Units for Remote Locations',
              serviceIncludeDescription: 'Setup of mobile offices and accommodations for projects in remote or construction sites. Includes integrated systems such as electricity, water, and waste management.'
            },
            {
              serviceIncludeName: 'Modular Units',
              serviceIncludeDescription: 'Modular designs for scalable solutions, allowing easy expansion or reconfiguration. Units can be stacked or joined to create larger spaces.'
            },
            {
              serviceIncludeName: 'Utility and Support Systems',
              serviceIncludeDescription: 'Installation of power, water, HVAC (heating, ventilation, air conditioning), and waste management systems. Solar-powered and energy-efficient options available for sustainable solutions.'
            },
            {
              serviceIncludeName: 'Transportation and Relocation',
              serviceIncludeDescription: 'Delivery and transportation of portable units to project sites. Quick relocation services for changing site requirements.'
            },
            {
              serviceIncludeName: 'Maintenance and Repairs',
              serviceIncludeDescription: 'Routine maintenance of portable office and accommodation units. Repairs and upgrades as necessary to maintain functionality and comfort.'
            },
            {
              serviceIncludeName: 'Customization and Branding',
              serviceIncludeDescription: 'Customization of units with company logos, colors, and specific design features. Optional additions such as furniture, IT infrastructure, and communication systems.'
            }
          ],
      },
    ]
  }

  public static getMaintenanceAndOperationServices(): ServiceModel[] {
    return [
      {
        serviceId: 0,
        serviceName: 'Civil Maintenance',
        serviceIcon: 'ti ti-solar-electricity',
        image: 'assets/img/website-images/civil-maintenance.jpeg',
        satisfiedClientCount: 112,
        completedProjectCount: 120,
        description: 'Civil Maintenance we offer expert civil maintenance services to ensure the longevity and functionality of your structures. Our services include repair, renovation, and upkeep of buildings, roads, and infrastructure, covering concrete works, masonry, painting, and more. We prioritize quality, safety, and efficiency to keep your assets in top condition.',
        keyPoints: [
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
      },
      {
        serviceId: 1,
        serviceName: 'Electrical Maintenance',
        serviceIcon: 'ti ti-solar-electricity',
        image: 'assets/img/website-images/electrical-maintenance.jpeg',
        satisfiedClientCount: 112,
        completedProjectCount: 120,
        description: 'We provide reliable electrical maintenance services to ensure the safety and efficiency of your electrical systems. Our expertise includes troubleshooting, repairs, upgrades, and preventive care for wiring, lighting, panels, and equipment. We deliver solutions that prioritize safety, compliance, and uninterrupted performance.',
        keyPoints: [
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
      },
      {
        serviceId: 2,
        serviceName: 'Electro-Mechanical Maintenance',
        serviceIcon: 'ti ti-solar-electricity',
        image: 'assets/img/website-images/electro-m-1.jpg',
        satisfiedClientCount: 412,
        completedProjectCount: 520,
        description: 'We specialize in electromechanical maintenance services, ensuring seamless operation of systems integrating electrical and mechanical components. From motors and pumps to control panels and HVAC systems, we provide inspections, repairs, and preventive care to maintain efficiency, reliability, and safety.',
        keyPoints: [
          {keyPoints: 'Maintenance and repair of motors, pumps, and generators.', icon: ''},
          {keyPoints: 'Servicing HVAC systems for reliable performance.', icon: ''},
          {keyPoints: 'Troubleshooting automated systems and controls.', icon: ''},
          {keyPoints: 'Calibration and optimization of sensors and actuators.', icon: ''},
          {keyPoints: 'Inspection and servicing of hydraulic and pneumatic systems.', icon: ''}
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
      }
    ]
  }

  public static getWaterProofingServices(): ServiceModel[] {
    return [
      {
        serviceId: 0,
        serviceName: 'Waterproofing and Insulation Services',
        serviceIcon: 'ti ti-beach',
        image: 'assets/img/website-images/water-proofing.jpeg',
        satisfiedClientCount: 312,
        completedProjectCount: 420,
        description: 'We offer professional waterproofing and insulation services to protect buildings from water damage and ensure energy efficiency. Our services help extend the lifespan of structures by preventing moisture infiltration and improving thermal comfort.',
        keyPoints: [
          {keyPoints: 'Expert solutions for preventing water damage and moisture penetration.', icon: ''},
          {keyPoints: 'Energy-efficient insulation for temperature control and cost savings.', icon: ''},
          {keyPoints: 'Comprehensive protection for roofs, basements, foundations, and walls.', icon: ''},
          {keyPoints: 'Use of advanced materials and techniques for long-lasting results.', icon: ''},
          {keyPoints: 'Enhancing building durability and comfort.', icon: ''}
        ],
        serviceIncludes:
          [
            {
              serviceIncludeName: 'Roof Waterproofing',
              serviceIncludeDescription: 'Installation of protective coatings and membranes to prevent leaks. Solutions for flat, pitched, and sloped roofs to protect from rain and humidity.'
            },
            {
              serviceIncludeName: 'Basement Waterproofing',
              serviceIncludeDescription: 'Waterproofing of basement walls and floors to prevent water seepage. Installation of drainage systems and vapor barriers for added protection.'
            },
            {
              serviceIncludeName: 'Foundation Waterproofing',
              serviceIncludeDescription: 'Treatment of foundation walls and surfaces to block water ingress. Installation of exterior and interior drainage systems to manage water flow.'
            },
            {
              serviceIncludeName: 'Wall and Surface Waterproofing',
              serviceIncludeDescription: 'Application of sealants, coatings, and membranes for external and internal walls. Protection against moisture, mold, and mildew buildup.'
            },
            {
              serviceIncludeName: 'Thermal Insulation',
              serviceIncludeDescription: 'Installation of insulation materials to improve thermal efficiency. Solutions for walls, ceilings, floors, and roofs to reduce energy costs.'
            },
            {
              serviceIncludeName: 'Pipe and Plumbing Insulation',
              serviceIncludeDescription: 'Insulation for water pipes, HVAC ducts, and plumbing systems to prevent energy loss.Protection against freezing in colder climates.'
            },
            {
              serviceIncludeName: 'Sound Insulation',
              serviceIncludeDescription: 'Installation of soundproofing materials to reduce noise pollution. Effective insulation for walls, floors, and ceilings to improve acoustic comfort.'
            },{
              serviceIncludeName: 'Moisture and Dampness Control',
              serviceIncludeDescription: 'Damp-proofing treatment for areas prone to excess moisture. Solutions for moisture control in commercial and residential properties.'
            },{
              serviceIncludeName: 'Insulation for Industrial and Commercial Projects',
              serviceIncludeDescription: 'Customized insulation solutions for warehouses, factories, and office buildings. High-performance materials for energy efficiency and temperature regulation.'
            },

          ],
      }
    ]
  }
}
