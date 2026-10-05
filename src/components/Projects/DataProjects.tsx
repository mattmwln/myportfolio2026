import reactLogo from "../../assets/icons/tech-stack/react.svg";
import tailwindLogo from "../../assets/icons/tech-stack/tailwind.svg";
import nextjsLogo from "../../assets/icons/tech-stack/nextjs.svg";
import nodejsLogo from "../../assets/icons/tech-stack/nodejs.svg";
import javascriptLogo from "../../assets/icons/tech-stack/javascript.svg";
import typescriptLogo from "../../assets/icons/tech-stack/typescript.svg";
import viteLogo from "../../assets/icons/tech-stack/vite.svg";
import figmaLogo from "../../assets/icons/tech-stack/figma.svg";

import caktadentPreview from "../../assets/icons/project/caktadent-card.webp";
import fattkaPreview from "../../assets/icons/project/fattka-card.webp";
import alfaruqPreview from "../../assets/icons/project/alfaruq-card.webp";

const DATA_PROJECTS: Projects[] = [
  {
    id: 1,
    title: "Caktadent Ecosystem",
    category: "Company Project",
    img_url: caktadentPreview,
    tech_stack: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Vite", logo: viteLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
    navigate_url: "https://github.com/mattmwln/Caktadent",
    award: "Top 3 Achievement",
    description:
      "Platform website pendukung dan infrastruktur digital Caktadent, dengan pengembangan frontend dan desain UI/UX.",
  },
  {
    id: 2,
    title: "PT Al-Faruq Export",
    category: "Branding & Web",
    img_url: alfaruqPreview,
    tech_stack: [
      { name: "Next.js", logo: nextjsLogo },
      { name: "Node.js", logo: nodejsLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Figma", logo: figmaLogo },
    ],
    navigate_url: null,
    award: null,
    description:
      "Website korporat PT Al-Faruq Export Indonesia untuk branding internasional, dengan desain responsif dan optimasi performa web.",
  },
  {
    id: 3,
    title: "PT Fattka",
    category: "Client Project",
    img_url: fattkaPreview,
    tech_stack: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Vite", logo: viteLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
    navigate_url: "https://pt-fattka.vercel.app/",
    award: null,
    description:
      "Website PT Fattka menggunakan React, Tailwind CSS, Vite, dan JavaScript.",
  },
];

export default DATA_PROJECTS;
