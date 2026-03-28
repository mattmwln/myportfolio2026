// src/components/Skills/SkillsContent.tsx
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { skills } from "../Skills/DataSkills";

type SkillItem = {
  name: string;
  logo: string;
};

type SkillGroup = {
  title: string;
  items: SkillItem[];
};

const SkillsContent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // ambil semua skill untuk desktop
  const allSkills: SkillItem[] = Object.values(skills).flatMap(
    (group: SkillGroup) => group.items
  );

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { type: "spring", stiffness: 70, duration: 0.5 },
    },
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="hidden md:grid grid-cols-4 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 md:px-12 justify-items-center"
      >
        {allSkills.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-2 p-4"
          >
            <div
              className="w-12 h-12 flex items-center justify-center bg-white 
              border border-transparent rounded-xl 
              hover:border-gray-900 transition-all duration-300"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
            </div>

            <span className="text-[10px] md:text-xs font-bold uppercase text-gray-700 text-center">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col gap-6 px-4 md:hidden">
        {Object.values(skills).map((group: SkillGroup, idx) => (
          <div key={idx}>
            {/* Title */}
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              {group.title}
            </h3>

            {/* List skill */}
            <div className="grid grid-cols-3 gap-4">
              {group.items.map((item: SkillItem, i: number) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-3"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-white 
                    border border-transparent rounded-xl 
                    hover:border-gray-900 transition-all duration-300"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  <span className="text-[9px] font-bold uppercase text-gray-700 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsContent;