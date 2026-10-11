import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { IMG } from "../data/projects";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src={IMG.hero} alt="" aria-hidden="true" />
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMG.hero}
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <div className="eyebrow">Architecture / Landscape / Interiors</div>
        <div className="hero-title hero-logo-title">
          <img src="/space-xp-logo.png" alt="SPACE XP. Architectural Studios" />
        </div>
        <div className="hero-bottom">
          <div>
            <div className="hero-statement serif">
              Designing spaces with purpose,<br />character and permanence.
            </div>
            <div className="hero-actions">
              <a className="button" href="#work">Explore our work <ArrowRight size={15} /></a>
              <a className="button" href="#contact">Start a project <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <p>An architecture and design studio creating thoughtful spaces through architecture, interiors and landscape.</p>
        </div>
      </div>

      <div className="scroll-cue">Scroll to explore ↓</div>
    </section>
  );
}

export default Hero;
