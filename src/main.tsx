import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Navigation } from './components/navigation.tsx'
import { Hero } from './components/hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navigation/>
    <Hero/>
  </StrictMode>,
)
