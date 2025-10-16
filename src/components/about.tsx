import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Código Limpio",
      description: "Escribo código mantenible y escalable siguiendo las mejores prácticas",
    },
    {
      icon: Lightbulb,
      title: "Soluciones Creativas",
      description: "Encuentro soluciones innovadoras para problemas complejos",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboro efectivamente en equipos multidisciplinarios",
    },
    {
      icon: Zap,
      title: "Aprendizaje Continuo",
      description: "Siempre actualizado con las últimas tecnologías y tendencias",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrollador web con pasión por crear soluciones digitales que impacten positivamente a los usuarios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Mi Historia</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Comencé mi viaje en el desarrollo web hace varios años, fascinado por la capacidad de transformar ideas
                en experiencias digitales tangibles. Mi enfoque se centra en crear aplicaciones web que no solo
                funcionen perfectamente, sino que también brinden una experiencia excepcional al usuario.
              </p>
              <p>
                A lo largo de mi carrera, he trabajado en diversos proyectos que van desde aplicaciones empresariales
                hasta plataformas de comercio electrónico, siempre buscando la excelencia técnica y la innovación.
              </p>
              <p>
                Cuando no estoy programando, me gusta mantenerme actualizado con las últimas tendencias tecnológicas,
                contribuir a proyectos de código abierto y compartir conocimientos con la comunidad de desarrolladores.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Desarrollador trabajando"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
