import layoutBookit from "../assets/layoutBookit.png";
import layoutWorkshopAdmin from "../assets/workshopAdmin.png";

export type ProjectCategory = ".NET" | "FRONTEND" | "SQL" | "ARCHITECTURE";
export type ProjectVariant = "featured" | "standard" | "horizontal";

export interface ProjectDetail {
  id: string;
  title: string;
  statusLabel: string;
  icon: string;
  variant: ProjectVariant;
  categories: ProjectCategory[];
  summary: string;
  longDescription: string;
  highlights: string[];
  role: string;
  context: string;
  technologies: string[];
  images: { src: string; alt: string }[];
  sourceCodeUrl?: string;
  projectUrl?: string;
}

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
        role: "Software Developer | .NET",
        company: "NTT DATA",
        description: [
          "Lideré la migración y refactorización de servicios empresariales, incluyendo la transición de PostgreSQL a SQL Server, preservando reglas de negocio y continuidad operativa.",
          "Desarrollé integraciones con SAP, procesos fiscales del SAT y proveedores externos, automatizando flujos comerciales y de facturación.",
          "Implementé procesos de carga y procesamiento masivo de datos mediante Excel y XML, incorporando validaciones, logs y notificaciones automáticas.",
          "Implementé mecanismos de logging y monitoreo de errores en aplicaciones productivas, reduciendo aproximadamente un 40 % los tiempos de diagnóstico y resolución de incidentes."
        ],
        technologies: [".NET", "C#", "SQL Server", "PostgreSQL", "ASP.NET MVC", "Web Services", "SAP"]
      },
      {
        id: 2,
        period: "Ago 2021 - Nov 2022",
        role: "Desarrollador Web",
        company: "Volkswagen Veracruz",
        description: [
          "Diseñé e implementé un sistema para la valuación de vehículos seminuevos, agilizando los procesos internos de tasación y documentación.",
          "Desarrollé módulos de control e inventario de herramientas, mejorando la trazabilidad de recursos utilizados por las áreas operativas.",
          "Construí APIs RESTful para integrar aplicaciones y sistemas internos, facilitando el intercambio de información entre plataformas."
        ],
        technologies: ["C#", "Entity Framework","SQL Server", "RESTful APIs", "Angular", "TypeScript"]
      }
    ]
    },
    projects :{
      title: "Proyectos Seleccionados",
      projectItems: [
      {
        title: "Event Resource Reservation App",
        description: "Plataforma de reserva de recursos para eventos con backend desarrollado en .NET 8. Implementa una API REST con autenticación y autorización mediante JWT y ASP.NET Core Identity, persistencia con PostgreSQL y Entity Framework Core, reglas de disponibilidad por rango de fechas, logging con Serilog, Docker y pruebas unitarias sobre dominio y casos de uso.",
        imageUrl: layoutBookit,
        imageAlt: "Modern dashboard interface for resource management",
        technologies: [".NET 8","C#", "ASP.NET Core", "PostgreSQL","EF Core","JWT", "Docker","xUnit"],
        projectUrl: "#",
        sourceCodeUrl: "https://github.com/jose-angell/EventResourceReservationAppBackend"
      },
      {
        title: "WorkshopAdmin",
        description: "Sistema full stack para la gestión de talleres técnicos desarrollado con .NET 10 y Blazor WebAssembly. Permite administrar clientes, equipos, órdenes de servicio e inventario, incorporando reglas de transición de estados, control de stock, autenticación JWT y persistencia con PostgreSQL mediante Entity Framework Core dentro de una arquitectura modular por capas.",
        imageUrl: layoutWorkshopAdmin,
        imageAlt: "Dashboard de gestión de talleres y servicios",
        technologies: ["Blazor WebAssembly", ".NET 10", "C#","ASP.NET Core", "PostgreSQL", "JWT","EF Core"],
        projectUrl: "#",
        sourceCodeUrl: "https://github.com/jose-angell/WorkshopAdmin" 
      }
    ]
    },
    projectsPage: {
      path: "/root/portfolio/projects",
      title: "Proyectos",
      intro: "Sistemas backend, integraciones y migraciones de datos construidos con código limpio, diseño modular y precisión técnica.",
      filterLabel: "$ filter_by:",
      filterAll: "TODOS",
      ctaTitle: "¿Construyendo la siguiente generación de software?",
      ctaText: "Estoy abierto a colaborar en proyectos de alto impacto y a roles de ingeniería que representen un reto.",
      ctaConnect: "Contactar",
      ctaCV: "Ver CV",
      modalHighlights: "Aspectos destacados",
      modalRole: "Rol",
      modalContext: "Contexto",
      viewCode: "Ver código",
      viewDemo: "Ver demo",
      privateLabel: "Código privado",
      items: [
        {
          id: "event-reservation",
          title: "Event Resource Reservation App",
          statusLabel: "SYSTEM_DEPLOYED_V8",
          icon: "terminal",
          variant: "featured",
          categories: [".NET", "SQL", "ARCHITECTURE"],
          summary: "Backend en .NET 8 para reservar recursos de eventos, con autenticación JWT, reglas de disponibilidad por rango de fechas y pruebas unitarias.",
          longDescription: "Plataforma de reserva de recursos para eventos con backend desarrollado en .NET 8. Implementa una API REST con autenticación y autorización mediante JWT y ASP.NET Core Identity, persistencia con PostgreSQL y Entity Framework Core, reglas de disponibilidad por rango de fechas, logging con Serilog, Docker y pruebas unitarias sobre dominio y casos de uso.",
          highlights: [
            "API REST con autenticación y autorización mediante JWT y ASP.NET Core Identity.",
            "Reglas de disponibilidad de recursos por rango de fechas.",
            "Persistencia con PostgreSQL y Entity Framework Core.",
            "Logging con Serilog y entorno local con Docker.",
            "Pruebas unitarias sobre dominio y casos de uso con xUnit."
          ],
          role: "Desarrollador Backend",
          context: "Proyecto personal",
          technologies: [".NET 8", "C#", "ASP.NET Core", "PostgreSQL", "EF Core", "JWT", "Docker", "xUnit"],
          images: [{ src: layoutBookit, alt: "Interfaz de panel moderno para la gestión de recursos" }],
          sourceCodeUrl: "https://github.com/jose-angell/EventResourceReservationAppBackend"
        },
        {
          id: "workshop-admin",
          title: "WorkshopAdmin",
          statusLabel: "FULL_STACK_BUILD",
          icon: "build",
          variant: "standard",
          categories: [".NET", "FRONTEND", "SQL", "ARCHITECTURE"],
          summary: "Sistema full stack con .NET 10 y Blazor WebAssembly para administrar clientes, equipos, órdenes de servicio e inventario de talleres técnicos.",
          longDescription: "Sistema full stack para la gestión de talleres técnicos desarrollado con .NET 10 y Blazor WebAssembly. Permite administrar clientes, equipos, órdenes de servicio e inventario, incorporando reglas de transición de estados, control de stock, autenticación JWT y persistencia con PostgreSQL mediante Entity Framework Core dentro de una arquitectura modular por capas.",
          highlights: [
            "Gestión de clientes, equipos, órdenes de servicio e inventario.",
            "Reglas de transición de estados en las órdenes de servicio.",
            "Control de stock asociado al inventario.",
            "Autenticación JWT y persistencia con PostgreSQL y EF Core.",
            "Arquitectura modular por capas."
          ],
          role: "Desarrollador Full Stack",
          context: "Proyecto personal",
          technologies: ["Blazor WebAssembly", ".NET 10", "C#", "ASP.NET Core", "PostgreSQL", "JWT", "EF Core"],
          images: [{ src: layoutWorkshopAdmin, alt: "Panel de gestión de talleres y servicios" }],
          sourceCodeUrl: "https://github.com/jose-angell/WorkshopAdmin"
        },
        {
          id: "vigencia",
          title: "Sistema Vigencia",
          statusLabel: "DATA_MIGRATION",
          icon: "migration",
          variant: "standard",
          categories: [".NET", "SQL"],
          summary: "Migración y refactorización de un servicio empresarial de PostgreSQL a SQL Server, preservando reglas de negocio y continuidad operativa.",
          longDescription: "Proyecto de migración y refactorización de servicios empresariales, incluyendo la transición de la base de datos de PostgreSQL a SQL Server. El trabajo se centró en preservar las reglas de negocio existentes y mantener la continuidad operativa durante el cambio.",
          highlights: [
            "Transición de PostgreSQL a SQL Server.",
            "Refactorización del servicio manteniendo las reglas de negocio.",
            "Continuidad operativa durante la migración."
          ],
          role: "Software Developer | .NET",
          context: "NTT DATA",
          technologies: ["PostgreSQL", "SQL Server", "C#", ".NET"],
          images: []
        },
        {
          id: "reintegro",
          title: "Proyecto Reintegro",
          statusLabel: "ACTIVE_DATA_STREAM",
          icon: "data_object",
          variant: "horizontal",
          categories: [".NET"],
          summary: "Motor de procesamiento de datos que carga y valida archivos XML y Excel, con registro de logs y notificaciones automáticas.",
          longDescription: "Proceso de carga y procesamiento masivo de datos a partir de archivos XML y Excel. Incorpora validaciones sobre la estructura y el contenido de los datos, registro de logs y notificaciones automáticas.",
          highlights: [
            "Procesamiento de estructuras XML y archivos Excel.",
            "Validaciones de datos antes de su procesamiento.",
            "Logs y notificaciones automáticas del resultado."
          ],
          role: "Software Developer | .NET",
          context: "NTT DATA",
          technologies: ["C#", ".NET", "XML", "Excel"],
          images: []
        }
      ] as ProjectDetail[]
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
        role: "Software Developer | .NET",
        company: "NTT DATA",
        description: [
          "Led the migration and refactoring of enterprise services, including a PostgreSQL-to-SQL Server transition while preserving business rules and operational continuity.",
          "Developed integrations with SAP, SAT-related processes, and external providers, automating commercial and billing workflows.",
          "Implemented bulk data processing workflows using Excel and XML, including validation, logging, and automated notifications.",
          "Implemented logging and error monitoring across production applications, reducing incident diagnosis and resolution time by approximately 40%."
        ],
        technologies: [".NET", "C#", "SQL Server", "PostgreSQL", "ASP.NET MVC", "Web Services", "SAP"]
      },
      {
        id: 2,
        period: "Ago 2021 - Nov 2022",
        role: "Web Developer",
        company: "Volkswagen Veracruz",
        description: [
          "Designed and implemented a system for used vehicle valuation, streamlining internal appraisal and documentation workflows.",
          "Developed tool inventory management modules, improving operational resource traceability.",
          "Built REST APIs to integrate internal applications and systems, improving information exchange between platforms."
        ],
        technologies: ["C#", "Entity Framework","SQL Server", "RESTful APIs", "Angular", "TypeScript"]
      }
    ]
    },
    projects : {
      title: "Selected Projects",
      projectItems: [
      {
        title: "Event Resource Reservation App",
        description: "Resource reservation platform for events with a backend built on .NET 8. It provides REST APIs with JWT and ASP.NET Core Identity authentication and authorization, PostgreSQL persistence with Entity Framework Core, date-range availability rules, structured logging with Serilog, Docker-based local setup, and unit tests covering domain rules and application use cases.",
        imageUrl: layoutBookit,
        imageAlt: "Modern dashboard interface for resource management",
        technologies: [".NET 8","C#", "ASP.NET Core", "PostgreSQL","EF Core","JWT", "Docker","xUnit"],
        projectUrl: "#",
        sourceCodeUrl: "https://github.com/jose-angell/EventResourceReservationAppBackend"
      },
      {
        title: "WorkshopAdmin",
        description: "Full-stack management system for technical workshops built with .NET 10 and Blazor WebAssembly. It manages customers, equipment, service orders, and inventory while enforcing workflow state transitions, stock rules, JWT authentication, and PostgreSQL persistence through Entity Framework Core within a modular layered architecture.",
        imageUrl: layoutWorkshopAdmin,
        imageAlt: "Workshop and service management dashboard",
        technologies: ["Blazor WebAssembly", ".NET 10", "C#","ASP.NET Core", "PostgreSQL", "JWT","EF Core"],
        projectUrl: "#",
        sourceCodeUrl: "https://github.com/jose-angell/WorkshopAdmin" 
      }
    ]
    },
    projectsPage: {
      path: "/root/portfolio/projects",
      title: "Projects",
      intro: "Backend systems, integrations, and data migrations built with clean code, modular design, and technical precision.",
      filterLabel: "$ filter_by:",
      filterAll: "ALL",
      ctaTitle: "Building the next generation of software?",
      ctaText: "I'm open to collaborating on high-impact projects and engineering roles that offer a real challenge.",
      ctaConnect: "Let's Connect",
      ctaCV: "View CV",
      modalHighlights: "Highlights",
      modalRole: "Role",
      modalContext: "Context",
      viewCode: "View code",
      viewDemo: "View demo",
      privateLabel: "Private code",
      items: [
        {
          id: "event-reservation",
          title: "Event Resource Reservation App",
          statusLabel: "SYSTEM_DEPLOYED_V8",
          icon: "terminal",
          variant: "featured",
          categories: [".NET", "SQL", "ARCHITECTURE"],
          summary: ".NET 8 backend for reserving event resources, with JWT authentication, date-range availability rules, and unit tests.",
          longDescription: "Resource reservation platform for events with a backend built on .NET 8. It provides REST APIs with JWT and ASP.NET Core Identity authentication and authorization, PostgreSQL persistence with Entity Framework Core, date-range availability rules, structured logging with Serilog, Docker-based local setup, and unit tests covering domain rules and application use cases.",
          highlights: [
            "REST API with JWT and ASP.NET Core Identity authentication and authorization.",
            "Resource availability rules based on date ranges.",
            "PostgreSQL persistence with Entity Framework Core.",
            "Structured logging with Serilog and Docker-based local setup.",
            "Unit tests covering domain rules and use cases with xUnit."
          ],
          role: "Backend Developer",
          context: "Personal project",
          technologies: [".NET 8", "C#", "ASP.NET Core", "PostgreSQL", "EF Core", "JWT", "Docker", "xUnit"],
          images: [{ src: layoutBookit, alt: "Modern dashboard interface for resource management" }],
          sourceCodeUrl: "https://github.com/jose-angell/EventResourceReservationAppBackend"
        },
        {
          id: "workshop-admin",
          title: "WorkshopAdmin",
          statusLabel: "FULL_STACK_BUILD",
          icon: "build",
          variant: "standard",
          categories: [".NET", "FRONTEND", "SQL", "ARCHITECTURE"],
          summary: "Full-stack system built with .NET 10 and Blazor WebAssembly to manage customers, equipment, service orders, and inventory for technical workshops.",
          longDescription: "Full-stack management system for technical workshops built with .NET 10 and Blazor WebAssembly. It manages customers, equipment, service orders, and inventory while enforcing workflow state transitions, stock rules, JWT authentication, and PostgreSQL persistence through Entity Framework Core within a modular layered architecture.",
          highlights: [
            "Management of customers, equipment, service orders, and inventory.",
            "Workflow state transition rules for service orders.",
            "Stock control tied to inventory.",
            "JWT authentication and PostgreSQL persistence with EF Core.",
            "Modular layered architecture."
          ],
          role: "Full Stack Developer",
          context: "Personal project",
          technologies: ["Blazor WebAssembly", ".NET 10", "C#", "ASP.NET Core", "PostgreSQL", "JWT", "EF Core"],
          images: [{ src: layoutWorkshopAdmin, alt: "Workshop and service management dashboard" }],
          sourceCodeUrl: "https://github.com/jose-angell/WorkshopAdmin"
        },
        {
          id: "vigencia",
          title: "Sistema Vigencia",
          statusLabel: "DATA_MIGRATION",
          icon: "migration",
          variant: "standard",
          categories: [".NET", "SQL"],
          summary: "Migration and refactoring of an enterprise service from PostgreSQL to SQL Server, preserving business rules and operational continuity.",
          longDescription: "Migration and refactoring project for enterprise services, including the database transition from PostgreSQL to SQL Server. The work focused on preserving existing business rules and keeping operations running throughout the change.",
          highlights: [
            "Transition from PostgreSQL to SQL Server.",
            "Service refactoring while keeping business rules intact.",
            "Operational continuity during the migration."
          ],
          role: "Software Developer | .NET",
          context: "NTT DATA",
          technologies: ["PostgreSQL", "SQL Server", "C#", ".NET"],
          images: []
        },
        {
          id: "reintegro",
          title: "Proyecto Reintegro",
          statusLabel: "ACTIVE_DATA_STREAM",
          icon: "data_object",
          variant: "horizontal",
          categories: [".NET"],
          summary: "Data processing engine that loads and validates XML and Excel files, with logging and automated notifications.",
          longDescription: "Bulk data loading and processing workflow driven by XML and Excel files. It includes validation of data structure and content, logging, and automated notifications.",
          highlights: [
            "Processing of XML structures and Excel files.",
            "Data validation before processing.",
            "Logs and automated notifications of the outcome."
          ],
          role: "Software Developer | .NET",
          context: "NTT DATA",
          technologies: ["C#", ".NET", "XML", "Excel"],
          images: []
        }
      ] as ProjectDetail[]
    }
  }
};

export type Language = 'es' | 'en';