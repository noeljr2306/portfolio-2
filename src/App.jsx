import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import StarsCanvas from "./assets/Canvas/Stars";

import About from "./Section/About";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import Header from "./Section/Header";
import Navbar from "./Section/Navbar";
import Project from "./Section/Project";
import TechStack from "./Section/Tech";
import ProjectDetail from "./pages/ProjectDetail";

const Home = () => {
  const { hash, state } = useLocation();

  useEffect(() => {
    if (hash) {
      const timeout = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: state?.instant ? "instant" : "smooth" });
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [hash]);

  return (
    <div className="relative duration-700 max-w-7xl mx-auto">
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <section id="projects" className="scroll-mt-20">
        <Project />
      </section>
      <div className="relative">
        <StarsCanvas />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
