import {
  mobile,
  backend,
  creator,
  web,
  TODO,
  Restuaro,
  netlify,
  javascript,
  typescript,
  html,
  gitHub,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  JSON,
  docker,
  meta,
  Bootstrap,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Database,
  python,
  portfolio,
  // Ensure this line is included
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front-End developer",
    icon: backend,
  },
  {
    title: "Website Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitHub",
    icon: gitHub,
  },
  {
    name: "JSON",
    icon: JSON,
  },
  {
    name: "Database",
    icon: Database,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "ACMEGRADE",
    icon: javascript,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Profound understanding of front-end and back-end web development technologies.",
      "Hands-on experience in HTML, CSS, and JavaScript.",
      "Created diverse websites, including an e-commerce store, landing pages, and a blog page, showcasing practical application of acquired skills.",
    ],
  },
];



const projects = [
  {
    name: "E-Commerce Store",
    description:
      "This ReactJS e-commerce store uses Material-UI and CSS for modern, responsive design. It has product listings, detailed pages, a shopping cart, and a checkout process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
    ],
    image: 'image', // Use the project variable
    source_code_link: "https://github.com/nitishghht",
  },
  {
    name: "Landing Page",
    description:
      "A responsive restaurant website built with React and Tailwind CSS, featuring smooth animations and interactive elements Image on the left and description on the right.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Library",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Motion",
        color: "green-text-gradient",
      },
    ],
    image: Restuaro,
    source_code_link: "https://github.com/nitishghht",
  },
  {
    name: "TODO App",
    description:
      "This ReactJS To-Do app, styled with CSS, allows users to create, edit, delete, and mark tasks as complete. It provides a simple and efficient interface for task management.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TODO,
    source_code_link: "https://itask-your-manager.netlify.app/",
  },
  {
    name: "Portfolio",
    description:
      "Brief overview of the individual's background, skills, and career goals. Selected projects or pieces that highlight the best work. Detailed information about professional experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://codewithnit.netlify.app/",
  },
];

export { services, technologies, experiences,  projects };
