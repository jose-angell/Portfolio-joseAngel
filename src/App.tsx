import { useEffect } from "react";
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

  useEffect(() => {
    if (route === 'projects') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    // El home recién se montó: el navegador no pudo resolver el ancla (#about, #footer...)
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView();
  }, [route]);

  return (

    <>
    <TopNavBar route={route}/>
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
