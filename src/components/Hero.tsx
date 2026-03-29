import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 max-w-7xl mx-auto" id="home">
      
      {/* Círculo de fondo con desenfoque (Efecto de iluminación) */}
      <div className="absolute top-10 left-10 md:-top-24 md:-left-24 w-72 h-72 md:w-96 md:h-96 bg-primary/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl">
        
        {/* Status / Etiqueta superior */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label text-tertiary text-xs md:text-sm uppercase tracking-[0.3em]">
            System.Ready_ // José Ángel
          </span>
        </div>
        
        {/* Título Principal */}
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-[0.9] tracking-tight mb-6 text-on-surface">
          Ingeniero <br className="hidden md:block" />
          <span className="text-primary italic font-light">Full Stack</span>
        </h1>

        {/* Introducción sintetizada del CV */}
        <p className="text-outline text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body">
          Especializado en el ecosistema <strong className="text-on-surface font-medium">.NET</strong> y <strong className="text-on-surface font-medium">JavaScript/TypeScript</strong>. 
          Aplico la perspectiva analítica de la Ingeniería Mecatrónica para desarrollar arquitecturas limpias, 
          creando soluciones empresariales que optimizan procesos y escalan con calidad.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-wrap items-center gap-4">
          <Button
          render={<a href="#projects" className="text-black"/>}
          className="bg-primary text-on-primary hover:shadow-[0_0_30px_-5px_rgba(174,198,255,0.4)] transition-all px-8 py-6 text-base font-bold tracking-wide rounded-lg">
            Ver Proyectos
          </Button>
          
          {/* Botón secundario con icono para el CV */}
          <Button variant="outline" className="border-outline-variant text-on-surface px-8 py-6 text-base hover:bg-white/5 transition-colors group rounded-lg">
            Descargar CV 
            <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-y-1 transition-transform">
              download
            </span>
          </Button>
        </div>
        
      </div>
    </section>
  )
}