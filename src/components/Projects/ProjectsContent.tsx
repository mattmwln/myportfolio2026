import type React from "react";
import { motion } from "framer-motion";
import  DATA_PROJECTS  from "./DataProjects";
import { IconEye } from "@tabler/icons-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsContent: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-3 gap-10 mt-14"
    >
      {DATA_PROJECTS.map((project) => (
        <motion.a
          key={project.id}
          href={project.navigate_url}
          variants={cardVariants}
          className="group relative flex flex-col bg-gray-50/70 backdrop-blur-[15px] border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-500"
        >
          {/* Gambar Project */}
          <div className="relative h-64 md:h-72 overflow-hidden rounded-t-3xl">
            <img
              src={project.img_url}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {project.award && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-gray-800/80 text-white text-xs font-bold rounded-full flex items-center gap-1">
                ⭐ {project.award}
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
              <IconEye size={32} stroke={2} color="#1c1c1c" />
            </div>
          </div>

          {/* Konten Project */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-bold mb-1 text-gray-900 group-hover:text-gray-700 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-gray-600 mb-2">{project.category}</span>

            {/* Deskripsi perusahaan */}
            {project.description && (
              <p className="text-sm text-gray-500 mb-4">{project.description}</p>
            )}

            {/* Tech Stack */}
            <div className="mt-auto">
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {project.tech_stack_logo.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <img
                      src={logo}
                      alt="tech stack logo"
                      className="w-6 h-6 object-contain mb-1"
                    />
                    <span className="text-[9px] text-gray-700">
                      {logo.split("/").pop()?.split(".")[0].toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={project.navigate_url}
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900/10 text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-900/20 transition-all"
            >
              View Project
            </a>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default ProjectsContent;