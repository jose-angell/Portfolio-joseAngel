export const Footer = () => {
  // Función para volver al inicio suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="border-t border-white/10 bg-surface-container-lowest pt-16 pb-8 px-6 mt-32 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Columna 1: Branding y Filosofía */}
          <div className="space-y-4">
            <div className="font-label font-bold text-primary tracking-widest text-xl">
              JAGC_DEV
            </div>
            <p className="text-outline text-sm leading-relaxed max-w-xs">
              Construyendo software escalable y arquitecturas limpias. De la Mecatrónica al código.
            </p>
          </div>

          {/* Columna 2: Contacto Directo */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-on-surface text-lg">Contacto</h3>
            <ul className="space-y-3 font-label text-sm text-outline">
              <li>
                <a href="mailto:gallardocordovajoseangel@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  gallardocordovajoseangel@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+525542262887" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  +52 55 4226 2887
                </a>
              </li>
              <li className="flex items-center gap-2 cursor-default">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                Veracruz, México
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes / Links */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-on-surface text-lg">Redes</h3>
            <div className="flex flex-col space-y-3 font-label text-sm text-outline">
              <a href="https://github.com/jose-angell" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 w-fit">
                <span className="text-tertiary font-bold">{'>'}</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jose-angel-gallardo-cordova-05a347365/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 w-fit">
                <span className="text-tertiary font-bold">{'>'}</span> LinkedIn
              </a>
              {/* Puedes añadir más enlaces aquí si lo necesitas */}
            </div>
          </div>
          
        </div>

        {/* Línea divisoria inferior y Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-label text-xs text-outline/60 text-center md:text-left">
            © {new Date().getFullYear()} José Ángel Gallardo Córdova. Todos los derechos reservados.
          </p>

          {/* Botón flotante para volver arriba */}
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high border border-white/10 text-on-surface hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
            aria-label="Volver arriba"
          >
            <span className="material-symbols-outlined">arrow_upward</span>
          </button>
        </div>

      </div>
    </footer>
  );
};