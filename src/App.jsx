import { Suspense, lazy } from "react";
import StarsCanvas from "./assets/Canvas/Stars";

const About = lazy(() => import("./Section/About"));
const Contact = lazy(() => import("./Section/Contact"));
const Footer = lazy(() => import("./Section/Footer"));
const Header = lazy(() => import("./Section/Header"));
const Navbar = lazy(() => import("./Section/Navbar"));
const Project = lazy(() => import("./Section/Project"));
const TechStack = lazy(() => import("./Section/Tech"));

function App() {
  return (
    <>
      <div className="relative mx-auto max-w-7xl duration-700">
        <Suspense fallback={null}>
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
        </Suspense>
      </div>
    </>
  );
}

export default App;
