# 🚀 JAGC_DEV - Portfolio Developer

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este repositorio contiene el código fuente de mi portafolio profesional web, diseñado y desarrollado desde cero para mostrar mi trayectoria, habilidades y proyectos destacados.

🌐 **Enlace en vivo:** [Visitar Portafolio](https://github.com/jose-angell/Portfolio-joseAngel)

---

## 🎯 Sobre el Proyecto

Más que un simple currículum digital, este proyecto fue concebido como una demostración práctica de desarrollo Frontend moderno. Aplica principios de tipado estricto, optimización de renderizado y diseño UI/UX responsivo. 

Como Ingeniero Mecatrónico y Desarrollador Full Stack, valoro la precisión y la arquitectura escalable, filosofía que se refleja en la estructura de este proyecto.

### ✨ Características Principales

* **Internacionalización (i18n) Nativa:** Implementación de soporte bilingüe (Español / Inglés) utilizando exclusivamente la Context API de React, evitando dependencias externas pesadas y optimizando el rendimiento.
* **Diseño UI/UX Personalizado:** Interfaz moderna con tema oscuro, efectos "glassmorphism", transiciones suaves y tipografía jerárquica gestionada mediante Tailwind CSS.
* **Rendimiento Optimizado:** Uso de Vite como *bundler* para tiempos de carga ultrarrápidos y minificación eficiente de *assets* para el entorno de producción.
* **Despliegue Continuo (CI/CD):** Pipeline automatizado mediante GitHub Actions que compila y despliega la aplicación directamente a GitHub Pages con cada *push* a la rama principal.

---

## 🛠️ Stack Tecnológico

* **Core:** React 18
* **Lenguaje:** TypeScript (Tipado estricto)
* **Herramienta de Build:** Vite
* **Estilos:** Tailwind CSS v4 + Variables CSS personalizadas
* **Gestión de Estado Global:** React Context API
* **Hosting & CI/CD:** GitHub Pages + GitHub Actions

---

## 🏗️ Arquitectura del Código

El proyecto sigue una estructura limpia y modular para separar responsabilidades y facilitar el mantenimiento:

```text
src/
├── assets/         # Imágenes, iconos y recursos estáticos
├── components/     # Componentes de UI reutilizables (Botones, Tarjetas)
│   └── layout/     # Elementos estructurales (Navbar, Footer)
├── context/        # Proveedores de estado global (LanguageProvider)
├── i18n/           # Diccionarios de traducción estructurados (.tsx)
├── App.tsx         # Componente raíz y ensamblador de la interfaz
└── main.tsx        # Punto de entrada de la aplicación
```
---

## 💻 Instalación y Ejecución Local
Si deseas clonar y correr este proyecto en tu máquina local, sigue estos pasos:

1. Clonar el repositorio:
```bash
git clone https://github.com/jose-angell/Portfolio-joseAngel.git
```

2. Navegar al directorio:

```bash
cd Portfolio-joseAngel
```

3. Instalar dependencias:
```bash
npm install

```
4. Levantar el servidor de desarrollo:
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173/`.

---

## 📬 Contacto

Si estás interesado en colaborar, discutir sobre arquitectura de software o tienes alguna oportunidad profesional, no dudes en contactarme:

* Email: gallardocordovajoseangel@gmail.com

* LinkedIn: [Jose Angel](https://www.linkedin.com/in/jose-angel-gallardo-cordova-05a347365/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_jobs%3BOEZDUOU2S5y%2FnI3PnpMD3w%3D%3D)

* GitHub: jose-angell

---

Diseñado y construido por José Ángel Gallardo Córdova.