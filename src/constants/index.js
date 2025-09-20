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
  freshcut,
  next,
  gsap,
  vscode,
  autoflex,
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
    color: "#E34F26",
  },
  {
    name: "CSS 3",
    icon: css,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: typescript,
    color: "#3178C6",
  },
  {
    name: "React JS",
    icon: reactjs,
    color: "#61DAFB",
  },
  {
    name: "Next JS",
    icon: next,
    color: "#fff",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    color: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#38BDF8",
  },
  {
    name: "Node JS",
    icon: nodejs,
    color: "#339933",
  },
  {
    name: "Three JS",
    icon: threejs,
    color: "#fff",
  },
  {
    name: "Git",
    icon: git,
    color: "#F05032",
  },
  {
    name: "Figma",
    icon: figma,
    color: "#1ABCFE",
  },
  {
    name: "Gsap",
    icon: gsap,
    color: "#BADA55",
  },
  {
    name: "Visual Studio Code IDE",
    icon: vscode,
    color: "#007ACC",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Briefly",
    description:
      "An AI-powered website application that allows users to simply paste a website link, providing a concise summary of the website. It is ideal for researchers, content creators and anyone seeking for quick understanding.",
    tags: [reactjs, tailwind, redux],
    image: briefly,
    href: "https://github.com/noeljr2306/briefly-ai-summarizer-website.git",
    live: "https://brieflyaisummarizer.netlify.app/",
  },
  {
    id: 5,
    name: "AutoFlex",
    description:
      "A modern, responsive car rental website UI with a clean layout and easy navigation, designed to enhance user experience and streamline the booking process.",
    tags: [reactjs, tailwind],
    image: autoflex,
    href: "https://github.com/noeljr2306/autoflex.git",
    live: "https://autoflex-hfei.vercel.app/",
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
