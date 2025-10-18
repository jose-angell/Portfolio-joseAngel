import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigation } from './components/navigation.tsx'
import { Hero } from './components/hero.tsx'
import { About } from './components/about.tsx'
import { Skills } from './components/skills.tsx'
import { Projects } from './components/projects.tsx'
import { Contact } from './components/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navigation/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </StrictMode>,
)
