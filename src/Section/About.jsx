import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Components/Button";
import { FiGlobe, FiMapPin, FiTable } from "react-icons/fi";
import { workflow } from "../Constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const profileCardRef = useRef(null);
  const imageCardRef = useRef(null);
  const globeCardRef = useRef(null);
  const workflowCardRef = useRef(null);
  const passionCardRef = useRef(null);
  const codeBlockRef = useRef(null);

  const [typedCode, setTypedCode] = useState({
    line1: "",
    line2: "",
    line3: "",
    line4: "",
    line5: "",
  });

  const codeLines = {
    line1: "const passion = {",
    line2: "  problemSolving: true,",
    line3: '  continuousLearning: "always",',
    line4: '  innovation: "driving force"',
    line5: "};",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          profileCardRef.current,
          imageCardRef.current,
          globeCardRef.current,
          workflowCardRef.current,
          passionCardRef.current,
        ],
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        }
      );

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      const cards = [
        profileCardRef.current,
        imageCardRef.current,
        globeCardRef.current,
      ];

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: profileCardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.create({
        trigger: workflowCardRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(workflowCardRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          });

          const workflowItems =
            workflowCardRef.current.querySelectorAll(".workflow-item");
          gsap.fromTo(
            workflowItems,
            {
              opacity: 0,
              x: -30,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              stagger: 0.15,
              delay: 0.2,
            }
          );
        },
      });

      ScrollTrigger.create({
        trigger: passionCardRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(passionCardRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            onComplete: startTypingAnimation,
          });
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const startTypingAnimation = () => {
    const typeText = (text, lineKey, delay = 0) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let currentIndex = 0;
          const typeInterval = setInterval(() => {
            if (currentIndex <= text.length) {
              setTypedCode((prev) => ({
                ...prev,
                [lineKey]: text.slice(0, currentIndex),
              }));
              currentIndex++;
            } else {
              clearInterval(typeInterval);
              resolve();
            }
          }, 50);
        }, delay);
      });
    };

    const animateTyping = async () => {
      await typeText(codeLines.line1, "line1", 200);
      await typeText(codeLines.line2, "line2", 100);
      await typeText(codeLines.line3, "line3", 100);
      await typeText(codeLines.line4, "line4", 100);
      await typeText(codeLines.line5, "line5", 100);
    };

    animateTyping();
  };

  return (
    <section ref={aboutRef} className="sm:px-6 px-5 my-20" id="about">
      <h1 ref={headingRef} className="heading">
        About Me
      </h1>
      <div className="grid xl:grid-cols-4 xl:gird-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-2 xl:col-span-2">
          <div ref={profileCardRef} className="grid-container">
            <div className="flex flex-col mt-3">
              <div>
                <h1 className="grid-headtext">Hi I&apos;m Noel Eruotor</h1>
                <p className="grid-subtext">
                  <br />I am a software developer with over three years of
                  experience. I have optimized my skills in the development of
                  web and mobile applications. I am also learning and adapting
                  to new technologies to improve my skill stack.
                </p>
              </div>
              <div className="flex mt-5 gap-3">
                <div className="flex gap-1 border border-zinc-800 bg-zinc-800 p-2 rounded-lg transform hover:scale-105 transition-transform duration-200">
                  <FiMapPin className="mt-1 text-green-500" />
                  <p className="green-text-gradient">Nigeria</p>
                </div>
                <div className="flex gap-1 border p-2 rounded-lg border-zinc-800 bg-zinc-800 transform hover:scale-105 transition-transform duration-200">
                  <FiGlobe className="mt-1 text-orange-500" />
                  <p className="orange-text-gradient">English</p>
                </div>
                <div className="flex gap-1 border p-2 rounded-lg text-nowrap border-zinc-800 bg-zinc-800 transform hover:scale-105 transition-transform duration-200">
                  <FiTable className="mt-1 text-blue-500" />
                  <p className="blue-text-gradient">Software Dev.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1">
          <div
            ref={imageCardRef}
            className="w-full h-full bg-zinc-900 border-zinc-800 rounded-lg flex flex-col gap-5 overflow-hidden"
          >
            <img
              src="/src/assets/profile.jpg"
              alt="Noel Eruotor"
              className="w-full border rounded-xl border-gray-700 h-fit object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1 xl:row-span-2">
          <div ref={globeCardRef} className="grid-container">
            <div className="rounded-3xl w-full sm:h-[350px] h-[360px] flex justify-center items-center">
              <img
                src="/src/assets/map.png"
                alt="Map of Nigeria"
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div>
              <h2 className="grid-headtext">Based in Abuja, Nigeria</h2>
              <p className="grid-subtext mt-8">
                Passionate about solving real problems through code and
                creativity, with a strong focus on remote collaboration across
                diverse teams.
              </p>
            </div>
            <Button
              name="Contact Me"
              containerClass="px-8 mt-8 w-full"
              isBeam
            />
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1">
          <div
            ref={workflowCardRef}
            className="grid-container relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="grid-headtext flex items-center gap-2">
                My work process
              </h2>
              <div className="flex flex-col gap-3 mt-6">
                {workflow.map(({ id, name, icon }, index) => (
                  <div
                    key={id}
                    className="workflow-item list-none flex items-center gap-3 border border-zinc-700/50 bg-gradient-to-r from-zinc-800/80 to-zinc-800/60 p-2 rounded-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-zinc-700/80 hover:to-zinc-700/60 hover:border-zinc-600/50 group backdrop-blur-sm"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="flex-1">
                      <p className="grid-subtext group-hover:text-white transition-colors duration-300">
                        {name}
                      </p>
                      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 mt-1"></div>
                    </div>
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-blue-400 text-sm">{icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 xl:col-span-2">
          <div ref={passionCardRef} className="grid-container">
            <h2 className="grid-headtext">My passion for coding</h2>
            <div className="bg-zinc-800/50 rounded-xl p-6 mb-6 border border-zinc-700/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-50"></div>
              <div
                ref={codeBlockRef}
                className="font-mono text-sm space-y-2 relative z-10"
              >
                <div className="text-purple-400">
                  {typedCode.line1}
                  {typedCode.line1.length > 0 &&
                  typedCode.line1.length === codeLines.line1.length ? (
                    ""
                  ) : typedCode.line1.length > 0 &&
                    typedCode.line1.length < codeLines.line1.length ? (
                    <span className="animate-pulse">|</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-blue-400 ml-4">
                  {typedCode.line2}
                  {typedCode.line2.length > 0 &&
                  typedCode.line2.length < codeLines.line2.length ? (
                    <span className="animate-pulse">|</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-green-400 ml-4">
                  {typedCode.line3}
                  {typedCode.line3.length > 0 &&
                  typedCode.line3.length < codeLines.line3.length ? (
                    <span className="animate-pulse">|</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-yellow-400 ml-4">
                  {typedCode.line4}
                  {typedCode.line4.length > 0 &&
                  typedCode.line4.length < codeLines.line4.length ? (
                    <span className="animate-pulse">|</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-purple-400">
                  {typedCode.line5}
                  {typedCode.line5.length > 0 &&
                  typedCode.line5.length < codeLines.line5.length ? (
                    <span className="animate-pulse">|</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <p className="grid-subtext">
              I love solving problems and building things through code.
              Programming isn&apos;t just my profession—it&apos;s my passion. I
              enjoy exploring new technologies, and enhancing my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
