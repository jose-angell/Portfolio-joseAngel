
import { Hero } from "./components/hero.js"
import { About } from "./components/about.js"
import { Skills } from "./components/skills.js"
import { Projects } from "./components/projects.js"
import { Contact } from "./components/contact.js"
import { Navigation } from "./components/navigation.js"

function App() {

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
