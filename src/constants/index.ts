// =======================
// IMPORT
// =======================

// Social media
import linkedin from "../assets/icons/social-media/linkedin.webp";
import github from "../assets/icons/social-media/github.webp";
import email from "../assets/icons/social-media/email.webp";
import instagram from "../assets/icons/social-media/instagram.webp";

// Types
import type { LogoSocialMedia } from "../types/header";


// Tech stack
import nextjs from "../assets/icons/tech-stack/nextjs.svg";
import react from "../assets/icons/tech-stack/react.svg";
import typescript from "../assets/icons/tech-stack/typescript.svg";
import javascript from "../assets/icons/tech-stack/javascript.svg";
import redux from "../assets/icons/tech-stack/redux.svg";
import graphql from "../assets/icons/tech-stack/graphql.svg";
import nodejs from "../assets/icons/tech-stack/nodejs.svg";
import tailwind from "../assets/icons/tech-stack/tailwind.svg";
import figma from "../assets/icons/tech-stack/figma.svg";
import mongodb from "../assets/icons/tech-stack/mongodb.svg";
import postgresql from "../assets/icons/tech-stack/postgresql.svg";


// =======================
// NAVBAR
// =======================

export const dataNavbar = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
    offset: -100,
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
    offset: -105,
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
    offset: -50,
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "footer",
    offset: 0,
  },
];


// =======================
// SOCIAL MEDIA
// =======================

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://linkedin.com/in/mattmwln",
  },
  {
    id: 1,
    logo: instagram,
    navigate: "https://instagram.com/mattmwln",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/mattmwln",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:mattmwln@gmail.com", // ✅ fix email
  },
];


// =======================
// SKILLS (BEST PRACTICE)
// =======================

export interface Skill {
  name: string;
  logo: string; // ✅ string juga
}

export const dataSkills: string[] = [
  nextjs,
  react,
  typescript,
  javascript,
  redux,
  graphql,
  nodejs,
  tailwind,
  figma,
  mongodb,
  postgresql,
];