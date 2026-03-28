// DataProjects.ts
import reactLogo from "../../assets/icons/tech-stack/react.svg";
import tailwindLogo from "../../assets/icons/tech-stack/tailwind.svg";
import nextjsLogo from "../../assets/icons/tech-stack/nextjs.svg";
import nodejsLogo from "../../assets/icons/tech-stack/nodejs.svg";
import javascriptLogo from "../../assets/icons/tech-stack/javascript.svg";
import typescriptLogo from "../../assets/icons/tech-stack/typescript.svg";
import viteLogo from "../../assets/icons/tech-stack/vite.svg";
import figmaLogo from "../../assets/icons/tech-stack/figma.svg";

import caktadentLogo from "../../assets/icons/project/caktadent.png";
import fattkaLogo from "../../assets/icons/project/fattka.png";
import alfaruqLogo from "../../assets/icons/project/alfaruq.png";

const DATA_PROJECTS = [
  {
    id: 1,
    title: "Caktadent Ecosystem",
    category: "Company Project",
    img_url: caktadentLogo,
    logo: reactLogo,
    tech_stack_logo: [reactLogo, tailwindLogo, viteLogo, typescriptLogo],
    navigate_url: "https://github.com/mattmwln/Caktadent",
    award: "Top 3 Achievement",
    description: "Website Caktadent dibuat sebagai platform digital ..."
  },
  {
    id: 2,
    title: "PT Al-Faruq Export",
    category: "Branding & Web",
    img_url: alfaruqLogo,
    logo: nextjsLogo,
    tech_stack_logo: [nextjsLogo, nodejsLogo, tailwindLogo, figmaLogo],
    navigate_url: "#",
    award: null,
    description: "Website PT Alfaruq Export Indonesia dibuat sebagai platform ..."
  },
  {
    id: 3,
    title: "PT Fattka",
    category: "Client Project",
    img_url: fattkaLogo,
    logo: fattkaLogo,
    tech_stack_logo: [reactLogo, tailwindLogo, viteLogo, javascriptLogo],
    navigate_url: "https://pt-fattka.vercel.app/",
    award: null,
    description: "Website PT Fattka dibuat sebagai platform digital ..."
  }
];

export default DATA_PROJECTS;