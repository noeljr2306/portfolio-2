import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BallCanvas from "../assets/Canvas/Ball";
import { technologies } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".tech-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="sm:px-16 px-8" ref={sectionRef}>
      <h2 className="heading">My Tech Arsenal</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 p-6">
        {technologies.map((technology) => (
          <div
            className="w-[100px] h-[100px] tech-item"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-gray-300 text-[12px] text-center font-semibold mt-2">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
