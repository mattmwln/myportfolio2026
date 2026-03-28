// src/components/Skills/DataSkills.tsx
import reactLogo from "../../assets/icons/tech-stack/react.svg";
import tailwindLogo from "../../assets/icons/tech-stack/tailwind.svg";
import nextjsLogo from "../../assets/icons/tech-stack/nextjs.svg";
import nodejsLogo from "../../assets/icons/tech-stack/nodejs.svg";
import javacriptLogo from "../../assets/icons/tech-stack/javascript.svg";
import typescriptLogo from "../../assets/icons/tech-stack/typescript.svg";
import viteLogo from "../../assets/icons/tech-stack/vite.svg";
import figmaLogo from "../../assets/icons/tech-stack/figma.svg";
import htmlLogo from "../../assets/icons/tech-stack/html.png";
import cssLogo from "../../assets/icons/tech-stack/css.png";
import phpLogo from "../../assets/icons/tech-stack/php.png";
import astroLogo from "../../assets/icons/tech-stack/astro.svg";
import sqlLogo from "../../assets/icons/tech-stack/sql.png";
import datminLogo from "../../assets/icons/tech-stack/datamining.png";
import tableauLogo from "../../assets/icons/tech-stack/tableau.png";
import psLogo from "../../assets/icons/tech-stack/illustrator.png";
import aiLogo from "../../assets/icons/tech-stack/photoshop.png";
import canvaLogo from "../../assets/icons/tech-stack/canva.png";
import wordLogo from "../../assets/icons/tech-stack/word.png";
import teamLogo from "../../assets/icons/tech-stack/teamwork.png";
import solvingLogo from "../../assets/icons/tech-stack/solving.png";
import thinkingLogo from "../../assets/icons/tech-stack/thinking.png";
import excelLogo from "../../assets/icons/tech-stack/excel.png";


// src/components/Skills/DataSkills.tsx

export const skills = {
  frontend: {
    title: "Development & Interface",
    items: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Next Js", logo: nextjsLogo },
      { name: "Node Js", logo: nodejsLogo },
      { name: "Type Script", logo: typescriptLogo },
      { name: "JavaScript", logo: javacriptLogo },
      { name: "Vite", logo: viteLogo },
      { name: "Html", logo: htmlLogo },
      { name: "Css", logo: cssLogo },
      { name: "Php", logo: phpLogo },
      { name: "Astro", logo: astroLogo },
    ],
  },

  analysis: {
    title: "Logic & Data Analysis",
    items: [
      { name: "Sql", logo: sqlLogo },
      { name: "Data Mining", logo: datminLogo },
      { name: "Tableau", logo: tableauLogo },
    ],
  },
  Design: {
    title: "Tools & Productivity",
    items: [
      { name: "Figma", logo: figmaLogo },
      { name: "Canva", logo: canvaLogo },
      { name: "Adobe Photoshop", logo: psLogo },
      { name: "Adobe Illustrator", logo: aiLogo },
      { name: "Microsoft Word", logo: wordLogo },
      { name: "Microsoft Excel", logo: excelLogo },
    ],
  },

  leadership: {
    title: "Management & Thinking",
    items: [
      { name: "Team Work", logo: teamLogo },
      { name: "Critical Thinking", logo: thinkingLogo },
      { name: "Problem Solving", logo: solvingLogo },
    ],
  },
};