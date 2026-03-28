
import { Fragment, useState } from "react";
import { dataNavbar } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";

const buttonStyles = {
  fontSize: '1.4em',
  padding: '0.6em 0.8em',
  borderRadius: '0.5em',
  border: 'none',
  backgroundColor: '#111827',
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '2px 2px 3px #000000b4',
};

const containerStyles = {
  position: 'relative',
  padding: '3px',
  background: 'linear-gradient(90deg, #03a9f4, #f441a5)',
  borderRadius: '0.9em',
  transition: 'all 0.4s ease',
};

const containerBeforeStyles = {
  content: '""',
  position: 'absolute',
  inset: '0',
  margin: 'auto',
  borderRadius: '0.9em',
  zIndex: -10,
  filter: 'blur(0)',
  transition: 'filter 0.4s ease',
};

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("");
  const [isNavbarResponsive, setIsNavbarResponsive] = useState<boolean>(false);

  const handleResponsive: any = () => {
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
      <style>
        {`
          .container::before {
            content: "";
            position: absolute;
            inset: 0;
            margin: auto;
            border-radius: 0.9em;
            z-index: -10;
            filter: blur(0);
            transition: filter 0.4s ease;
          }

          .container:active::before {
            filter: blur(0.2em);
          }
        `}
      </style>
      <motion.nav
        className="flex justify-center z-50 my-5 lg:fixed lg:top-0 lg:left-0 lg:right-0"
        variants={containerNavbar}
        initial="hidden"
        animate="visible"
      >
        <motion.ul className="lg:flex hidden items-center gap-24 px-20 py-5 bg-white/80 border backdrop-blur-sm drop-shadow-sm hover:drop-shadow-lg transition-all duration-200 rounded-full">
          {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
            <Link
              to={navigate_url}
              offset={offset}
              key={id}
              duration={500}
              spy={true}
              smooth={true}
              className={`${
                activeNav === navigate_url
                  ? "text-[#2c848f] font-semibold"
                  : "text-primary/50 font-medium"
              } cursor-pointer hover:text-[#2d6e77]`}
              onSetActive={() => setActiveNav(navigate_url)}
            >
              {navigate}
            </Link>
          ))}
        </motion.ul>
      </motion.nav>
      <div className="lg:hidden lg:mx-10 lg:my-10 mx-5 my-5 flex justify-end z-[60] fixed right-0 top-0">
        <button
          onClick={handleResponsive}
          className="container cursor-pointer lg:p-2.5 p-2"
          style={buttonStyles}
        >
          <img src={isNavbarResponsive ? closeIcon : hamburgerIcon} alt="hamburger" className="lg:w-6 w-5" />
        </button>
      </div>
      <div
        className={`${
          isNavbarResponsive ? "right-0 " : "-right-full"
        } lg:hidden fixed top-0 bg-[#f1f1f1] w-full h-screen transition-all duration-300 ease-out z-50`}
      >
        <div className="mx-5 font-extrabold text-2xl italic fixed top-7" style={{ color: "#111827" }}>
          MATTMWLN.
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10 lg:text-base text-sm">
          {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
            <Link
              to={navigate_url}
              offset={offset}
              key={id}
              duration={500}
              spy={true}
              smooth={true}
              className={`${
                activeNav === navigate_url
                  ? "text-primary/90 font-semibold"
                  : "hover:text-primary text-primary/50 cursor-pointer font-medium"
              }`}
              onClick={handleResponsive}
              onSetActive={() => setActiveNav(navigate_url)}
            >
              {navigate}
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
