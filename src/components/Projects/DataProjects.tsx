import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { dataProjectss } from "../../constants";
import { IconEye } from '@tabler/icons-react';  // Mengganti dengan ikon mata (eye icon)

const DataProjects: React.FC = () => {
  const ref = useRef(null);
  const isScroll = useInView(ref, { once: false });
  const aboutContentControls = useAnimation();

  const dataProjectsVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 0.5,
        delay: 0.25,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const item = {
    hidden: { x: 12, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (isScroll) {
      aboutContentControls.start("visible");
    }
  }, [isScroll]);

  return (
    <motion.div
      ref={ref}
      animate={aboutContentControls}
      initial="hidden"
      variants={dataProjectsVariants}
      className="grid md:grid-cols-2 md:gap-x-14 md:gap-y-8 gap-y-6 md:mt-14 mt-8"
    >
      {dataProjectss.map(({ id, img_url, logo, type, tech_stack_logo, navigate_url }) => (
        <a
          href={navigate_url}
          key={id}
          aria-disabled={"true"}
          className="relative flex justify-center flex-col p-4 gap-3 bg-[#18181b] drop-shadow-sm hover:drop-shadow-md hover:scale-[1.010] cursor-pointer md:rounded-xl rounded-md transition-all duration-150 ease-in group"
          style={{ outline: '0.1px solid #252528' }}
        >
          <div className="relative overflow-hidden rounded-md">
            <motion.img
              variants={item}
              src={img_url}
              className="rounded-md"
              alt="projects mattmwln"
              whileHover={{ filter: "grayscale(100%) blur(10px)" }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backdropFilter: 'blur(10px)',  // Efek blur untuk memberi kesan glassmorphism
                WebkitBackdropFilter: 'blur(10px)',  // Untuk mendukung browser Webkit seperti Safari
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#27a589',
              }}
            >
              <IconEye
                size={32}  // Ukuran ikon mata
                stroke={2}  // Ketebalan stroke ikon
                color="#27a589"  // Warna ikon
                style={{ transition: 'color 0.3s ease' }}  // Transisi warna ikon saat hover
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-2.5 items-start">
            <img
              src={logo}
              alt="logo project mattmwln"
              decoding="async"
              loading="lazy"
              className={`object-cover ${id === 0 ? "md:w-8 w-8" : id === 2 ? "w-6" : "md:w-8 w-8" }`}
            />
            <div className="flex items-center gap-1">
              <p className="md:text-base text-xs">{type}</p>
              <div className="flex md:gap-4 gap-2 items-center">
                {tech_stack_logo.map((data, index) => (
                  <img
                    key={index}
                    src={data}
                    decoding="async"
                    loading="lazy"
                    alt="tech stack logo mattmwln"
                    className="md:w-[26px] w-5 object-contain aspect-[4/3]"
                  />
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default DataProjects;
