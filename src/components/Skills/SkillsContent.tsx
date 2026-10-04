import { useEffect, useMemo, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";

import { skills } from "../Skills/DataSkills";

type SkillItem = {
  name: string;
  logo: string;
};

type SkillGroup = {
  title: string;
  items: SkillItem[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const SkillsContent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const controls = useAnimation();

  const groups = useMemo(() => Object.values(skills) as SkillGroup[], []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.75,
        ease,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.55,
        ease,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="
        relative z-10 mx-auto
        max-w-[1500px]
        px-5 py-24
        sm:px-8
        lg:px-12
        xl:px-16
        xl:py-32
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* top continuation glow */}
        <div
          className="
            absolute
            -top-[220px] left-[4%]
            h-[430px] w-[720px]
            rounded-[50%]
            opacity-60 blur-[2px]
          "
          style={{
            background:
              "radial-gradient(ellipse, rgba(180,0,0,.22) 0%, rgba(100,0,0,.08) 40%, transparent 72%)",
          }}
        />

        {/* right red atmosphere */}
        <div
          className="
            absolute
            right-[-170px] top-[60px]
            h-[580px] w-[580px]
            rounded-full
            blur-[80px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(180,0,0,.20), rgba(80,0,0,.07) 45%, transparent 70%)",
          }}
        />

        {/* bottom glow */}
        <div
          className="
            absolute
            -bottom-[260px] left-[30%]
            h-[500px] w-[850px]
            rounded-[50%]
            blur-[70px]
          "
          style={{
            background:
              "radial-gradient(ellipse, rgba(160,0,0,.16), transparent 68%)",
          }}
        />

        {/* subtle red top line */}
        <div
          className="
            absolute
            left-[6%] top-[38px]
            h-px w-[44%]
            rotate-[-2deg]
          "
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,28,28,.75), transparent)",
            boxShadow: "0 0 18px rgba(255,0,0,.4)",
          }}
        />

        {/* right arc */}
        <div
          className="
            absolute
            -right-[310px] top-[120px]
            h-[700px] w-[700px]
            rounded-full
            border border-red-600/25
          "
        />

        <div
          className="
            absolute
            -right-[270px] top-[150px]
            h-[620px] w-[620px]
            rounded-full
            border border-red-500/10
          "
        />

        {/* bottom floor glow */}
        <div
          className="
            absolute
            bottom-[20px] left-[-10%]
            h-px w-[120%]
          "
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,0,0,.65), transparent)",
            boxShadow: "0 0 14px rgba(255,0,0,.65), 0 0 40px rgba(255,0,0,.25)",
          }}
        />

        {/* decorative star */}
        <div className="absolute right-[26%] top-[82px] hidden h-10 w-10 lg:block">
          <span
            className="
              absolute left-1/2 top-0
              h-full w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent via-red-500 to-transparent
            "
          />

          <span
            className="
              absolute left-0 top-1/2
              h-px w-full
              -translate-y-1/2
              bg-gradient-to-r
              from-transparent via-red-500 to-transparent
            "
          />

          <span
            className="
              absolute left-1/2 top-1/2
              h-2.5 w-2.5
              -translate-x-1/2 -translate-y-1/2
              rotate-45 bg-red-500
              shadow-[0_0_18px_rgba(239,68,68,.8)]
            "
          />
        </div>
      </div>

      {/* =========================================================
          TOP AREA
      ========================================================= */}

      <div
        className="
          relative
          mb-9
          grid grid-cols-1
          gap-8
          lg:grid-cols-[1.05fr_.95fr]
          lg:items-end
        "
      >
        {/* LEFT HEADER */}

        <motion.div variants={itemVariants}>
          <div className="mb-8 flex items-center gap-5">
            <span
              className="
                font-medium
                text-[13px]
                tracking-[0.14em]
                text-white/55
              "
            >
              04
            </span>

            <span
              className="
                h-px w-24
                bg-gradient-to-r
                from-red-500
                to-red-500/10
              "
            />
          </div>

          <span
            className="
              block
              text-[10px]
              font-medium
              uppercase
              tracking-[0.36em]
              text-white/45
              sm:text-[11px]
            "
          >
            Technical Mastery
          </span>

          <h2
            className="
              mt-4
              max-w-[650px]
              font-black
              leading-[.95]
              tracking-[-0.055em]
              text-white
              text-[42px]
              sm:text-[55px]
              lg:text-[68px]
              xl:text-[76px]
            "
          >
            Skills &{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#ff3535]
                via-[#e21b23]
                to-[#a80008]
                bg-clip-text
                text-transparent
              "
            >
              Tools.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-[580px]
              text-[13px]
              leading-7
              text-white/55
              sm:text-[14px]
            "
          >
            Berbagai teknologi dan tools yang saya gunakan untuk membangun
            solusi digital, dari pengembangan web hingga analisis data dan
            desain.
          </p>
        </motion.div>

        {/* CONTINUOUS LEARNING */}

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -3,
          }}
          className="
            skills-feature-card group relative
            overflow-hidden
            rounded-[22px]
            border border-red-500/35
            bg-[#090909]/90
            shadow-[0_20px_70px_rgba(0,0,0,.55),0_0_35px_rgba(180,0,0,.08)]
            backdrop-blur-xl
          "
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,0,0,.055), transparent 42%, rgba(255,0,0,.025))",
            }}
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-20 -top-24
              h-48 w-48
              rounded-full
              bg-red-600/10
              blur-[55px]
            "
          />

          <div
            className="
              relative z-10
              flex min-h-[140px]
              items-center
              gap-5
              px-6 py-6
              sm:px-8
            "
          >
            <div
              className="
                flex h-14 w-14
                shrink-0 items-center justify-center
                rounded-[16px]
                border border-white/10
                bg-white/[.035]
                shadow-[inset_0_1px_0_rgba(255,255,255,.05)]
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-red-500"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />

                <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Continuous Learning
              </span>

              <p
                className="
                  mt-2
                  max-w-[340px]
                  text-[13px]
                  leading-6
                  text-white/75
                  sm:text-[14px]
                "
              >
                Selalu mengeksplorasi teknologi baru
                <br className="hidden sm:block" />
                untuk hasil yang lebih baik.
              </p>
            </div>

            <div
              className="
                hidden h-11 w-11
                shrink-0 items-center justify-center
                rounded-full
                border border-red-500/40
                text-white
                transition-all duration-300
                group-hover:border-red-400
                group-hover:bg-red-500
                group-hover:shadow-[0_0_25px_rgba(239,68,68,.4)]
                sm:flex
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          SKILLS GRID
      ========================================================= */}

      <div
        className="
          relative
          grid grid-cols-1
          gap-4
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {groups.map((group, groupIndex) => (
          <motion.section
            key={group.title}
            variants={itemVariants}
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              skills-group-card group/card
              relative
              min-h-[390px]
              overflow-hidden
              rounded-[22px]
              border border-white/[.10]
              bg-[#080808]/90
              p-5
              shadow-[0_24px_80px_rgba(0,0,0,.45)]
              backdrop-blur-xl
              transition-[border-color,box-shadow]
              duration-500
              hover:border-red-500/45
              hover:shadow-[0_24px_80px_rgba(0,0,0,.55),0_0_30px_rgba(180,0,0,.08)]
              sm:p-6
            "
          >
            {/* red card glow */}

            <div
              aria-hidden="true"
              className="
                absolute
                -left-16 -top-20
                h-48 w-48
                rounded-full
                opacity-0
                blur-[60px]
                transition-opacity
                duration-500
                group-hover/card:opacity-100
              "
              style={{
                background: "rgba(220,0,0,.16)",
              }}
            />

            {/* subtle inner gradient */}

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,.018), transparent 40%, rgba(120,0,0,.035))",
              }}
            />

            {/* HEADER */}

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      text-[11px]
                      font-medium
                      tracking-[0.12em]
                      text-white/45
                    "
                  >
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      h-px w-10
                      bg-gradient-to-r
                      from-red-500
                      to-transparent
                    "
                  />
                </div>

                <span
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[.035]
                    px-3 py-1.5
                    text-[9px]
                    font-medium
                    text-white/65
                  "
                >
                  {group.items.length}+ Tools
                </span>
              </div>

              <div className="mt-7 flex items-start justify-between gap-4">
                <h3
                  className="
                    max-w-[190px]
                    text-[17px]
                    font-semibold
                    leading-[1.12]
                    tracking-[-0.025em]
                    text-white
                  "
                >
                  {group.title}
                </h3>

                <div
                  className="
                    flex h-10 w-10
                    shrink-0 items-center justify-center
                    rounded-[12px]
                    border border-red-500/30
                    bg-red-500/[.045]
                    text-red-500
                  "
                >
                  <GroupIcon index={groupIndex} />
                </div>
              </div>

              <div
                className="
                  mt-5 h-px w-full
                  bg-gradient-to-r
                  from-white/25
                  via-white/10
                  to-transparent
                "
              />
            </div>

            {/* SKILLS */}

            <div
              className="
                relative z-10
                mt-5
                grid grid-cols-3
                gap-x-3 gap-y-5
              "
            >
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={`${group.title}-${item.name}-${itemIndex}`}
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    group/skill
                    min-w-0
                    text-center
                  "
                >
                  <div
                    className="
                      mx-auto
                      flex h-[52px] w-[58px]
                      items-center justify-center
                      rounded-[13px]
                      border border-white/[.09]
                      bg-white/[.025]
                      shadow-[inset_0_1px_0_rgba(255,255,255,.035)]
                      transition-all duration-300
                      group-hover/skill:border-red-500/35
                      group-hover/skill:bg-red-500/[.04]
                      group-hover/skill:shadow-[0_8px_24px_rgba(0,0,0,.35),0_0_20px_rgba(180,0,0,.08)]
                    "
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={34}
                      height={34}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-[27px] w-[27px]
                        object-contain
                        transition-transform
                        duration-300
                        group-hover/skill:scale-110
                      "
                    />
                  </div>

                  <p
                    title={item.name}
                    className="
                      mx-auto mt-2
                      max-w-[86px]
                      text-[9px]
                      font-medium
                      leading-[1.25]
                      text-white/60
                      transition-colors
                      group-hover/skill:text-white
                      sm:text-[10px]
                    "
                  >
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CARD BOTTOM ACCENT */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0 left-[15%]
                h-px w-[70%]
                bg-gradient-to-r
                from-transparent
                via-red-500/0
                to-transparent
                transition-all duration-500
                group-hover/card:via-red-500/60
              "
            />
          </motion.section>
        ))}
      </div>

      {/* =========================================================
          FOOTER DETAILS
      ========================================================= */}

      <motion.div
        variants={itemVariants}
        className="
          relative
          mt-12
          flex flex-col
          gap-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div
          className="
            flex flex-wrap
            items-center
            gap-3
            text-[8px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-white/30
          "
        >
          <span>Explore</span>
          <span className="h-px w-6 bg-white/15" />

          <span>Learn</span>
          <span className="h-px w-6 bg-white/15" />

          <span>Build</span>
          <span className="h-px w-6 bg-red-500/40" />

          <span className="text-red-400/70">Grow</span>
        </div>

        <div className="flex items-center gap-5">
          <span
            className="
              hidden h-px w-36
              bg-gradient-to-r
              from-red-500/60
              to-transparent
              sm:block
            "
          />

          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.22em]
              text-white/35
            "
          >
            04 / 04
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =============================================================
   CATEGORY ICONS
============================================================= */

const GroupIcon = ({ index }: { index: number }) => {
  const iconClass = "h-[19px] w-[19px]";

  if (index === 0) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m14.5 4.5 5 5" />
        <path d="M4 20l4.5-1 10-10a3.5 3.5 0 0 0-5-5l-10 10L4 20Z" />
        <path d="m12 6 6 6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M14 14c3.4-.8 7 1.5 7 5" />
    </svg>
  );
};

export default SkillsContent;
