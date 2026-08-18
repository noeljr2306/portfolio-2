import Button from "../Components/Button";
import { lazy, Suspense } from "react";
const FloatingIcon = lazy(() => import("../Components/FloatingIcon"));
import GlitchText from "../Components/GlitchText";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiSolidity,
  SiGreensock,
  SiVite,
} from "react-icons/si";

const profileWebp = "/noel.webp";
const profileJpg = "/noel.jpg";
const HERO_WORDS = ["frontend developer", "web3 developer"];
const Header = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden" id="home">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <Suspense fallback={null}>
          <FloatingIcon
            className="top-28 left-16"
            animationDelay="0s"
            glowColor="97,218,251"
            index={0}
          >
            <FaReact size={26} color="#61DAFB" />
          </FloatingIcon>

          <FloatingIcon
            className="top-32 right-20"
            animationDelay="3s"
            style={{ animation: "floatSlow 25s ease-in-out infinite" }}
            glowColor="49,120,198"
            index={1}
          >
            <SiTypescript size={24} color="#3178C6" />
          </FloatingIcon>

          <FloatingIcon
            className="top-72 left-20"
            animationDelay="7s"
            style={{ animation: "floatReverse 22s ease-in-out infinite" }}
            glowColor="255,255,255"
            index={2}
          >
            <SiNextdotjs size={26} color="#ffffff" />
          </FloatingIcon>

          <FloatingIcon
            className="top-40 right-32"
            animationDelay="12s"
            glowColor="255,255,255"
            index={3}
          >
            <FaGithub size={26} color="#ffffff" />
          </FloatingIcon>

          <FloatingIcon
            className="top-80 right-16"
            animationDelay="5s"
            style={{ animation: "floatSlow 18s ease-in-out infinite" }}
            glowColor="56,189,248"
            index={4}
          >
            <SiTailwindcss size={24} color="#38BDF8" />
          </FloatingIcon>

          <FloatingIcon
            className="bottom-32 left-20"
            animationDelay="9s"
            style={{ animation: "floatReverse 24s ease-in-out infinite" }}
            glowColor="255,255,255"
            index={5}
          >
            <SiThreedotjs size={24} color="#ffffff" />
          </FloatingIcon>

          <FloatingIcon
            className="bottom-40 right-24"
            animationDelay="15s"
            glowColor="199,199,199"
            index={6}
          >
            <SiSolidity size={24} color="#C7C7C7" />
          </FloatingIcon>

          <FloatingIcon
            className="top-96 left-12"
            animationDelay="11s"
            style={{ animation: "floatSlow 21s ease-in-out infinite" }}
            glowColor="136,206,2"
            index={7}
          >
            <SiGreensock size={24} color="#88CE02" />
          </FloatingIcon>

          <FloatingIcon
            className="bottom-64 right-40"
            animationDelay="18s"
            style={{ animation: "floatReverse 19s ease-in-out infinite" }}
            glowColor="51,153,51"
            index={8}
          >
            <FaNodeJs size={24} color="#339933" />
          </FloatingIcon>

          <FloatingIcon
            className="top-52 left-8"
            animationDelay="6s"
            style={{ animation: "floatSlow 23s ease-in-out infinite" }}
            glowColor="100,108,255"
            index={9}
          >
            <SiVite size={24} color="#646CFF" />
          </FloatingIcon>
        </Suspense>
      </div>

      <div className="pt-[220px] sm:pt-[150px] lg:pt-[210px] relative z-10">
        <div className="px-6 sm:px-12 lg:px-28">
          <h1 className="head-text items-center max-w-7xl animate-fade-in-up">
            Noel
            <span className="mx-2 sm:mx-4 items-center">
              <picture>
                <source srcSet={profileWebp} type="image/webp" />
                <img
                  src={profileJpg}
                  alt="Noel profile"
                  width={48}
                  height={48}
                  className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover inline-block border border-zinc-600 
                             animate-scale-in hover:scale-110 hover:rotate-3 transition-all duration-300 ease-out cursor-pointer"
                  loading="eager"
                  fetchpriority="high"
                />
              </picture>
            </span>
            is a <GlitchText words={HERO_WORDS} loop className="" /> crafting
            digital experiences with code + creativity.
          </h1>

          <div className="mt-6 sm:mt-8 md:mt-12 flex items-start animate-fade-in-up-delay">
            <a href="#projects">
              <Button
                name="See my work"
                isBeam
                containerClass="!h-[52px] !px-10 !text-base w-full sm:w-auto min-w-[250px] sm:min-w-[280px] md:min-w-[220px] tracking-wider"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
