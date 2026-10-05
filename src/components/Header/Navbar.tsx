import { Fragment, useEffect, useRef, useState } from "react";
import { dataNavbar } from "../../constants";
import { motion } from "framer-motion";

import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("");
  const [isNavbarResponsive, setIsNavbarResponsive] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isNavbarResponsive) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNavbarResponsive(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const links = Array.from(
          panelRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []
        );
        const controls = [toggleRef.current, ...links].filter(
          (el): el is HTMLButtonElement | HTMLAnchorElement => el !== null
        );
        const index = controls.indexOf(
          document.activeElement as HTMLButtonElement | HTMLAnchorElement
        );
        if (event.shiftKey && index <= 0) {
          event.preventDefault();
          controls[controls.length - 1]?.focus();
        } else if (!event.shiftKey && index === controls.length - 1) {
          event.preventDefault();
          controls[0]?.focus();
        }
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsNavbarResponsive(false);
    };
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavbarResponsive]);

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
    setIsNavbarResponsive((open) => !open);
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
          ref={toggleRef}
          aria-label={isNavbarResponsive ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={isNavbarResponsive}
          aria-controls="mobile-navigation"
          onClick={handleResponsive}
          className={`navbar-toggle${isNavbarResponsive ? " is-open" : ""}`}
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
        ref={panelRef}
        id="mobile-navigation"
        aria-label="Navigasi seluler"
        style={{ visibility: isNavbarResponsive ? "visible" : "hidden" }}
        className={`mobile-menu lg:hidden${
          isNavbarResponsive ? " is-open" : ""
        }`}
      >
        <div className="mobile-menu__brand">
          MATTMWLN<span>.</span>
        </div>
        <div className="mobile-menu__links">
          <p className="mobile-menu__eyebrow">EXPLORE THE PORTFOLIO</p>
          {dataNavbar.map(({ id, navigate, navigate_url }, index) => (
            <a
              href={
                navigate_url.startsWith("/") ? navigate_url : `#${navigate_url}`
              }
              key={id}
              className={`mobile-menu__link${
                activeNav === navigate_url ? " is-active" : ""
              }`}
              onClick={() => {
                setActiveNav(navigate_url);
                setIsNavbarResponsive(false);
                toggleRef.current?.focus();
              }}
            >
              <span className="mobile-menu__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {navigate}
              <span className="mobile-menu__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
        <p className="mobile-menu__footer">
          IDEAS <span>✦</span> BUILD <span>✦</span> IMPACT
        </p>
      </nav>
    </Fragment>
  );
};

export default Navbar;
