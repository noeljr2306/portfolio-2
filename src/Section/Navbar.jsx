import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { navLinks } from "../constants";
import { RiCloseLine } from "react-icons/ri";
import { FaBars, FaGithub } from "react-icons/fa";
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import TimeLocation from "../Components/TimeLocation";

const navIcons = {
  Home: FiHome,
  About: FiUser,
  Projects: FiFolder,
  Contact: FiMail,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const el = menuRef.current;
    if (!el) return;

    if (isOpen) {
      gsap.set(el, { display: "block" });
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
    }
  }, [isOpen]);

  // Desktop: icon-only nav with hover tooltip + active-section highlight
  const NavIcons = () => (
    <ul className="flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/10">
      {navLinks.map(({ id, href, name }) => {
        const sectionId = href.replace("#", "");
        const Icon = navIcons[name];
        const isActive = activeSection === sectionId;

        return (
          <li key={id} className="relative group">
            <a
              href={href}
              aria-label={name}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-smooth ${
                isActive
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon size={18} />
            </a>
            <span
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-sora text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-smooth"
            >
              {name}
            </span>
          </li>
        );
      })}
    </ul>
  );

  // Mobile: text list, unchanged behavior from before
  const MobileNavItems = () => (
    <ul className="flex flex-col items-center gap-4 w-full relative z-20">
      {navLinks.map(({ id, href, name }) => {
        const sectionId = href.replace("#", "");
        const isActive = activeSection === sectionId;
        return (
          <li key={id} className="w-full text-center">
            <a
              href={href}
              className={`text-sm md:text-base block py-2 rounded-xl font-poppins transition-all hover:bg-white/5 ${
                isActive ? "text-white bg-white/5" : "text-zinc-400 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </a>
          </li>
        );
      })}
      <li className="w-full pt-2">
        <a
          href="https://github.com/noeljr2306"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium text-sm"
        >
          <FaGithub /> GitHub
        </a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-50">
        <div className="bg-black/60 backdrop-blur-xl rounded-full shadow-lg border border-white/10">
          <div className="flex justify-between items-center py-2 px-6">
            <div className="flex items-center gap-5">
              <a href="/" className="text-xl md:text-2xl text-white font-bold shrink-0">
                Noel Jr.<span className="waving ml-1">✌🏾</span>
              </a>
              <TimeLocation className="hidden lg:flex" />
            </div>

            <nav className="hidden lg:flex items-center">
              <NavIcons />
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/noeljr2306"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all border border-white/10"
              >
                <FaGithub size={20} />
              </a>

              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none lg:hidden p-1"
              >
                {isOpen ? <RiCloseLine size={24} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className="absolute left-5 right-5 bg-zinc-900/98 backdrop-blur-2xl overflow-hidden z-[60] mx-auto lg:hidden rounded-3xl border border-white/10 mt-3"
        style={{ display: "none", height: 0, opacity: 0 }}
      >
        <nav className="px-6 py-6">
          <MobileNavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;