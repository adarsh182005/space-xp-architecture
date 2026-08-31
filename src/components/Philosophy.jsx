import React from "react";

import { IMG } from "../data/projects";

function Philosophy() {
  return (
    <section className="section philosophy">

      <div className="philosophy-grid">

        <h2 className="serif">
          LESS, BUT BETTER.
          <br />
          MORE MEANINGFUL.
          <br />
          MORE HUMAN.
        </h2>

        <div className="image-wrap philosophy-media">

          <img
            src={IMG.interior}
            alt="Minimal architectural interior"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}

export default Philosophy;