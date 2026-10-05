import DATA_PROJECTS from "./DataProjects";

const ProjectsContent = () => (
  <div className="projects-grid">
    {DATA_PROJECTS.map((project, index) => (
      <article
        key={project.id}
        className={`project-card${
          index === 0 ? " project-card--featured" : ""
        }`}
      >
        <div className="project-card__media">
          <img
            src={project.img_url}
            alt={`Ilustrasi tampilan proyek ${project.title} pada laptop`}
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
          />
          {project.award && (
            <span className="project-card__award">
              <span aria-hidden="true">★</span> {project.award}
            </span>
          )}
          <span className="project-card__number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="project-card__body">
          <h3>{project.title}</h3>
          <p className="project-card__category">{project.category}</p>
          <p className="project-card__description">{project.description}</p>

          <div className="project-card__stack">
            <p>Tech Stack</p>
            <ul aria-label={`Teknologi proyek ${project.title}`}>
              {project.tech_stack.map(({ name, logo }) => (
                <li key={name}>
                  <span className="project-card__tech-icon">
                    <img
                      src={logo}
                      alt=""
                      width={23}
                      height={23}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-card__action">
            {project.navigate_url ? (
              <a
                href={project.navigate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                Lihat {project.title}
                <span aria-hidden="true">→</span>
              </a>
            ) : (
              <span className="project-card__unavailable">
                <span aria-hidden="true">↗</span> Tautan publik belum tersedia
              </span>
            )}
            <span className="project-card__external" aria-hidden="true">
              ↗
            </span>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default ProjectsContent;
