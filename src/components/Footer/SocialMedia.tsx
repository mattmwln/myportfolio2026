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
  },
  {
    id: 1,
    icon: IconBrandInstagram,
    url: socialProfiles[1].url,
  },
  {
    id: 2,
    icon: IconBrandGithub,
    url: socialProfiles[2].url,
  },
  {
    id: 3,
    icon: IconMail,
    url: `mailto:${socialEmail}`,
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-5">
      {dataSocialMedia.map(({ id, icon: Icon, url }) => (
        <a
          key={id}
          href={url}
          aria-label={socialProfiles[id]?.name ?? "Email Rahmat Maulana"}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 transition-all duration-300 group"
        >
          <Icon
            size={20}
            className="text-neutral-700 group-hover:text-white transition-colors"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
