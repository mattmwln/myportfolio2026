import { Fragment, useEffect, useState } from "react";
import { dataNavbar } from "../../constants";
import { motion } from "framer-motion";

import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";

const buttonStyles = {
  fontSize: "1.4em",
  padding: "0.6em 0.8em",
  borderRadius: "0.5em",
  border: "none",
  backgroundColor: "#111827",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "2px 2px 3px #000000b4",
};

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("");
  const [isNavbarResponsive, setIsNavbarResponsive] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -50% 0px" }
    );
    dataNavbar.forEach(({ navigate_url }) => {
      const section = document.getElementById(navigate_url);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleResponsive = () => {
    setIsNavbarResponsive(!isNavbarResponsive);
  };

  const containerNavbar = {
    hidden: { opacity: 1, top: -500 },
    visible: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
  };

  return (
    <Fragment>
      <motion.nav
        aria-label="Navigasi utama"
        className="flex justify-center z-50 my-5 lg:fixed lg:top-0 lg:left-0 lg:right-0"
        variants={containerNavbar}
        initial={false}
        animate="visible"
      >
        <motion.div className="lg:flex hidden items-center gap-10 xl:gap-16 px-10 py-5 bg-white/80 border backdrop-blur-sm drop-shadow-sm hover:drop-shadow-lg transition-all duration-200 rounded-full">
          {dataNavbar.map(({ id, navigate, navigate_url }) => (
            <a
              href={
                navigate_url.startsWith("/") ? navigate_url : `#${navigate_url}`
              }
              key={id}
              onClick={() => setActiveNav(navigate_url)}
              className={`${
                activeNav === navigate_url
                  ? "text-[#2c848f] font-semibold"
                  : "text-primary/50 font-medium"
              } cursor-pointer hover:text-[#2d6e77]`}
            >
              {navigate}
            </a>
          ))}
        </motion.div>
      </motion.nav>
      <div className="lg:hidden lg:mx-10 lg:my-10 mx-5 my-5 flex justify-end z-[60] fixed right-0 top-0">
        <button
          aria-label={isNavbarResponsive ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={isNavbarResponsive}
          aria-controls="mobile-navigation"
          onClick={handleResponsive}
          className="navbar-toggle cursor-pointer lg:p-2.5 p-2"
          style={buttonStyles}
        >
          <img
            src={isNavbarResponsive ? closeIcon : hamburgerIcon}
            alt=""
            width={24}
            height={24}
            className="lg:w-6 w-5"
          />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Navigasi seluler"
        style={{ visibility: isNavbarResponsive ? "visible" : "hidden" }}
        className={`${
          isNavbarResponsive ? "right-0 " : "-right-full"
        } lg:hidden fixed top-0 bg-[#f1f1f1] w-full h-screen transition-all duration-300 ease-out z-50`}
      >
        <div
          className="mx-5 font-extrabold text-2xl italic fixed top-7"
          style={{ color: "#111827" }}
        >
          MATTMWLN.
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10 lg:text-base text-sm">
          {dataNavbar.map(({ id, navigate, navigate_url }) => (
            <a
              href={
                navigate_url.startsWith("/") ? navigate_url : `#${navigate_url}`
              }
              key={id}
              className={`${
                activeNav === navigate_url
                  ? "text-primary/90 font-semibold"
                  : "hover:text-primary text-primary/50 cursor-pointer font-medium"
              }`}
              onClick={() => {
                setActiveNav(navigate_url);
                handleResponsive();
              }}
            >
              {navigate}
            </a>
          ))}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
