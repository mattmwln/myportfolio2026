import { useEffect } from "react";
import { motion } from "framer-motion";
import { renderCanvas } from "../Custom/renderCanvas";

const HomeContent = () => {
  useEffect(() => {
    renderCanvas();

    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
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
        initial="hidden"
        animate="visible"
        variants={containerHomeVariants}
        className="mt-8 flex flex-col items-center"
      >
        <h2
          className="font-extrabold xl:text-5xl md:text-4xl text-xl"
          style={{ color: "#111111" }} // Apple style heading
        >
          Hello, I’m Rahmat Maulana.
        </h2>

        <div className="relative -z-10">
          <h1
            className="mx-2 xl:text-[82px] md:text-[70px] text-[32px] font-bold tracking-tight"
            style={{ color: "#333333" }} // Apple style sub-heading
          >
            Digital Product Dev.
          </h1>
        </div>
      </motion.div>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={descriptionHomeVariants}
        className="md:text-[20px] max-w-3xl text-center md:leading-10 leading-6"
        style={{ color: "#666666" }} // Apple style body text
      >
        <span className="font-semibold" style={{ color: "#000000" }}>Berpengalaman </span>
        dalam mengembangkan solusi digital melalui analisis sistem dan desain yang terarah, dengan fokus pada pengalaman pengguna serta kualitas implementasi.
      </motion.p>

      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </>
  );
};

export default HomeContent;