import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github } from "../assets";
import { Projects } from "../Constants";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const projectCards = projectsRef.current;

    gsap.set(heading, { opacity: 0, y: 50 });
    gsap.set(description, { opacity: 0, y: 30 });
    gsap.set(projectCards, { opacity: 0, y: 60, scale: 0.9 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    // Animate description
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    // Animate project cards with stagger
    .to(projectCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.3");

    // Add hover animations for project cards
    projectCards.forEach((card) => {
      if (card) {
        const image = card.querySelector('img');
        const githubIcon = card.querySelector('.github-icon');
        
        // Hover animation for the entire card
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
          
          // Subtle image zoom on hover
          gsap.to(image, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        // GitHub icon hover effect
        if (githubIcon) {
          githubIcon.addEventListener('mouseenter', () => {
            gsap.to(githubIcon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.4,
              ease: "back.out(1.7)"
            });
          });

          githubIcon.addEventListener('mouseleave', () => {
            gsap.to(githubIcon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="sm:px-14 px-7 sm:py-20 py-10" 
      id="projects"
    >
      <h1 ref={headingRef} className="heading">
        My Selected Projects
      </h1>
      <p 
        ref={descriptionRef}
        className="mt-3 text-zinc-400 text-[17px] max-w-3xl leading-[30px]"
      >
        I have applied my knowledge and creativity to deliver innovative
        solutions that drive results. These are my recent projects showcasing my
        skills and expertise. Each project is briefly described with links to
        code repositories and live demos.
      </p>
      
      <div className="mt-20 grid gap-7 sm:grid-cols-2 grid-cols-1">
        {Projects.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (projectsRef.current[index] = el)}
            className="bg-zinc-800 shadow-inner shadow-zinc-400/40 p-5 rounded-2xl w-full cursor-pointer transition-shadow hover:shadow-zinc-400/60"
          >
            <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt="project"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  className="github-icon w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black hover:bg-zinc-900 transition-colors"
                  onClick={() => window.open(item.href, '_blank')}
                >
                  <img
                    src={Github}
                    alt=""
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-5 flex justify-between flex-col">
              <h3 className="font-bold xl:text-2xl md:text-xl text-base">
                {item.name}
              </h3>
              <p className="grid-subtext">{item.description}</p>
            </div>
            
            <div className="flex items-center justify-between gap-10 mt-7 mb-3">
              <div className="flex items-center">
                {item.tags.map((icon, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="border border-zinc-700 rounded-full bg-black xl:w-9 xl:h-9 w-8 h-8 flex justify-center items-center"
                  >
                    <img src={icon} alt="" className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex">
                <a
                  href={item.live}
                  className="xl:text-[15px] md:text-s text-sm text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;