import layoutBookit from "../assets/layoutBookit.png";


export const translations = {
  es: {
    topbar:{
        links : [
            { name: "Inicio", id: "home" },
            { name: "Sobre mí", id: "about" },
            { name: "Habilidades", id: "skills" },
            { name: "Experiencia", id: "experience" },
            { name: "Proyectos", id: "projects" },
            ]
    },
    hero: {
      title1: "Ingeniero",
      title2: "Full Stack",
      intro: <>Especializado en el ecosistema <strong className="text-on-surface font-medium">.NET</strong> y <strong className="text-on-surface font-medium">JavaScript/TypeScript</strong>. 
          Aplico la perspectiva analítica de la Ingeniería Mecatrónica para desarrollar arquitecturas limpias, 
          creando soluciones empresariales que optimizan procesos y escalan con calidad.</>,
      btnProjects: "Ver Proyectos",
      btnCV: "Descargar CV"
    },
    about:{
        title: "De la Mecatrónica al Full Stack",
        status: "Abierto a oportunidades",
        content1: `Iniciar como Ingeniero Mecatrónico me dio una perspectiva única sobre la integración de hardware-software y la resolución sistemática de problemas. Mi evolución hacia el desarrollo Full Stack fue impulsada por la pasión de crear sistemas digitales que sean tan precisos como la maquinaria industrial.`,
        content2: <>Hoy, mi enfoque se centra en la <span className="text-on-surface font-medium underline decoration-tertiary/50">Clean Architecture</span>. Creo que el código no solo debe resolver un problema, sino ser una base sostenible para el crecimiento del negocio. Me especializo en el ecosistema web moderno, cerrando la brecha entre una lógica backend robusta y experiencias de usuario intuitivas.</>
    },
    skills:{
      title: "Capacidades Técnicas"
    },
    experience: {
      title: "Experiencia Profesional",
      experiencesItems : [
      {
        id: 1,
        period: "Dic 2022 - Presente",
        role: "Desarrollador Web Full Stack",
        company: "NTT DATA",
        description: [
          "Lideré la migración y refactorización de servicios críticos (Vigencia y Reintegros), incluyendo la transición de PostgreSQL a SQL Server sin interrupción operativa.",
          "Desarrollé arquitecturas de integración con el ecosistema SAP y normativas del SAT, automatizando procesos comerciales y de facturación.",
          "Implementé sistemas de telemetría y monitoreo de errores (logs) en aplicaciones productivas, reduciendo drásticamente los tiempos de diagnóstico.",
          "Integré flujos de autenticación segura con Azure y automaticé la carga masiva de datos mediante el procesamiento de archivos Excel y XML."
        ],
        technologies: [".NET", "C#", "SQL Server", "MVC", "SAP Integration", "Azure"]
      },
      {
        id: 2,
        period: "Ago 2021 - Nov 2022",
        role: "Desarrollador Web",
        company: "Volkswagen Veracruz",
        description: [
          "Diseñé e implementé un sistema integral para la valuación de autos seminuevos, agilizando el proceso de tasación y documentación interna.",
          "Desarrollé módulos de control de inventario de herramientas para optimizar la trazabilidad y reducir pérdidas operativas.",
          "Construí APIs RESTful para la interconexión de plataformas y sistemas internos, mejorando el flujo de información entre departamentos."
        ],
        technologies: ["Angular", "TypeScript", "C#", "Entity Framework", "RESTful APIs"]
      }
    ]
    },
    projects :{
      title: "Proyectos Seleccionados",
      projectItems: [
      {
        title: "Event Resource Reservation App",
        description: "Sistema robusto de reservas de recursos para eventos. Desarrollado aplicando principios de Clean Architecture y patrones de diseño empresariales (Repository, Unit of Work) para garantizar mantenibilidad y escalabilidad a largo plazo.",
        imageUrl: layoutBookit,
        imageAlt: "Modern dashboard interface for resource management",
        technologies: [".NET 8","C#", "React", "TypeScript", "PostgreSQL", "Docker"],
        projectUrl: "#",
        sourceCodeUrl: "https://jose-angell.github.io/EventResourceReservationAppDocs/"
      },
      {
        title: "E-Commerce Razor Pages",
        description: "Una plataforma de comercio electrónico ligera y rápida que utiliza renderizado del lado del servidor para un SEO óptimo y una velocidad de carga inicial superior. Pasarelas de pago integradas.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1YuZYPn4psvgol1w9OSMtvfGZpyz0ktTr-R9WPokrnF094B3SGV2_0w5AIfenzoNmSxR4fSYNWsdiiv1RZZZh6mEZ0hKdHIbPQTV_zZ-R0Fv0hqt40O2YeZGhkDA3MnunH6IuDSLUkADYYBGUji-OfO8cKyhtRxmCe8RX9vcaiHKtzaVMcel6BNkmQGBoMsEyO9uRsITHq6VD71E9BQQwWvogweKf1psdTt7x_UY-4Trh4UckkCMxyiNOseITK8rV_MgpHpgnGDs",
        imageAlt: "Sleek e-commerce landing page with product grid",
        technologies: ["Razor Pages", "C#", "Tailwind CSS"],
        projectUrl: "#",
        sourceCodeUrl: "#"
      }
    ]
    }
  },
  en: {
    topbar:{
        links : [
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            ]
    },
    hero: {
      title1: "Full Stack",
      title2: "Engineer",
      intro: <>Specialized in the <strong className="text-on-surface font-medium">.NET</strong> and <strong className="text-on-surface font-medium">JavaScript/TypeScript</strong>.
       I apply the analytical perspective of Mechatronics Engineering to develop clean architectures, creating enterprise solutions that optimize processes and scale with quality.</>,
      btnProjects: "View Projects",
      btnCV: "Download CV"
    },
     about:{
        title: "From Mechatronics to Full Stack",
        status: "Open for opportunities",
        content1: `Starting as a Mechatronic Engineer gave me a unique perspective on hardware-software integration and systematic problem-solving. My evolution into Full Stack Development was driven by a passion for creating digital systems that are as precise as industrial machinery.`,
        content2: <>Today, my focus is on <span className="text-on-surface font-medium underline decoration-tertiary/50">Clean Architecture</span>. I believe that code should not only solve a problem but also provide a sustainable foundation for business growth. I specialize in the modern web ecosystem, bridging the gap between robust backend logic and intuitive user experiences.</>
    },
    skills:{
      title: "Technical Capabilities"
    },
    experience: {
      title: "Professional Experience",
       experiencesItems:[
      {
        id: 1,
        period: "Dic 2022 - Present",
        role: "Web Developer Full Stack",
        company: "NTT DATA",
        description: [
          "Led the migration and refactoring of critical services (Validity and Refunds), including the transition from PostgreSQL to SQL Server with zero operational downtime.",
          "Developed integration architectures with the SAP ecosystem and SAT regulations, automating commercial and billing processes.",
          "Implemented telemetry and error monitoring systems (logs) in production applications, drastically reducing diagnostic times.",
          "Integrated secure authentication flows with Azure and automated massive data loading through Excel and XML file processing."
        ],
        technologies: [".NET", "C#", "SQL Server", "MVC", "SAP Integration", "Azure"]
      },
      {
        id: 2,
        period: "Ago 2021 - Nov 2022",
        role: "Web Developer",
        company: "Volkswagen Veracruz",
        description: [
          "Designed and implemented a comprehensive system for used car valuation, streamlining the appraisal and internal documentation process.",
          "Developed inventory control modules for optimizing traceability and reducing operational losses.",
          "Built RESTful APIs for interconnecting platforms and internal systems, improving information flow between departments."
        ],
        technologies: ["Angular", "TypeScript", "C#", "Entity Framework", "RESTful APIs"]
      }
    ]
    },
    projects : {
      title: "Selected Projects",
      projectItems: [
      {
        title: "Event Resource Reservation App",
        description: "Robust resource reservation system for events. Developed applying Clean Architecture principles and enterprise design patterns (Repository, Unit of Work) to ensure long-term maintainability and scalability.",
        imageUrl: layoutBookit,
        imageAlt: "Modern dashboard interface for resource management",
        technologies: [".NET 8","C#", "React", "TypeScript", "PostgreSQL", "Docker"],
        projectUrl: "#",
        sourceCodeUrl: "https://jose-angell.github.io/EventResourceReservationAppDocs/"
      },
      {
        title: "E-Commerce Razor Pages",
        description: "Lightweight and fast e-commerce platform using Server Side Rendering for optimal SEO and initial load speed. Integrated payment gateways.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1YuZYPn4psvgol1w9OSMtvfGZpyz0ktTr-R9WPokrnF094B3SGV2_0w5AIfenzoNmSxR4fSYNWsdiiv1RZZZh6mEZ0hKdHIbPQTV_zZ-R0Fv0hqt40O2YeZGhkDA3MnunH6IuDSLUkADYYBGUji-OfO8cKyhtRxmCe8RX9vcaiHKtzaVMcel6BNkmQGBoMsEyO9uRsITHq6VD71E9BQQwWvogweKf1psdTt7x_UY-4Trh4UckkCMxyiNOseITK8rV_MgpHpgnGDs",
        imageAlt: "Sleek e-commerce landing page with product grid",
        technologies: ["Razor Pages", "C#", "Tailwind CSS"],
        projectUrl: "#",
        sourceCodeUrl: "#"
      }
    ]   
    }
  }
};

export type Language = 'es' | 'en';