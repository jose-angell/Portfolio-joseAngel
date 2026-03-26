import { About } from "./components/About";
import { Hero } from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import { TopNavBar } from "./components/TopNavBar";

export default function App() {
  return (

    <>
    <TopNavBar/>
    <Hero/>
    <About/>
    <ProjectGrid/>
    </>
  )
}