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
  studio,
  next,
  gsap,
  vscode,
  krafta,
  medipoint,
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
    href: "https://github.com/noeljr2306/krafta.git",
    live: "https://krafta-eight.vercel.app/",
    problemStatement:
      "The service industry often suffers from a lack of transparency and accessibility, making it difficult for users to find vetted technicians on demand.",
    useCases: [
      "Homeowners can source verified electrical or plumbing experts within minutes.",
      "Professional technicians can digitize their workflow and scale their client base.",
      "Contractors can manage service requests through a centralized, intuitive interface.",
      "Administrators can oversee platform health, verify service providers, and manage dispute resolution via a dedicated dashboard.",
    ],
    solutionDescription:
      "Engineered a high-performance marketplace and administrative command center using Next.js and TypeScript. The platform features a dual-interface architecture: a consumer-facing booking engine and a comprehensive admin dashboard for user vetting, service categorization, and real-time platform monitoring.",
    challengesLearnings:
      "Navigated the complexities of managing multi-user role state—specifically implementing RBAC (Role-Based Access Control) to ensure secure boundaries between public users, service pros, and internal admins.",
  },
  {
    id: 2,
    name: "Medipoint",
    slug: "medipoint",
    description:
      "A patient-centric healthcare portal designed to simplify medical scheduling and bridge the communication gap between clinics and patients.",
    tags: [next, tailwind, typescript],
    image: medipoint,
    href: "https://github.com/noeljr2306/medipoint-system.git",
    live: "https://medipoint-system-blue.vercel.app/",
    problemStatement:
      "Traditional medical booking systems are often fragmented and cumbersome, leading to missed appointments and administrative overhead for clinics.",
    useCases: [
      "Patients can view real-time practitioner availability and secure slots instantly.",
      "Healthcare providers can streamline their daily schedules and reduce patient wait times.",
      "Medical administrators can manage patient records and visit history through a clean dashboard.",
    ],
    solutionDescription:
      "Developed a responsive scheduling system with a focus on 'frictionless' UI. Leveraged React's component-driven architecture to build a reusable booking engine that prioritizes accessibility and user data privacy.",
    challengesLearnings:
      "Focused on mastering complex state management for date-time logic and refined my approach to building accessible, mobile-first layouts.",
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
    name: "A 3D customizer studio",
    slug: "3dcustomizer",
    description:
      "An interactive 3D shirt customisation studio that lets users design their own apparel in real time. From painting directly onto the fabric to applying images and graphics, the platform transforms a plain shirt into a personal canvas where creativity meets technology.",
    tags: [reactjs, threejs, tailwind],
    image: studio,
    href: "https://github.com/noeljr2306/3d-customizer.git",
    live: "https://3d-customizer-steel.vercel.app/",
    problemStatement:
      "Most online clothing stores limit customers to pre-designed apparel, leaving little room for personal creativity. Users who want something unique often have no intuitive way to visualise or experiment with their designs before production.",
    useCases: [
      "Users can paint directly onto a 3D shirt model to create completely unique designs.",
      "Creators can upload images, logos, or graphics and instantly apply them to the shirt surface.",
      "Designers can experiment with colours, textures, and placements before finalising their concept.",
    ],
    solutionDescription:
      "Built an immersive browser-based customisation experience using modern web technologies. The platform renders a realistic 3D shirt that users can rotate, inspect, and modify in real time. Features like decal uploads, colour editing, and live texture painting allow users to transform a blank shirt into a personalised design while instantly seeing the results.",
    challengesLearnings:
      "Working with 3D rendering on the web pushed me to deeply understand real-time state management, texture mapping, and performance optimisation. I learned how small UI decisions can dramatically improve creative workflows, ensuring the experience feels smooth, intuitive, and fun for users designing their own apparel.",
  },
];
