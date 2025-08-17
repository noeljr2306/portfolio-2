import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../Components/Button";

const Header = () => {
  const headerRef = useRef(null);
  const introTextRef = useRef(null);
  const nameRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          introTextRef.current,
          nameRef.current,
          line1Ref.current,
          line2Ref.current,
          line3Ref.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );
      
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

        .to(line1Ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.3")

        .to(line2Ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.4")

        .to(line3Ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.4")

        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
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
      <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-5 sm:px-[100px] px-5 pt-[160px] sm:pt-[120px]">
        <div className="w-full max-w-3xl text-center">
          <p
            ref={introTextRef}
            className="font-base xl:text-[35px] text-[20px] text-zinc-600 mb-6"
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
          <div className="space-y-2">
            <h1 ref={line1Ref} className="head-text block">
              Building wonderful digital
            </h1>
            <h1 ref={line2Ref} className="head-text block">
              experiences through
            </h1>
            <h1 ref={line3Ref} className="head-text block">
              technology
            </h1>
          </div>
          <div
            ref={buttonRef}
            className="mt-10 md:mt-30"
          >
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
