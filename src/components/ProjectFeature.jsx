import React, { useEffect, useRef, useState } from "react";

function ProjectFeature({
  image,
  title,
  year,
  category,
  description,
}) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`project-feature ${
        active ? "is-active" : ""
      }`}
    >

      {/* IMAGE */}
      <div className="project-feature-image">

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

      </div>


      {/* DARK OVERLAY */}
      <div className="project-feature-overlay"></div>


      {/* PROJECT CARD */}
      <div className="project-feature-card">

        <div className="project-card-top">

          <h3 className="project-card-title">
            {title}
          </h3>

          <span className="project-card-year">
            {year}
          </span>

        </div>


        <div className="project-card-line"></div>


        <div className="project-card-middle">

          <span className="project-card-category">
            {category}
          </span>

          {description && (
            <p className="project-card-description">
              {description}
            </p>
          )}

        </div>


        <a
          href="#contact"
          className="project-card-link"
        >
          <span>View Project</span>

          <span className="project-arrow">
            ↗
          </span>
        </a>

      </div>

    </section>
  );
}

export default ProjectFeature;