// Import assets social media
// import instagram from "../assets/icons/social-media/instagram.svg";
import linkedin from "../assets/icons/social-media/linkedin.webp";
import github from "../assets/icons/social-media/github.webp";
import email from "../assets/icons/social-media/email.webp";
import instagram from "../assets/icons/social-media/instagram.webp";

// Import assets projects and skills
import villageWeb from "../assets/images/village-web.png";
import hmtiUntad from "../assets/images/hmti-untad.png";
import hrev from "../assets/images/hrev.webp";
import snResidence from "../assets/images/sn-residence.png";

import logoVillageWebsite from "../assets/icons/logo-village-website.png";
import logoHmtiUntad from "../assets/icons/logo-hmti-untad.png";
import logoHrev from "../assets/icons/logo-hrev.png";
import logoSnResidence from "../assets/icons/logo-sn-residence.png";


import nextjs from "../assets/icons/tech-stack/nextjs.svg";
import react from "../assets/icons/tech-stack/react.svg";
import typescript from "../assets/icons/tech-stack/typescript.svg";
import javascript from "../assets/icons/tech-stack/javascript.svg";
import redux from "../assets/icons/tech-stack/redux.svg";
import graphql from "../assets/icons/tech-stack/graphql.svg";
import nodejs from "../assets/icons/tech-stack/nodejs.svg";
import tailwind from "../assets/icons/tech-stack/tailwind.svg";
import antdesign from "../assets/icons/tech-stack/antdesign.svg";
import mongodb from "../assets/icons/tech-stack/mongodb.svg";
import postgresql from "../assets/icons/tech-stack/postgresql.svg";
import firebase from "../assets/icons/tech-stack/firebase.svg";
import vite from "../assets/icons/tech-stack/vite.svg";

// import assets experience
import eduqat from "../assets/icons/company-logo/eduqat.svg";
import kalla from "../assets/icons/company-logo/kalla.svg";
import kodingna from "../assets/icons/company-logo/kodingna.svg";
import bangkit from "../assets/icons/company-logo/bangkit.svg";

import pattern1 from "../assets/images/patterns/pattern1.svg";
import pattern2 from "../assets/images/patterns/pattern2.svg";
import pattern3 from "../assets/images/patterns/pattern3.svg";
import pattern4 from "../assets/images/patterns/pattern4.svg";

export const dataNavbar: Navbar[] = [
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
    navigate_url: "contact",
    offset: 0,
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://linkedin.com/in/mattmwln",
  },
  {
    id: 1,
    logo: instagram,
    navigate: "https://instagram.com/@mattmwln",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/mattmwln",
  },
  {
    id: 3,
    logo: email,
    navigate: "@gmail.com",
  },
];

export const dataProjectss: Projects[] = [
  {
    id: 0,
    img_url: villageWeb,
    logo: logoVillageWebsite,
    type: "Landing Page •",
    tech_stack_logo: [vite, typescript, tailwind],
    navigate_url: "https://iquran-six.vercel.app/",
  },
  {
    id: 1,
    img_url: villageWeb,
    logo: logoHrev,
    type: "Company Profile •",
    tech_stack_logo: [react, typescript, vite, tailwind],
    navigate_url: "https://github.com/mattmwln",
  },
  {
    id: 2,
    img_url: hmtiUntad,
    logo: logoHmtiUntad,
    type: "Company Profil •",
    tech_stack_logo: [react, typescript, vite, tailwind],
    navigate_url: "https://sifest.id/",
  },
  {
    id: 3,
    img_url: snResidence,
    logo: logoSnResidence,
    type: "Web App •",
    tech_stack_logo: [nextjs, tailwind],
    navigate_url: "https://kodam-checker.vercel.app/",
  },
];

export const dataSkills: string[] = [
  nextjs,
  react,
  typescript,
  javascript,
  redux,
  graphql,
  nodejs,
  tailwind,
  antdesign,
  mongodb,
  postgresql,
  firebase,
];

export const dataExperience: Experience[] = [
  {
    id: 0,
    logo_url: eduqat,
    pattern: pattern1,
    name: "GAOtech",
    description: "@GAOtech Inc",
    date: "Mar 2024 - Present",
    position: "Frontend Engineer",
    responsibilites: [
      "Develop an assignments feature for educators and students that allows educators to create assignment materials, publish scores, view student attachments and provide feedback to their students. On the other hand, students can upload attachments and await feedback from their educators.",
      "Develop a drip course feature that enables educators to manage access to materials for their students. When the drip course is enabled, students can access materials after enrolling or upon completing the previous material.",
      "Collaborate with the UI/UX designer team to develop the web into code and work with backend engineer to integrate the functionality and consume APIs.",
      "Participate with the application testing team (Quality Assurance) to ensure that the platform meets the company’s standards for performance and reliability.",
      "Implement clean code, testable code, project flexibility and agile methodologies.",
      "Build, maintain and improve the Eduqat’s platform using Next.js.",
    ],
    first_color: "#0C3342",
    second_color: "#054C5B",
    desc_color: "#B6EDF8",
    position_color: "#002D3E",
    border_color: "#329CA9",
  },
  {
    id: 1,
    logo_url: kalla,
    pattern: pattern2,
    name: "Dole Indonesia",
    description: "@dole",
    date: "Okt 2023 - Mar 2024",
    position: "Graphic Design",
    responsibilites: [
      "Experienced in the use of additional design tools such as Adobe Creative Suite (Photoshop, Illustrator) to enhance and enrich designs..",
      " Experienced in working with marketing teams to produce attractive and informative promotional materials.",
      "Maintain design quality by making revisions based on feedback and performance analysis.",
      "Collaborate closely with the copywriting team to ensure the design content created is relevant and effective.",
    ],
    first_color: "#270116",
    second_color: "#57083C",
    desc_color: "#F8B1E4",
    position_color: "#340323",
    border_color: "#AA1088",
  },
  {
    id: 2,
    logo_url: kodingna,
    pattern: pattern3,
    name: "Sifest",
    description: "Sifest Unsri 2023",
    date: "Jun 2023 - Nov 2023",
    position: "Frontend Web Developer",
    responsibilites: [
      "Extensive experience in front-end development, from design stage to implementation.",
      "Ability to develop with JavaScript, including frameworks and libraries such as React Js.",
      "Develop responsive and interactive user interfaces using modern HTML, CSS and JavaScript.",
    ],
    first_color: "#020C12",
    second_color: "#022E4A",
    desc_color: "#BEE7FB",
    position_color: "#021826",
    border_color: "#1994A4",
  },
  {
    id: 3,
    logo_url: bangkit,
    pattern: pattern4,
    name: "Himsi Unsri",
    description: "Sriwijaya University",
    date: "Feb 2022 - Present",
    position: "Deputy Head Media and Information",
    responsibilites: [
      "Lead the media and information team, including directing and supervising the work of graphic design staff.",
      "Teach and mentor design staff in design techniques and principles, as well as the use of design tools such as Figma and Adobe Creative Suite.",
      " Develop effective media and information strategies to achieve organizational goals.",
      "Directs and assesses staff performance, providing constructive feedback for professional development.",
    ],
    first_color: "#2E0D17",
    second_color: "#390916",
    desc_color: "#F9B6BE",
    position_color: "#18040A",
    border_color: "#7D2038",
  },
];
