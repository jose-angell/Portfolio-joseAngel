"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hola, soy <span className="text-primary">Jose Angel Gallardo Cordova</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">Desarrollador Web Full Stack Especialista en Soluciones Empresariales .NET & SQL Server</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {/* Especializado en crear experiencias web modernas y funcionales usando las últimas tecnologías. Apasionado
            por el código limpio y las soluciones innovadoras. */}
            Ingeniero especializado en convertir procesos complejos en soluciones digitales escalables. 
            {/* con .NET y SQL Server. */}
             Mi enfoque es el código limpio y la arquitectura robusta para garantizar la trazabilidad y la optimización de los flujos de negocio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Contáctame
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Descargar CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/jose-angell" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
