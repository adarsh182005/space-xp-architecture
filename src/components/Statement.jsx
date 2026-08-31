import React from "react";

import { IMG } from "../data/projects";

function Statement() {
  return (
    <section className="statement-image">

      <img
        src={IMG.statement}
        alt="Contemporary architecture"
        loading="lazy"
      />

      <div className="statement-overlay serif">
        SPACE IS NOT JUST WHAT WE BUILD.
        <br />
        IT IS HOW PEOPLE EXPERIENCE IT.
      </div>

    </section>
  );
}

export default Statement;