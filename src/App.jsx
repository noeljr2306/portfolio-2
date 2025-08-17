import StarsCanvas from "./assets/Canvas/Stars";

import About from "./Section/About";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import Header from "./Section/Header";
import Navbar from "./Section/Navbar";
import Project from "./Section/Project";
import TechStack from "./Section/Tech";
const App = () => {
  return (
    <>
      <div className="relative mx-auto max-w-7xl duration-700">
        <Navbar />
        <Header />
        <About />
        <TechStack />
        <Project />
        <div className="relative">
          <StarsCanvas />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
