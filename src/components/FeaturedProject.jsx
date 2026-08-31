import React from "react";
import { ArrowRight } from "lucide-react";

import { IMG } from "../data/projects";

function FeaturedProject() {
  return (
    <section className="section">

      <div className="featured-head">

        <div>

          <div className="section-label">
            Featured Work
          </div>

          <h2 className="section-title serif">
            PROJECT 01
          </h2>

        </div>

        <a
          className="button dark"
          href="#work"
        >
          View all work
          <ArrowRight size={15} />
        </a>

      </div>

      <a
        className="featured"
        href="#work"
      >

        <div className="image-wrap featured-image">

          <img
            src={IMG.featured}
            alt="Residential architecture"
          />

        </div>

        <div className="featured-meta">

          <span>
            Residential Residence
          </span>

          <span>
            Pune, India · Architecture + Interiors
          </span>

          <span>
            View project →
          </span>

        </div>

      </a>

    </section>
  );
}

export default FeaturedProject;