import { ProjectCard } from "./ProjectCard";

export default function ProjectGrid() {
  // Array de datos. En una Clean Architecture, esto podría venir de un servicio o CMS.
  const projects = [
    {
      title: "Event Resource Reservation App",
      description: "A high-concurrency reservation system designed for campus event management. Built with a focus on real-time availability and robust auditing.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6u38QsNgAsysDU9whnGYtGQjtxRR_0EVYvqmlhclGFi53Zh9uNn03YtrMMFnAkQiymvoYJ0UPBeK0OG9LgC-5RLmz7z-4loBiQui92MDAGjyZTRwows8zrw8s_5y88QVdoBImNWTEQF4mkdVOXBL1PpYnEb1V6rhNCeqUMIA64vCz9CGxFOVDDVjxNVurcwMFZPUueQGINznkT0VO0Y--pbJ_TdrSzT6efYiKss-CSh_2JpezFwykJxD9AmIKBP8N5c12DeikxbA",
      imageAlt: "Modern dashboard interface for resource management",
      technologies: [".NET 8","C#", "React", "TypeScript", "PostgreSQL", "Docker"],
      projectUrl: "#",
      sourceCodeUrl: "#"
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
  ];

  return (
    <section className="max-w-7xl mx-auto px-6" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
            04 // Featured Work
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Selected Projects
          </h2>
        </div>
        <div className="font-label text-outline text-sm cursor-pointer hover:text-tertiary transition-colors">
          VIEW_ALL_REPOS <span className="text-tertiary">-&gt;</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            technologies={project.technologies}
            projectUrl={project.projectUrl}
            sourceCodeUrl={project.sourceCodeUrl}
          />
        ))}
      </div>
    </section>
  );
}