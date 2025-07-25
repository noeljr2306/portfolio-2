import { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import StarsCanvas from "./assets/Canvas/Stars";
import About from "./Section/About";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import Header from "./Section/Header";
import Navbar from "./Section/Navbar";
import Project from "./Section/Project";
import TechStack from "./Section/Tech";

function App() {
  const [loadingVisible, setLoadingVisible] = useState(true);

  const handleLoadingFinish = () => {
    setTimeout(() => {
      setLoadingVisible(false);
    }, 500);
  };

  return (
    <>
      {loadingVisible && <LoadingScreen isFadingOut={handleLoadingFinish} />}
      {!loadingVisible && (
        <div
          className="relative mx-auto max-w-7xl opacity-0 duration-700"
          style={{ opacity: loadingVisible ? 0 : 1 }}
        >
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
      )}
    </>
  );
}

export default App;
