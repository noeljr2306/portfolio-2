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
  burnaboy,
  freshcut,
  next,
  gsap,
  vscode,
  krafta,
  briefly,
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
    name: "Krafta",
    slug: "krafta",
    description:
      "A sophisticated digital ecosystem connecting homeowners with skilled service professionals through a seamless, trust-based marketplace.",
    tags: [next, tailwind, typescript],
    image: krafta,
    href: "https://github.com/krafta",
    live: "https://krafta-olo83n2lf-noeljr2306s-projects.vercel.app/",
    problemStatement:
      "The service industry often suffers from a lack of transparency and accessibility, making it difficult for users to find vetted technicians on demand.",
    useCases: [
      "Homeowners can source verified electrical or plumbing experts within minutes.",
      "Professional technicians can digitize their workflow and scale their client base.",
      "Contractors can manage service requests through a centralized, intuitive interface.",
    ],
    solutionDescription:
      "Engineered a high-performance marketplace using Next.js for server-side rendering and TypeScript for robust type safety. Integrated dynamic filtering and real-time availability to bridge the gap between service providers and seekers.",
    challengesLearnings:
      "Navigated the complexities of managing multi-user role state and optimized the search infrastructure to handle geographical data efficiently.",
  },
  {
    id: 5,
    name: "Briefly",
    slug: "briefly",
    description:
      "A cutting-edge AI utility designed to combat information overload by distilling long-form web content into high-impact, digestible summaries.",
    tags: [reactjs, tailwind, redux],
    image: briefly,
    href: "https://github.com/noeljr2306/briefly.git",
    live: "https://brieflyaisummarizer.netlify.app/",
    problemStatement:
      "In an era of digital saturation, professionals and students struggle to filter through lengthy articles and documentation to find core insights quickly.",
    useCases: [
      "Researchers can perform rapid literature reviews by extracting key findings from multiple URLs.",
      "Content creators can analyze competitor long-form content for strategy inspiration in seconds.",
      "Knowledge workers can bypass clickbait and fluff to get straight to the essential data points.",
    ],
    solutionDescription:
      "Engineered an intelligent summarization engine utilizing Next.js for a performant frontend and Redux for managing complex application states. The system leverages advanced NLP (Natural Language Processing) APIs to parse and synthesize web content into structured executive summaries.",
    challengesLearnings:
      "Mastered the integration of asynchronous AI middleware and addressed the complexities of handling diverse DOM structures during web scraping and content extraction.",
  },
  {
    id: 3,
    name: "The Burna Boy Experience",
    slug: "burna-boy-website",
    description:
      "An immersive, high-fidelity digital tribute that utilizes advanced motion graphics to reflect the vibrant energy and artistry of Burna Boy.",
    tags: [reactjs, tailwind, gsap],
    image: burnaboy,
    href: "https://github.com/noeljr2306/burnaboy-website.git",
    live: "https://burnaboy-website.vercel.app",
    problemStatement:
      "Static portfolios often fail to capture the essence of high-energy performers, resulting in a flat user experience that doesn't resonate with the brand.",
    useCases: [
      "Fans can engage with a narrative-driven timeline of the artist's discography.",
      "Event promoters can leverage the site's high visual impact for tour marketing.",
      "New listeners can explore a curated, interactive biography that feels alive.",
    ],
    solutionDescription:
      "Orchestrated a cinematic web experience using GSAP (GreenSock) for scroll-triggered orchestrations and intricate timeline animations. Balanced heavy visual assets with lazy-loading techniques to ensure performance wasn't sacrificed for aesthetics.",
    challengesLearnings:
      "Deep-dived into the math of scroll-based triggers and learned the delicate balance of maintaining a high frame rate while running complex SVG animations.",
  },
  {
    id: 4,
    name: "Freshcut",
    slug: "freshcut",
    description:
      "A premium grooming interface that redefines the barbershop experience through a minimalist, service-oriented digital storefront.",
    tags: [reactjs, tailwind],
    image: freshcut,
    href: "https://github.com/noeljr2306/freshcuts.git",
    live: "https://freshcuts-nine.vercel.app/",
    problemStatement:
      "Local service businesses often struggle with unprofessional online identities that don't reflect the quality of their physical craftsmanship.",
    useCases: [
      "Clients can browse detailed grooming services and select their preferred stylist.",
      "Shop owners can present a luxury brand image that justifies premium pricing.",
      "Busy professionals can book and manage their grooming appointments on the go.",
    ],
    solutionDescription:
      "Crafted a modern, 'mobile-first' booking platform with a focus on visual hierarchy and typography. Implemented a logical flow that guides the user from service discovery to final confirmation in under four clicks.",
    challengesLearnings:
      "Strengthened my understanding of 'aesthetic-usability'—how a beautiful design can actually make a system feel more functional and trustworthy to the end-user.",
  },
];
