import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import { ProjectsPage } from "./components/ProjectsPage";
import { Skills } from "./components/Skills";
import { TopNavBar } from "./components/TopNavBar";
import { useHashRoute } from "./hooks/useHashRoute";

export default function App() {
  const route = useHashRoute();

  return (

    <>
    <TopNavBar/>
    {route === 'projects' ? (
      <ProjectsPage/>
    ) : (
      <>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <ProjectGrid/>
      </>
    )}
    <Footer/>
    </>
  )
}
