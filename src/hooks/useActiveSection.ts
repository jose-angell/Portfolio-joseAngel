
import { useState, useEffect } from 'react';

// `resetKey` vuelve a registrar el observer cuando cambia la vista y las secciones se montan de nuevo.
export function useActiveSection(sectionIds: string[], resetKey?: string) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la sección entra en el área visible, actualizamos el estado
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // El secreto: Solo activa la sección cuando cruza la mitad exacta de la pantalla
        rootMargin: '-50% 0px -50% 0px' 
      }
    );

    // Le decimos al observador qué elementos de HTML debe vigilar
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Limpieza de memoria (muy importante en React)
    return () => observer.disconnect();
  }, [sectionIds, resetKey]);

  return activeSection;
}