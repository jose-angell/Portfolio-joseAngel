


export const About = () => {
  return (
    <section id="about" className="bg-surface-container-low py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Lado Izquierdo: Imagen y Tarjeta Flotante (Orden 2 en móvil, 1 en escritorio) */}
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square w-full max-w-md mx-auto relative group">
            
            {/* Cuadro decorativo desplazado en el fondo */}
            <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            
            {/* Imagen de Perfil */}
            {/* Nota: Reemplaza src="/me.jpg" con la ruta de tu foto real en la carpeta public/ */}
            <img 
              alt="José Ángel Gallardo Córdova" 
              className="relative z-10 w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop" // Imagen temporal de ejemplo
            />
            
            {/* Tarjeta de Status Flotante (Usa la utilidad de CSS que creamos) */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 z-20 rounded-lg hidden md:block">
              <span className="font-label text-tertiary text-sm block mb-1">Status:</span>
              <span className="font-headline font-bold text-xl text-on-surface">Open for opportunities</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Contenido de Texto (Orden 1 en móvil, 2 en escritorio) */}
        <div className="order-1 lg:order-2">
          <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
            01 // Profile
          </span>
          
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 text-on-surface">
            De la Mecatrónica al Full Stack
          </h2>
          
          <div className="space-y-6 text-outline text-lg leading-relaxed">
            <p>
              Starting as a Mechatronic Engineer gave me a unique perspective on hardware-software integration and systematic problem solving. My evolution into Full Stack Development was driven by a passion for creating digital systems that are as precise as industrial machinery.
            </p>
            <p>
              Today, my focus is centered on <span className="text-on-surface font-medium underline decoration-tertiary/50">Clean Architecture</span>. I believe code should not only solve a problem but also be a sustainable foundation for business growth. I specialize in the modern web ecosystem, bridging the gap between robust backend logic and intuitive user experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};