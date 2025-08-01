import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Instagram, Twitter } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const socialIconsRef = useRef([]);
  const linksRef = useRef([]);

  const LinkedInIcon = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="transition-colors duration-300"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;
    const socialIcons = socialIconsRef.current;
    const links = linksRef.current;

    gsap.set(content, { opacity: 0, y: 30 });
    gsap.set(socialIcons, { opacity: 0, scale: 0, rotation: -180 });
    gsap.set(links, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })

      .to(
        socialIcons,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.4"
      )

      .to(
        links,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.3"
      );

    socialIcons.forEach((icon) => {
      if (icon) {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    links.forEach((link) => {
      if (link) {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            y: -2,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/noeljr2306",
      icon: (
        <img src={Github} alt="GitHub" className="h-7 w-7 object-contain" />
      ),
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/noel-eruotor-7b7210316",
      icon: <LinkedInIcon />,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/enoel.jr",
      icon: (
        <img
          src={Instagram}
          alt="Instagram"
          className="h-7 w-7 object-contain"
        />
      ),
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/noel_jr23",
      icon: (
        <img src={Twitter} alt="Twitter" className="h-7 w-7 object-contain" />
      ),
      color: "hover:text-blue-400",
    },
  ];

  const footerLinks = [
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
    { name: "Resume", url: "/src/assets/resume.pdf" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative sm:px-10 px-5 sm:py-12 py-8 border-t border-gray-700 bg-gradient-to-b from-black/85 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          <div className="flex-1 max-w-md">
            <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Eruotor Noel
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Passionate developer crafting innovative digital experiences.
              Turning ideas into reality through clean code and creative
              solutions.
            </p>
            <div className="flex items-center gap-2 text-zinc-500 text-xs">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>

          <div className="flex-1 lg:text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-wrap lg:justify-center gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  ref={(el) => (linksRef.current[index] = el)}
                  href={link.url}
                  className="text-zinc-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex-1 lg:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex lg:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  ref={(el) => (socialIconsRef.current[index] = el)}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zinc-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-zinc-500">
            <p>&copy; 2024 Eruotor Noel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
