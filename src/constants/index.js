import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  shopify,
  carrent,
  jobit,
  tripguide,
  reacticon,
  wordpress,
  Fdevelop,
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
    title: "UI/UX Design",
    icon: mobile,
  },
  {
    title: "API Integration and Development",
    icon: backend,
  },
  {
    title: "Custom Web Animations",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Self",
    icon: reacticon,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Built and maintained dynamic web applications using React.js, enhancing user interfaces and improving overall performance.",
      "Created reusable components and optimized front-end code for speed and scalability.",
      "Implemented responsive design practices, ensuring seamless user experiences across various devices and browsers.",
      "Worked independently to identify and fix bugs, refine code, and enhance application functionality.",
      "Collaborated with designers and back-end developers to integrate APIs and implement new features.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Self",
    icon: Fdevelop,
    iconBg: "#383E56",
    date: "March 2023 - Dec 2023",
    points: [
      "Designed and developed responsive web pages using HTML, CSS, and JavaScript.",
      "Built interactive and user-friendly UI components with React.js and integrated them with backend APIs.",
      "Optimized websites for maximum speed and scalability.",
      "Collaborated with UX/UI designers to improve overall user experience and implemented new features.",
    ],
  },
  {
    title: "WordPress InterShip",
    company_name: "KPIT Board",
    icon: wordpress,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Designed, developed, and maintained dynamic WordPress websites tailored to client requirements.",
      "Customized themes and plugins to enhance website functionality and improve user experience.",
      "Optimized web pages for speed, SEO, and cross-browser compatibility, ensuring high performance and accessibility.",
      "Collaborated with content creators and designers to implement new features and designs across multiple projects.",
      "Provided ongoing support, troubleshooting, and updates to keep websites secure and up-to-date.",
    ],
  },

  {
    title: "Centralized Dynamic Timetable for AUST",
    company_name: "FYP Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Designed and developed a centralized dynamic timetable system for AUST to automate scheduling processes and enhance efficiency.",
      "Implemented core features such as conflict detection, schedule optimization, and user-friendly interfaces using JavaScript and React.js.",
      "Integrated backend APIs and database management to ensure smooth data handling and real-time updates.",
      "Conducted rigorous testing and debugging to maintain high code quality and reliability.",
      "Collaborated with university stakeholders to gather requirements, provide demonstrations, and iterate on feedback to refine the application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
