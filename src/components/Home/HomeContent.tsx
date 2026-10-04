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
        className="mt-8 flex flex-col items-center"
      >
        <h1
          className="font-extrabold xl:text-5xl md:text-4xl text-xl"
          style={{ color: "#111111" }} // Apple style heading
        >
          Hello, I’m Rahmat Maulana.
        </h1>

        <div className="relative -z-10">
          <p
            className="mx-2 xl:text-[82px] md:text-[70px] text-[32px] font-bold tracking-tight"
            style={{ color: "#333333" }} // Apple style sub-heading
          >
            Digital Product Dev.
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={false}
        animate="visible"
        variants={descriptionHomeVariants}
        className="md:text-[20px] max-w-3xl text-center md:leading-10 leading-6"
        style={{ color: "#666666" }} // Apple style body text
      >
        Dikenal sebagai Mattmwln, saat ini bekerja di {currentWork.name} dalam
        bidang{" "}
        <span className="font-semibold" style={{ color: "#000000" }}>
          {currentWork.field.toLowerCase()}
        </span>
        . Berpengalaman dalam pengembangan web, analisis sistem, dan desain
        UI/UX.
      </motion.p>

      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
        aria-hidden="true"
      ></canvas>
    </>
  );
};

export default HomeContent;
