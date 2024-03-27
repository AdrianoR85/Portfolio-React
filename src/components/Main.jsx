import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

import '../styles/main.css';
import Skill from "../pages/Skill";
export default function Main() {
  return (
    <main className="main-wrapper">
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Contact />
    </main>
  )
}

