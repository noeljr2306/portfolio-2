import Button from "../Components/Button";
import { lazy, Suspense } from "react";
const FloatingIcon = lazy(() => import("../Components/FloatingIcon"));
const profileWebp = "/noel.webp";
const profileJpg = "/noel.jpg";

const Header = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden" id="home">
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <FloatingIcon
            className="top-20 left-16 text-blue-400/30 hover:text-blue-400/60"
            animationDelay="0s"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5 8.5l-3 3 3 3M15.5 8.5l3 3-3 3M10.5 3.5L13.5 20.5" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="top-32 right-20 text-cyan-400/30 hover:text-cyan-400/60"
            animationDelay="3s"
            style={{ animation: "floatSlow 25s ease-in-out infinite" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="2" />
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16z" />
              <ellipse
                cx="12"
                cy="12"
                rx="8"
                ry="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="8"
                ry="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="8"
                ry="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                transform="rotate(120 12 12)"
              />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="top-64 left-24 text-green-400/30 hover:text-green-400/60"
            animationDelay="7s"
            style={{ animation: "floatReverse 22s ease-in-out infinite" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="top-40 right-32 text-purple-400/30 hover:text-purple-400/60"
            animationDelay="12s"
          >
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="top-80 right-16 text-sky-400/30 hover:text-sky-400/60"
            animationDelay="5s"
            style={{ animation: "floatSlow 18s ease-in-out infinite" }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="bottom-32 left-20 text-amber-400/30 hover:text-amber-400/60"
            animationDelay="9s"
            style={{ animation: "floatReverse 24s ease-in-out infinite" }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path d="M6 7l4 4-4 4M12 15h6" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="bottom-40 right-24 text-red-400/30 hover:text-red-400/60"
            animationDelay="15s"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="top-96 left-32 text-indigo-400/30 hover:text-indigo-400/60"
            animationDelay="11s"
            style={{ animation: "floatSlow 21s ease-in-out infinite" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <rect
                x="5"
                y="2"
                width="14"
                height="20"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path d="M12 18h.01" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="bottom-64 right-40 text-orange-400/30 hover:text-orange-400/60"
            animationDelay="18s"
            style={{ animation: "floatReverse 19s ease-in-out infinite" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569H7.691l.216 2.867L12 17.484l3.995-1.137.905-9.923z" />
            </svg>
          </FloatingIcon>
          <FloatingIcon
            className="top-52 left-8 text-emerald-400/30 hover:text-emerald-400/60"
            animationDelay="6s"
            style={{ animation: "floatSlow 23s ease-in-out infinite" }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <circle
                cx="6"
                cy="6"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="6"
                cy="18"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path d="M18 6a3 3 0 11-6 0 3 3 0 016 0zM6 9v6" />
            </svg>
          </FloatingIcon>
        </Suspense>
      </div>

      <div className="pt-[200px] relative z-10">
        <div className="sm:px-28 px-8">
          <h1 className="head-text items-center max-w-7xl animate-fade-in-up">
            Noel
            <span className="mx-4 items-center">
              <picture>
                <source srcSet={profileWebp} type="image/webp" />
                <img
                  src={profileJpg}
                  alt="Noel profile"
                  width={48}
                  height={48}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover inline-block border border-zinc-600 
                             animate-scale-in hover:scale-110 hover:rotate-3 transition-all duration-300 ease-out cursor-pointer"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </span>
            is a frontend developer crafting digital experiences with code + creativity.
          </h1>

          <div className="mt-10 md:mt-30 flex items-start animate-fade-in-up-delay">
            <a href="#projects">
              <Button
                name="See my work"
                isBeam
                containerClass="w-[220px] sm:w-auto min-w-[250px] sm:min-w-[280px] md:min-w-[220px] tracking-wider"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
