export interface SubService {
  title: string;
  description: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  image: string;
  compareImage?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  subServices: SubService[];
  benefitsTitle?: string;
  benefits?: Benefit[];
  showGallery?: boolean;
}

export const servicesData: ServiceData[] = [
  {
    slug: "engine-transmission",
    title: "Engine & Transmission",
    subtitle: "Advanced internal repairs engineered for reliability and long-term efficiency. ",
    heroImage: "/services/engineHero.webp",
    subServices: [
      {
        title: "Mechanical Repairs",
        description: "Comprehensive diagnostics to identify root-level issues, followed by precise corrective repairs. Our engineers use advanced tools and global-standard processes to ensure accuracy, durability, and dependable performance.",
        image: "/services/engineservice1.webp",
      },
      {
        title: "Engine Overhaul",
        description: "A complete internal rebuild of the engine, covering critical components such as pistons, crankshaft, valves, and sealing systems. Every element is carefully inspected, repaired, or replaced to restore original factory performance, efficiency, and long-term reliability. ",
        image: "/services/engineservice2.webp",
      },
      {
        title: "Transmission Overhaul",
        description: "Detailed gearbox reconstruction carried out with precise calibration and tolerance settings. This ensures smooth gear transitions, optimal power transfer, and consistent performance under all driving conditions.  ",
        image: "/services/engineservice3.webp",
      },
    ],
    benefitsTitle: "Benefits & Values",
    benefits: [
      {
        title: "Precision Engineering ",
        description: "Every component is calibrated to exact tolerances for optimal performance.",
        image: "/services/enginebenifit1.webp",
      },
      {
        title: "Faster Turnaround",
        description: "Eliminates dependency on external workshops, ensuring quicker delivery.",
        image: "/services/enginebenifit-before1.png",
        compareImage: "/services/enginebenifit-after1.png",
      },
      {
        title: "Advanced Diagnostics",
        description: "Modern tools help identify root issues accurately, reducing repeat failures.",
        image: "/services/enginebenifit3.webp",
      },
      {
        title: "Performance Restoration",
        description: "Restores original power, smoothness, and driving confidence.",
        image: "/services/enginebenifit4.webp",
      },
    ],
  },
  {
    slug: "brakes-ac-suspension",
    title: "Brakes, Suspension & AC",
    subtitle: "Advanced internal repairs engineered for reliability and long-term efficiency.",
    heroImage: "/services/brakesHero.webp",
    subServices: [
      {
        title: "Brake Service & Upgrades",
        description: "Complete inspection and restoration of braking components, including pads, discs, and hydraulic systems. Ensures precise stopping power, enhanced safety, and consistent performance across all driving conditions.",
        image: "/services/brakeservice1.webp",
      },
      {
        title: "Suspension Repairs",
        description: "Detailed rebuilding of suspension systems, including shocks, struts, and linkages, to restore stability, ride comfort, and handling precision for a balanced driving experience.",
        image: "/services/brakeservice2.webp",
      },
      {
        title: "AC System Repairs",
        description: "Advanced diagnostics and optimization of the air conditioning system, ensuring efficient cooling, consistent airflow, and reliable performance suited for coastal climates.",
        image: "/services/brakeservice3.webp",
      },
    ],
    benefitsTitle: "Benefits & Values ",
    benefits: [
      {
        title: "Precision Tuned",
        description: "Every component is calibrated to exact tolerances for optimal performance.",
        image: "/services/brakebenifit1.webp",
      },
      {
        title: "Better Handling Control",
        description: "Optimized systems provide precise steering and road grip.",
        image: "/services/brakebenifit2.webp",
      },
      {
        title: "Enhanced Safety",
        description: "Reliable braking systems ensure confident stopping in all conditions.",
        image: "/services/brakebenifit3.webp",
      },
      {
        title: "Improved Ride Comfort",
        description: "Suspension restoration delivers a smoother and more stable drive.",
        image: "/services/brakebenifit4.webp",
      },
    ],
  },
  {
    slug: "vehicle-body-accident-repairs",
    title: "Body & Accident Repairs",
    subtitle: "Precision repairs that bring your vehicle back to factory standards.",
    heroImage: "/services/accidentHero.webp",
    subServices: [
      {
        title: "Accident Repairs",
        description: "Chassis straightening, dent removal, and panel reconstruction to exact original specifications.",
        image: "/services/accidentservice1.webp",
      },
      {
        title: "Denting & Alignment",
        description: "Precision bodywork combined with accurate chassis alignment to reinstate original geometry, panel fitment, and overall structural balance.",
        image: "/services/accidentservice2.webp",
      }
   
    ],
    benefitsTitle: "Benefits & Values ",
    benefits: [
      {
        title: "Chassis Accuracy",
        description: "Restores vehicle frame strength and maintains correct alignment geometry.",
        image: "/services/accidentbenifit1.webp",
      },
      {
        title: "Invisible Repair",
        description: "Repairs are completed with seamless panel fit and refined detailing.",
        image: "/services/accidentbenifit2.webp",
      },
      {
        title: "Corrosion Protection",
        description: "Critical systems are restored to ensure safe driving conditions.",
        image: "/services/accidentbenifit3.webp",
      },
      {
        title: "Certified Technicians",
        description: "All work is handled under one roof for better quality control.",
        image: "/services/accidentbenifit4.webp",
      },
    ],
  },
  {
    slug: "paint-exterior-care",
    title: "Long-Term Paint Protection",
    subtitle: "Protects against UV rays, dirt, and environmental contaminants.",
    heroImage: "/services/paintHero.webp",
    subServices: [
      {
        title: "Enhanced Visual Appeal",
        description: "Maintains a premium look for your car that stands out on the road.",
        image: "/services/paintservice1.webp",
      },
      {
        title: "Ceramic Detailing",
        description: "Advanced protective coating solutions that enhance gloss, provide long-term surface protection, and shield your vehicle against environmental damage, contaminants, and wear.",
        image: "/services/paintservice2.webp",
      },
  
    ],
    benefitsTitle: "Benefits & Values ",
    benefits: [
      {
        title: "Long-Term Paint Protection",
        description: "Maintains a premium look for your car that stands out on the road.",
         image: "/services/washedcarbefore.png",
        compareImage: "/services/washedcarafter.png",
      },
      {
        title: "Enhanced Visual Appeal",
        description: "9H hardness ceramic protection resistant to UV rays and environmental fallout.",
        image: "/services/redcarbefore.png",
        compareImage: "/services/redcarafter.png",
      },
      {
        title: "Surface Durability",
        description: "Adds an extra layer of protection against minor scratches and wear.",
        image: "/services/paintbenifit3.webp",
      },
      {
        title: "Color Accuracy",
        description: "Ensures perfect paint matching for a uniform finish.",
        image: "/services/paintbenifit4.webp",
      },
    ],
  },
  {
    slug: "performance-upgrades",
    title: "Performance & Upgrades",
    subtitle: "Modern upgrades designed to improve power, efficiency, and overall driving experience.",
    heroImage: "/services/perfomanceHero.webp",
    subServices: [
      {
        title: "Programming & Tuning",
        description: "Advanced ECU calibration and software optimization to enhance engine performance, fuel efficiency, and throttle responsiveness, tailored to your vehicle’s specifications.",
        image: "/services/perfomanceservice1.webp",
      },
      {
        title: "Vehicle Facelifts & Modifications",
        description: "Comprehensive upgrades that transform older models with updated styling, refined components, and modern design elements, enhancing both visual appeal and road presence.",
        image: "/services/perfomanceservice2.webp",
      }
    ],
    benefitsTitle: "Benefits & Values ",
    benefits: [
      {
        title: "Refined Dynamics",
        description: "Better vehicle responsiveness with improved control and stability.",
        image: "/services/perfomancebenifit1.webp",
      },
      {
        title: "Custom Driving Experience",
        description: "Tuning is tailored to match your driving style and vehicle requirements.",
        image: "/services/perfomancebenifit2.webp",
      }
    ],
  },
  {
    slug: "customer-support",
    title: "Customer Support Services",
    subtitle: "Reliable assistance designed for convenience, continuity, and peace of mind.",
    heroImage: "/services/customerHero.webp",
    subServices: [
      {
        title: "Free Pickup & Drop-off",
        description: "End-to-end vehicle handling across Mangalore, ensuring a smooth and hassle-free service experience without interrupting your daily schedule.",
        image: "/services/customerservice1.webp",
      },
      {
        title: "Roadside Assistance",
        description: "Reliable on-demand support to assist you during unexpected situations, ensuring your vehicle and journey remain uninterrupted.",
        image: "/services/customerservice2.webp",
      },
    
    ],
    showGallery: false,
  },
];
