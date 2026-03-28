import reactLogo from "../../assets/icons/tech-stack/react.svg";
import tailwindLogo from "../../assets/icons/tech-stack/tailwind.svg";
import nextjsLogo from "../../assets/icons/tech-stack/nextjs.svg";
import nodejsLogo from "../../assets/icons/tech-stack/nodejs.svg";
import javascriptLogo from "../../assets/icons/tech-stack/javascript.svg";
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
import caktadentLogo from "../../assets/icons/project/caktadent.png";
import fattkaLogo from "../../assets/icons/project/fattka.png";
import alfaruqLogo from "../../assets/icons/project/alfaruq.png";

export const DATA_PROJECTS = [
  {
    id: 1,
    title: "Caktadent Ecosystem",
    category: "Company Project",
    img_url: caktadentLogo,
    logo: reactLogo,
    tech_stack_logo: [reactLogo, tailwindLogo, viteLogo, typescriptLogo],
    navigate_url: "https://github.com/mattmwln/Caktadent",
    award: "Top 3 Achievement",
    description: "Website Caktadent dibuat sebagai platform digital untuk memperkenalkan profil dan kegiatan tim Caktadent. Saya bertugas sebagai pengembang web, membuat tampilan yang responsif dan menyajikan informasi dengan jelas dan modern di berbagai perangka."
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
    description: "Website PT Alfaruq Export Indonesia dibuat sebagai platform untuk branding perusahaan dan menampilkan produk unggulan seperti kopi, kelapa, dan teh ke pasar global."
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
    description: "Website PT Fattka dibuat sebagai platform digital untuk memperkenalkan perusahaan dan menampilkan produk farmasi ke audiens lebih luas. Fokusnya pada penyajian informasi produk yang jelas dengan tampilan modern, responsif, dan ramah pengguna agar mudah diakses di berbagai perangkat.."
  },
];