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
    url: "https://linkedin.com/in/mattmwln",
  },
  {
    id: 1,
    icon: IconBrandInstagram,
    url: "https://instagram.com/mattmwln",
  },
  {
    id: 2,
    icon: IconBrandGithub,
    url: "https://github.com/mattmwln",
  },
  {
    id: 3,
    icon: IconMail,
    url: "mailto:mattmwln@gmail.com",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-5">
      {dataSocialMedia.map(({ id, icon: Icon, url }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 transition-all duration-300 group"
        >
          <Icon
            size={20}
            className="text-[#E2FBFF] group-hover:text-white transition-colors"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;