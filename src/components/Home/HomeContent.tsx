import { currentWork } from "../../data/person";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { renderCanvas } from "../Custom/renderCanvas";

const HomeContent = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      renderCanvas();
  }, []);

  const containerHomeVariants = {
    hidden: {
      opacity: 0,
      x: -25,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  const descriptionHomeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div
        initial={false}
        animate="visible"
        variants={containerHomeVariants}
        className="home-hero__heading flex flex-col items-center"
      >
        <p className="home-hero__eyebrow">HELLO,</p>
        <h1 className="home-hero__title">
          <span className="home-hero__im">I’m</span>{" "}
          <span className="home-hero__name">Rahmat Maulana.</span>
        </h1>
        <p className="home-hero__role">DIGITAL PRODUCT DEV.</p>
      </motion.div>

      <motion.p
        initial={false}
        animate="visible"
        variants={descriptionHomeVariants}
        className="home-hero__description"
      >
        Dikenal sebagai Mattmwln, saat ini bekerja di {currentWork.name} dalam
        bidang{" "}
        <span className="home-hero__highlight">
          {currentWork.field.toLowerCase()}
        </span>
        . Berpengalaman dalam pengembangan web, analisis sistem, dan desain
        UI/UX.
      </motion.p>

      <canvas
        className="home-hero__canvas pointer-events-none"
        id="canvas"
        aria-hidden="true"
      ></canvas>
    </>
  );
};

export default HomeContent;
