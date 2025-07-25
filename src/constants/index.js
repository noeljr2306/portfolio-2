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
  project1,
  project2,
  project3,
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
export const Education = [
  {
    id: 1,
    icon: "/ssjk.png",
    name: "Saints Simon and Jude Seminary, Kuje-Abuja",
    date: "2017-2023",
  },
  {
    id: 2,
    icon: "/vuna.jpg",
    name: "Veritas University, Bwari-Abuja",
    date: "2023 - till date",
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
    tags: [reactjs, next, tailwind, redux, git],
    image: project1,
    href: "#",
    live: "#",
  },
  {
    id: 2,
    name: "Briefly",
    description:
      "An AI-powered website application that allows users to simply paste a website link, providing a concise summary of the website.",
    tags: [reactjs, next, tailwind, redux, gsap],
    image: project2,
    href: "#",
    live: "#",
  },
  {
    id: 3,
    name: "Driven",
    description:
      "An AI-powered website application that allows users to simply paste a website link, providing a concise summary of the website.",
    tags: [reactjs, next, tailwind, redux],
    image: project3,
    href: "#",
    live: "#",
  },
  {
    id: 4,
    name: "Briefly",
    description:
      "An AI-powered website application that allows users to simply paste a website link, providing a concise summary of the website.",
    tags: [reactjs, tailwind, redux, nodejs],
    image: project3,
    href: "#",
    live: "#",
  },
];