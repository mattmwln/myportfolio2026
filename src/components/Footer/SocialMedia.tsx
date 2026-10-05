import { socialProfiles, socialEmail } from "../../data/person";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

const dataSocialMedia = [
  {
    id: 0,
    icon: IconBrandLinkedin,
    url: socialProfiles[0].url,
    label: "LinkedIn",
  },
  {
    id: 1,
    icon: IconBrandInstagram,
    url: socialProfiles[1].url,
    label: "Instagram",
  },
  {
    id: 2,
    icon: IconBrandGithub,
    url: socialProfiles[2].url,
    label: "GitHub",
  },
  {
    id: 3,
    icon: IconMail,
    url: `mailto:${socialEmail}`,
    label: "Email",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {dataSocialMedia.map(({ id, icon: Icon, url, label }) => (
        <a
          key={id}
          href={url}
          aria-label={label}
          target={url.startsWith("mailto:") ? undefined : "_blank"}
          rel={url.startsWith("mailto:") ? undefined : "noreferrer"}
          className="
            group relative flex h-11 w-11 items-center justify-center
            overflow-hidden rounded-xl
            border border-red-500/15
            bg-[#0b0808]/80
            text-neutral-400
            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1
            hover:border-red-500/50
            hover:bg-red-500/[0.08]
            hover:text-red-400
            hover:shadow-[0_10px_35px_rgba(239,0,0,0.16)]
          "
        >
          {/* subtle hover glow */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_50%_120%,rgba(239,0,0,0.24),transparent_58%)]
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
          />

          <Icon
            size={18}
            stroke={1.65}
            className="relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
