import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Code2,
  Compass,
  GraduationCap,
  Layers3,
  TrendingUp,
} from "lucide-react";

import { person, currentWork } from "../../data/person";

/* =========================================================
   INFORMATION CARDS
========================================================= */

const infoCards = [
  {
    eyebrow: "CURRENT WORK",
    title: currentWork.name,
    description: currentWork.field,
    icon: Building2,
  },
  {
    eyebrow: "EDUCATION",
    title: "Universitas Sriwijaya",
    description: "Sistem Informasi",
    icon: GraduationCap,
  },
  {
    eyebrow: "EXPERTISE",
    title: "Analisis Sistem & Pengembangan Web",
    description: "UI/UX • Data Mining • Rekayasa Proses Bisnis",
    icon: Code2,
  },
];

/* =========================================================
   PRINCIPLES
========================================================= */

const principles = [
  {
    number: "01",
    title: "Explore",
    description: "Discover ideas",
    icon: Compass,
  },
  {
    number: "02",
    title: "Learn",
    description: "Gain knowledge",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Build",
    description: "Create solutions",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Grow",
    description: "Make an impact",
    icon: TrendingUp,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const AboutContent = () => {
  return (
    <div className="about-content w-full font-figtree text-white">
      {/* ===================================================
          TOP RM BRAND
      ==================================================== */}

      <motion.div
        initial={false}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
        }}
        className="
          mb-12
          flex
          items-center
          gap-5
          lg:mb-10
        "
      >
        <span
          className="
            text-[15px]
            font-medium
            tracking-[0.3em]
            text-white/90
          "
        >
          RM
        </span>

        <div
          className="
            h-px
            w-32
            bg-gradient-to-r
            from-red-600/90
            via-red-600/40
            to-transparent
            sm:w-40
          "
        />
      </motion.div>

      {/* ===================================================
          MAIN GRID
      ==================================================== */}

      <div
        className="
          grid
          items-start
          gap-14
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          initial={false}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* PROFILE LABEL */}

          <div className="mb-3 flex items-center gap-3">
            <span
              className="
                h-3
                w-3
                rounded-[2px]
                bg-red-600
                shadow-[0_0_18px_rgba(220,38,38,0.55)]
              "
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/60
              "
            >
              Profil
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              max-w-[650px]
              text-[43px]
              font-bold
              leading-[0.98]
              tracking-[-0.055em]
              text-white

              sm:text-[54px]
              md:text-[60px]
              lg:text-[66px]
            "
          >
            Profesional
            <span className="text-red-600">.</span>
          </h2>

          {/* DESCRIPTION */}

          <div
            className="
              mt-7
              max-w-[590px]
              space-y-5
              text-[13px]
              font-normal
              leading-[1.85]
              text-white/60

              sm:text-[14px]
            "
          >
            <p>
              {person.name} (Mattmwln) adalah lulusan Sistem Informasi
              Universitas Sriwijaya (Unsri) yang saat ini bekerja di{" "}
              <span className="font-semibold text-red-500">
                {currentWork.name}
              </span>{" "}
              dalam bidang {currentWork.field.toLowerCase()}. Pengalaman
              sebelumnya mencakup analisis sistem, pengembangan web, dan desain
              UI/UX.
            </p>

            <p>
              Berpengalaman memimpin tim IT dalam proyek implementasi strategis
              dan berkontribusi dalam publikasi ilmiah di bidang data mining dan
              rekayasa proses bisnis.
            </p>
          </div>

          {/* =================================================
              CTA AREA
          ================================================== */}

          <div className="mt-8 flex items-center gap-3">
            {/* MAIN CTA */}

            <a
              href="#footer"
              className="
                about-contact group
                relative
                flex
                min-h-[56px]
                w-full
                max-w-[290px]
                items-center
                justify-between
                overflow-hidden
                rounded-[16px]

                border
                border-red-500/70

                bg-gradient-to-r
                from-red-950/90
                via-red-800/80
                to-red-950/90

                px-6

                text-[13px]
                font-medium
                text-white

                shadow-[0_0_26px_rgba(220,38,38,0.20),inset_0_1px_0_rgba(255,255,255,0.08)]

                transition-all
                duration-300

                hover:border-red-400

                hover:shadow-[0_0_40px_rgba(220,38,38,0.34),inset_0_1px_0_rgba(255,255,255,0.10)]
              "
            >
              {/* BUTTON GLOW */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_75%_50%,rgba(255,70,70,0.25),transparent_34%)]

                  opacity-0
                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">Hubungi Saya</span>

              {/* ARROW */}

              <span
                className="
                  relative
                  z-10

                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-red-500/40

                  bg-black/45

                  transition-all
                  duration-300

                  group-hover:translate-x-1
                  group-hover:border-red-400
                  group-hover:bg-red-600
                "
              >
                <ArrowRight size={16} strokeWidth={1.8} />
              </span>
            </a>

            {/* SECONDARY ICON */}

            <div
              className="
                hidden
                h-[56px]
                w-[56px]
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-red-500/50

                bg-black/40

                text-white/70

                backdrop-blur-md

                transition-all
                duration-300

                hover:border-red-400
                hover:bg-red-950/40
                hover:text-white

                sm:flex
              "
            >
              <BarChart3 size={18} strokeWidth={1.7} />
            </div>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT INFORMATION CARDS
        ================================================== */}

        <motion.div
          initial={false}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="space-y-3.5"
        >
          {infoCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.eyebrow}
                initial={false}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  about-info-card group
                  relative
                  overflow-hidden

                  rounded-[18px]

                  border
                  border-red-500/35

                  bg-black/55

                  px-5
                  py-4

                  shadow-[0_18px_55px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.035)]

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:border-red-500/65
                  hover:bg-black/70

                  md:px-6
                  md:py-5
                "
              >
                {/* RED GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0

                    h-32
                    w-44

                    bg-red-800/[0.08]
                    blur-[55px]
                  "
                />

                {/* TOP HIGHLIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-10
                    top-0

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-red-400/25
                    to-transparent
                  "
                />

                <div className="relative flex items-center gap-4 md:gap-5">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[60px]
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-[15px]

                      border
                      border-red-500/25

                      bg-gradient-to-br
                      from-white/[0.055]
                      to-red-950/20

                      text-red-500

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]

                      transition-all
                      duration-300

                      group-hover:border-red-500/45
                      group-hover:text-red-400
                    "
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  {/* CARD CONTENT */}

                  <div className="min-w-0 flex-1">
                    <span
                      className="
                        block
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                    >
                      {item.eyebrow}
                    </span>

                    <h3
                      className="
                        mt-1.5
                        text-[15px]
                        font-semibold
                        leading-snug
                        text-white

                        md:text-[16px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        leading-relaxed
                        text-white/40

                        md:text-[12px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* ARROW */}

                  <div
                    className="
                      hidden
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-red-500/40

                      bg-black/30

                      text-white/65

                      transition-all
                      duration-300

                      group-hover:border-red-400
                      group-hover:bg-red-600
                      group-hover:text-white

                      sm:flex
                    "
                  >
                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ===================================================
          BOTTOM PRINCIPLES
      ==================================================== */}

      <motion.div
        initial={false}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.65,
          delay: 0.15,
        }}
        className="
          about-principles mt-14
          overflow-hidden

          rounded-[19px]

          border
          border-red-500/25

          bg-black/60

          shadow-[0_22px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.04)]

          backdrop-blur-lg
        "
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group
                  relative

                  flex
                  min-h-[105px]
                  items-center
                  gap-4

                  px-5
                  py-5

                  transition-colors
                  duration-300

                  hover:bg-red-950/10

                  ${
                    index !== principles.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  }

                  ${
                    index < 2
                      ? "sm:border-b sm:border-white/10 lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}

                <span
                  className="
                    absolute
                    left-5
                    top-3.5

                    text-[8px]
                    font-medium
                    tracking-[0.18em]
                    text-white/30
                  "
                >
                  {item.number}
                </span>

                {/* ICON */}

                <div
                  className="
                    mt-4

                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-[12px]

                    border
                    border-red-500/25

                    bg-gradient-to-br
                    from-red-950/45
                    to-black

                    text-red-400

                    transition-all
                    duration-300

                    group-hover:border-red-500/55
                    group-hover:text-red-300

                    group-hover:shadow-[0_0_22px_rgba(220,38,38,0.12)]
                  "
                >
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                {/* TEXT */}

                <div className="mt-4">
                  <h4
                    className="
                      text-[13px]
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      text-white/35
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
