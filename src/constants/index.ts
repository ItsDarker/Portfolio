import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  figma,
  docker,
  pondy,
  iit,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Electric Vehicle Technology",
    icon: mobile,
  },
  {
    title: "Power Systems Engineering",
    icon: web,
  },
  {
    title: "Electrical Troubleshooting",
    icon: backend,
  },
  {
    title: "Sustainable Energy Solutions",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "MATLAB",
    icon: mongodb,
  },
  {
    name: "Simulink",
    icon: reactjs,
  },
  {
    name: "PSIM",
    icon: javascript,
  },
  {
    name: "Altium",
    icon: nodejs,
  },
  {
    name: "Arduino IDE",
    icon: redux,
  },
  {
    name: "EasyEDA",
    icon: figma,
  },
  {
    name: "Multisim",
    icon: tailwind,
  },
  {
    name: "Control Systems",
    icon: typescript,
  },
  {
    name: "Power Electronics",
    icon: html,
  },
  {
    name: "Circuit Design",
    icon: css,
  },
  {
    name: "Embedded Systems",
    icon: threejs,
  },
  {
    name: "IoT Technologies",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Bachelor of Technology - Electrical & Electronics Engineering",
    companyName: "Pondicherry University, India",
    icon: pondy,
    iconBg: "#FFFFFF",
    date: "September 2019 - May 2023",
    points: [
      "Completed comprehensive coursework in power systems, control systems, and electrical machines.",
      "Gained strong foundation in circuit analysis, electromagnetic theory, and digital electronics.",
      "Developed expertise in electrical troubleshooting and electrical wiring.",
      "Participated in hands-on laboratory experiments and engineering design projects.",
    ],
  },
  {
    title: "Master of Science - Electrical Engineering",
    companyName: "Illinois Institute of Technology, Chicago, USA",
    icon: iit,
    iconBg: "#CC0000",
    date: "August 2024 - December 2026",
    points: [
      "Specializing in Advanced Power Systems and Electric Vehicle Technology.",
      "Engaged in advanced coursework: Systems Engineering, Electric Utilities Fundamentals, Electric Power Systems.",
      "Conducting research in hybrid vehicle technology and sustainable transportation solutions.",
      "Applying theoretical knowledge through intensive laboratory work focused on electrified transportation.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Spot Welding Using PWM Controller",
    description:
      "A PWM-controlled spot welding system that precisely regulates weld current and duration to improve weld quality, prevent overheating, and enhance energy efficiency. The system uses precise control over the amount of current flowing through the weld, optimizing weld strength while reducing overheating risk and energy consumption.",
    tags: [
      {
        name: "PWM-Controller",
        color: "blue-text-gradient",
      },
      {
        name: "STM32",
        color: "green-text-gradient",
      },
      {
        name: "Power-Electronics",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Smart Biofloc Fish Farming",
    description:
      "A smart biofloc fish farming system using sensors, microcontrollers, and IoT to automatically monitor and maintain optimal water quality. The system continuously monitors temperature, pH, turbidity, and water level, automatically activating pumps, motors, and heaters to stabilize the aquatic environment while streaming live data to a cloud interface.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Embedded-C",
        color: "green-text-gradient",
      },
      {
        name: "Sensors",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Electric Vehicle Battery Management System",
    description:
      "Developed a comprehensive battery management system for hybrid vehicles focusing on optimizing charge/discharge cycles, thermal management, and state-of-charge estimation. Enhanced battery life and vehicle efficiency through advanced control algorithms.",
    tags: [
      {
        name: "ev-technology",
        color: "blue-text-gradient",
      },
      {
        name: "matlab",
        color: "green-text-gradient",
      },
      {
        name: "control-systems",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
