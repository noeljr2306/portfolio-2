import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../Components/Button";

const Header = () => {
  const headerRef = useRef(null);
  const introTextRef = useRef(null);
  const nameRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          introTextRef.current,
          nameRef.current,
          headlineRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.set(canvasRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(introTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })

        .to(
          nameRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )

        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )

        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={headerRef}
      className="w-full min-h-screen mx-auto flex relative"
      id="home"
    >
      <div className="absolute inset-0 xl:top-[120px] top-[190px] max-w-7xl mx-auto flex align-middle gap-5 sm:px-[100px] px-5">
        <div>
          <p
            ref={introTextRef}
            className="font-base xl:text-[35px] text-[20px] text-center sm:mb-[20px] mb-[28px] text-zinc-600"
          >
            Hi I`m{" "}
            <span
              ref={nameRef}
              className="text-zinc-300 noel-font inline-block noel-glow"
            >
              Noel
            </span>
            <br />
            Software developer based in Nigeria
          </p>
          <h1 ref={headlineRef} className="head-text text-center">
            Building wonderful digital experiences through Technology
          </h1>
          <div
            ref={buttonRef}
            className="absolute sm:bottom-[50px] bottom-[160px] left-0 right-0 w-full z-10 sm:px-10 px-5"
          >
            <a href="#works">
              <Button
                name="See my work"
                isBeam
                containerClass="sm:w-fit w-[300px] sm:min-w-[320px] tracking-wider"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
