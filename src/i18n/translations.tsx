import layoutBookit from "../assets/layoutBookit.png";
import layoutWorkshopAdmin from "../assets/workshopAdmin.png";


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
      title1: "Desarrollador",
      title2: ".NET Backend",
      intro: <>Desarrollador de software con más de 4 años de experiencia en soluciones empresariales, especializado en backend con <strong className="text-on-surface font-medium">.NET</strong>
       y <strong className="text-on-surface font-medium">C#</strong>. Desarrollo APIs, integraciones y procesos orientados a datos, con experiencia complementaria en tecnologías frontend.</>,
      btnProjects: "Ver Proyectos",
      btnCV: "Descargar CV"
    },
    about:{
        title: "Ingeniería aplicada al desarrollo backend",
        status: "Abierto a oportunidades",
        content1: `Mi formación en Ingeniería Mecatrónica fortaleció una forma estructurada de analizar problemas, comprender sistemas complejos y buscar soluciones eficientes. Esa base me llevó al desarrollo de software, donde he aplicado ese enfoque durante más de 4 años en soluciones empresariales, integraciones y automatización de procesos.`,
        content2: <>Hoy me especializo en desarrollo backend con <strong className="text-on-surface font-medium">.NET</strong> y <strong className="text-on-surface font-medium">C#</strong>, trabajando con APIs, bases de datos y procesos orientados a datos. Mi objetivo es construir soluciones mantenibles y bien estructuradas, profundizando continuamente en arquitectura de software, testing, Docker y cloud. También cuento con experiencia en tecnologías frontend, lo que me permite comprender y colaborar en una solución de extremo a extremo cuando el proyecto lo requiere.</>
    },
    skills:{
      title: "Capacidades Técnicas"
    },
    experience: {
      title: "Experiencia Profesional",
      experiencesItems : [
      {
        id: 1,
        period: "Dic 2022 - Sep 2026",
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
        technologies: ["C#", "Entity Framework", "RESTful APIs", "Angular", "TypeScript"]
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
        title: "WorkshopAdmin",
        description: "Sistema integral de gestión para talleres mecánicos, optimizando el control de órdenes de servicio, inventario y clientes. Desarrollado con una arquitectura modular para garantizar eficiencia operativa y escalabilidad en la nube mediante Azure.",
        imageUrl: layoutWorkshopAdmin,
        imageAlt: "Dashboard de gestión de talleres y servicios",
        technologies: ["Blazor WebAssembly", ".NET 8", "C#", "PostgreSQL", "JWT", "Azure"],
        projectUrl: "#",
        sourceCodeUrl: "https://github.com/jose-angell/WorkshopAdmin" 
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
      title1: ".NET Backend",
      title2: "Developer",
      intro: <>Software developer with 4+ years of experience building enterprise solutions, specializing in backend development with <strong className="text-on-surface font-medium">.NET</strong> 
      and <strong className="text-on-surface font-medium">C#</strong>. I work on APIs, system integrations, and data-driven processes, with complementary experience in frontend technologies.</>,
      btnProjects: "View Projects",
      btnCV: "Download CV"
    },
     about:{
        title: "Engineering Mindset for Backend Development",
        status: "Open for opportunities",
        content1: `My background in Mechatronics Engineering strengthened the way I approach complex problems, analyze systems, and design efficient solutions. That foundation led me into software development, where I have applied the same mindset for more than 4 years building enterprise solutions, integrations, and process automation.`,
        content2: <>Today, I specialize in backend development with <strong className="text-on-surface font-medium">.NET</strong> and <strong className="text-on-surface font-medium">C#</strong>, working with APIs, databases, and data-driven processes. My focus is on building maintainable and well-structured solutions while continuously developing my skills in software architecture, testing, Docker, and cloud technologies. I also have frontend experience, allowing me to understand and contribute to end-to-end solutions when a project requires it.</>
    },
    skills:{
      title: "Technical Capabilities"
    },
    experience: {
      title: "Professional Experience",
       experiencesItems:[
      {
        id: 1,
        period: "Dic 2022 - Sep 2026",
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
        technologies: ["C#", "Entity Framework", "RESTful APIs", "Angular", "TypeScript"]
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
        title: "WorkshopAdmin",
        description: "Comprehensive management system for automotive workshops, optimizing the control of service orders, inventory, and clients. Developed with a modular architecture to ensure operational efficiency and cloud scalability using Azure.",
        imageUrl: layoutWorkshopAdmin,
        imageAlt: "Workshop and service management dashboard",
        technologies: ["Blazor WebAssembly", ".NET 8", "C#", "PostgreSQL", "JWT", "Azure"],
        projectUrl: "#",
        sourceCodeUrl: "https://github.com/jose-angell/WorkshopAdmin" 
      }
    ]   
    }
  }
};

export type Language = 'es' | 'en';