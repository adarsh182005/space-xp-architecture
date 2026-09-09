import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { IMG } from "../data/projects";

const SPACE_XP_LOGO = "data:image/png;base64,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";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src={IMG.hero} alt="Contemporary architecture" />
      </div>

      <div className="hero-content">
        <div className="eyebrow">Architecture / Landscape / Interiors</div>

        <div className="hero-title hero-logo-title">
          <img src={SPACE_XP_LOGO} alt="SPACE XP. Architectural Studios" />
        </div>

        <div className="hero-bottom">
          <div>
            <div className="hero-statement serif">
              Designing spaces with purpose,
              <br />
              character and permanence.
            </div>

            <div className="hero-actions">
              <a className="button" href="#work">
                Explore our work
                <ArrowRight size={15} />
              </a>
              <a className="button" href="#contact">
                Start a project
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <p>
            An architecture and design studio creating thoughtful spaces through
            architecture, interiors and landscape.
          </p>
        </div>
      </div>

      <div className="scroll-cue">Scroll to explore ↓</div>
    </section>
  );
}

export default Hero;
