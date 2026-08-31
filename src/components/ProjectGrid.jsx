import React from "react";

import { projects } from "../data/projects";

function ProjectGrid() {
  return (
    <section
      className="section projects-section"
      id="work"
    >

      <div className="section-label">
        Selected Work
      </div>

      <div className="project-grid">

        {projects.map((project) => (

          <article
            key={project.number}
            className={`project project-${project.number}`}
          >

            <a href="#contact">

              <div className="image-wrap project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

              </div>

              <div className="project-meta">

                <span>
                  {project.number} · {project.title}
                </span>

                <small>
                  {project.meta}
                </small>

              </div>

            </a>

          </article>

        ))}

      </div>

    </section>
  );
}

export default ProjectGrid;