import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigation } from './components/navigation.tsx'
import { Hero } from './components/hero.tsx'
import { About } from './components/about.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navigation/>
    <Hero/>
    <About/>
  </StrictMode>,
)
