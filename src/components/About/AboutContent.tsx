import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import aboutShape from "../../assets/images/shape.svg";
import BurstBload from "./BurstBload";

const AboutContent: React.FC = () => {
  const ref = useRef(null);

  const isScroll = useInView(ref, { once: true });
  const aboutContentControls = useAnimation();

  const aboutContentVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: -11, y: 50, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
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
      variants={aboutContentVariants}
      className="xl:basis-[58%] md:basis-[55%] flex flex-col gap-5"
    >
      <motion.div variants={item} className="relative md:max-w-[384px] max-w-[215px]">
        <img
          src={aboutShape}
          decoding="async"
          loading="lazy"
          alt="about shape mattmwln"
          className="absolute -z-10 bottom-2 xl:w-auto md:w-56 w-48"
        />
        <div className="flex items-center">
    <span className="text-[30px] md:text-[56px]">🥶</span>
    <h2 className="md:text-[56px] text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#27a589] to-[#092a25] ml-2">About Me</h2>
</div>

        <BurstBload />
      </motion.div>
      <motion.p variants={item} className="md:text-[20px] md:text-base text-sm xl:leading-9 text-medium" style={{ color: "#d2f5ea" }}>
      Hello i Rahmat! That's fantastic to hear about my passion and commitment to frontend development. It's a field that's always evolving, so staying dedicated to expanding myskills is a great approach. By focusing on delivering clean code and keeping up with new technologies, i am setting yourself up for success in this dynamic industry. Keep up the great work, and never stop learning and growing!
      </motion.p>
    </motion.div>
  );
};

export default AboutContent;
