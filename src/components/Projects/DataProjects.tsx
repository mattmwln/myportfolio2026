// DataProjects.ts
import reactLogo from "../../assets/icons/tech-stack/react.svg";
import tailwindLogo from "../../assets/icons/tech-stack/tailwind.svg";
import nextjsLogo from "../../assets/icons/tech-stack/nextjs.svg";
import nodejsLogo from "../../assets/icons/tech-stack/nodejs.svg";
import javascriptLogo from "../../assets/icons/tech-stack/javascript.svg";
import typescriptLogo from "../../assets/icons/tech-stack/typescript.svg";
import viteLogo from "../../assets/icons/tech-stack/vite.svg";
import figmaLogo from "../../assets/icons/tech-stack/figma.svg";

import caktadentLogo from "../../assets/icons/project/caktadent.webp";
import fattkaLogo from "../../assets/icons/project/fattka.webp";
import alfaruqLogo from "../../assets/icons/project/alfaruq.webp";

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
    description:
      "Platform website pendukung dan infrastruktur digital Caktadent, dengan pengembangan frontend dan desain UI/UX.",
  },
  {
    id: 2,
    title: "PT Al-Faruq Export",
    category: "Branding & Web",
    img_url: alfaruqLogo,
    logo: nextjsLogo,
    tech_stack_logo: [nextjsLogo, nodejsLogo, tailwindLogo, figmaLogo],
    navigate_url: null,
    award: null,
    description:
      "Website korporat PT Al-Faruq Export Indonesia untuk branding internasional, dengan desain responsif dan optimasi performa web.",
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
    description:
      "Website PT Fattka menggunakan React, Tailwind CSS, Vite, dan JavaScript.",
  },
];

export default DATA_PROJECTS;
