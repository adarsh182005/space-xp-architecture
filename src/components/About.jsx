import React from "react";
import { ArrowRight } from "lucide-react";

import { IMG } from "../data/projects";

function About() {
  return (
    <section className="section about">

      <div className="section-label">
        About Space
      </div>

      <div className="about-grid">

        <div className="image-wrap about-image">

          <img
            src={IMG.featured}
            alt="SPACE Architectural Studios project"
            loading="lazy"
          />

        </div>

        <div className="about-copy">

          <h2 className="serif">
            DESIGNING WITH CONTEXT,
            CLARITY AND CHARACTER.
          </h2>

          <p>
            SPACE Architectural Studios is a
            multidisciplinary design studio
            working across architecture,
            landscape and interiors.
          </p>

          <p>
            We believe the strongest spaces
            emerge from a close reading of place,
            a disciplined material palette and
            a clear understanding of how people
            will live, work and gather.
          </p>

          <a
            className="button dark"
            href="#contact"
          >
            Our approach
            <ArrowRight size={15} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;