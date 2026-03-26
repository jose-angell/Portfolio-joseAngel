import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 max-w-7xl mx-auto" id="home">
      {/* Círculo de fondo con desenfoque */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label text-tertiary text-xs uppercase tracking-[0.3em]">
            System.Ready_
          </span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
          Construyendo <span className="text-primary italic">software</span> escalable
        </h1>

        <div className="flex flex-wrap gap-4">
          {/* Usamos el componente Button de shadcn pero con tus clases de Tailwind */}
          <Button className="bg-primary-container text-on-primary-container hover:shadow-[0_0_30px_-5px_rgba(0,112,243,0.5)] transition-all px-8 py-6 h-auto">
            VER PROYECTOS
          </Button>
          
          <Button variant="outline" className="border-outline-variant px-8 py-6 h-auto hover:bg-white/5">
            CONTACTAR <span className="font-label text-tertiary ml-2">_</span>
          </Button>
        </div>
      </div>
    </section>
  )
}