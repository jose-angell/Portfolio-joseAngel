import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Sass",
        "Vue.js",
        "Angular",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "GraphQL",
        "REST APIs",
      ],
    },
    {
      title: "Herramientas & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "GitHub Actions", "Jest", "Cypress", "Webpack", "Vite"],
    },
    {
      title: "Diseño & UX",
      skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles", "Accessibility", "Design Systems"],
    },
  ]

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones web completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
