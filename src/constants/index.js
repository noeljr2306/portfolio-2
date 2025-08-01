import {
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  figma,
  threejs,
  git,
  briefly,
  burnaboy,
  connectly,
  freshcut,
  next,
  gsap,
  vscode,
} from "../assets";
import {
  RiBug2Line,
  RiCheckDoubleLine,
  RiCodeBoxLine,
  RiPaintBrushLine,
  RiRocket2Line,
} from "react-icons/ri";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];
export const workflow = [
  {
    id: 1,
    name: "Planning & Research",
    icon: RiCheckDoubleLine,
  },
  {
    id: 2,
    name: "Design & Prototyping",
    icon: RiPaintBrushLine,
  },
  {
    id: 3,
    name: "Development & Coding",
    icon: RiCodeBoxLine,
  },
  {
    id: 4,
    name: "Testing & Debugging",
    icon: RiBug2Line,
  },
  {
    id: 5,
    name: "Deployment & Maintenance",
    icon: RiRocket2Line,
  },
];
export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Gsap",
    icon: gsap,
  },
  {
    name: "Visual Studio Code IDE",
    icon: vscode,
  },
];

export const Projects = [
  {
    id: 1,
    name: "Briefly",
    description:
      "An AI-powered website application that allows users to simply paste a website link, providing a concise summary of the website.",
    tags: [reactjs, tailwind, redux],
    image: briefly,
    href: "https://github.com/noeljr2306/briefly-ai-summarizer-website.git",
    live: "https://brieflyaisummarizer.netlify.app/",
  },
  {
    id: 5,
    name: "Connectly",
    description:
      "A straightforward contact management system that allows users to create, view, update, and delete contacts. Built with a clean UI and efficient state handling for smooth user interaction.",
    tags: [reactjs, tailwind],
    image: connectly,
    href: "https://github.com/noeljr2306/contact-manager.git",
    live: "https://https://vercel.com/noeljr2306s-projects/contact-management-system/F8iPm4XEUa1g4Fa99ZduJ4PKoWrG",
  },

  {
    id: 3,
    name: "A GSAP Animated Website Of Burna Boy",
    description:
      "A visually engaging website dedicated to Burna Boy, featuring smooth GSAP animations, interactive scrolling effects, and dynamic visuals to showcase his music and biography.",
    tags: [reactjs, tailwind, gsap],
    image: burnaboy,
    href: "https://burnaboy-website.vercel.app",
    live: "https://github.com/noeljr2306/burnaboy-website.git",
  },
  {
    id: 4,
    name: "Freshcut",
    description:
      "A modern barbershop website with a clean design, showcasing services, barber profiles, and an integrated booking system. Built for a seamless user experience across devices.",
    tags: [reactjs, tailwind],
    image: freshcut,
    href: "https://github.com/noeljr2306/freshcuts.git",
    live: "https://freshcuts-nine.vercel.app/",
  },
];
