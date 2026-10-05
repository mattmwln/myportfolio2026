import { socialProfiles, socialEmail } from "../data/person";
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

// =======================
// NAVBAR
// =======================

export const dataNavbar = [
  { id: 4, navigate: "Blog", navigate_url: "/blog/", offset: 0 },
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
    navigate: socialProfiles[0].url,
  },
  {
    id: 1,
    logo: instagram,
    navigate: socialProfiles[1].url,
  },
  {
    id: 2,
    logo: github,
    navigate: socialProfiles[2].url,
  },
  {
    id: 3,
    logo: email,
    navigate: `mailto:${socialEmail}`, // ✅ fix email
  },
];
