import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import { Skills } from "./components/Skills";
import { TopNavBar } from "./components/TopNavBar";

export default function App() {
  return (

    <>
    <TopNavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <ProjectGrid/>
    </>
  )
}