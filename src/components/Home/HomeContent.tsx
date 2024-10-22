// import { motion } from "framer-motion";

// import shapeHeader from "../../assets/images/header-shape.png";

// const HomeContent = () => {
//   const containerHomeVariants = {
//     hidden: {
//       opacity: 0,
//       x: -25,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: 0.2,
//         type: "spring",
//         stiffness: 150,
//       },
//     },
//   };

//   const descriptionHomeVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         delay: 0.8,
//         duration: 1.5,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerHomeVariants}
//         className="flex flex-col items-center"
//       >
//         <h2 className="text-primary font-extrabold xl:text-5xl md:text-4xl text-xl" style={{ color: "#021128" }}>
//   Rahmat Maulana.
// </h2>

//         <div className="relative -z-10">
//           <img
//             src={shapeHeader}
//             loading="lazy"
//             decoding="async"
//             alt="shape header"
//             className="absolute -z-10 md:bottom-0 bottom-1.5 xl:w-auto md:w-80 w-28"
//           />
//             <h1 className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-[#008DBE] to-[#064562] xl:text-[82px] md:text-[70px] text-[32px] font-bold">
//               Frontend Developer
//             </h1>
//         </div>
//       </motion.div>
//       <motion.p
//         initial="hidden"
//         animate="visible"
//         variants={descriptionHomeVariants}
//         className="md:text-[20px] max-w-3xl text-center text-slate-500 md:leading-10 leading-6"
//       >
//         <span className="font-semibold">Frontend Developer</span> with 2+ years of experience in React.js for developing
//         a website and UI design
//       </motion.p>
//     </>
//   );
// };

// export default HomeContent;

import { useEffect } from "react";
import { motion } from "framer-motion";
import shapeHeader from "../../assets/images/header-shape.png";
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
          className="text-primary font-extrabold xl:text-5xl md:text-4xl text-xl"
          style={{ color: "#ffffff" }}
        >
          Rahmat Maulana.
        </h2>

        <div className="relative -z-10">
          <img
            src={shapeHeader}
            loading="lazy"
            decoding="async"
            alt="shape header"
            className="absolute -z-10 md:bottom-0 bottom-1.5 xl:w-auto md:w-80 w-28"
          />
          <h1 className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-[#27a589] to-[#092a25] xl:text-[82px] md:text-[70px] text-[32px] font-bold">
            Frontend Developer
          </h1>
        </div>
      </motion.div>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={descriptionHomeVariants}
        className="md:text-[20px] max-w-3xl text-center text-slate-500 md:leading-10 leading-6" style={{ color: "#d2f5ea" }}
      >
        <span className="font-semibold"style={{ color: "#1a554a" }}>Frontend Developer</span> with 2+ years
        of experience in React.js for developing a website and UI design
      </motion.p>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </>
  );
};

export default HomeContent;
