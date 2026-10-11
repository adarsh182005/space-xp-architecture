import React from "react";
import { ArrowRight, ArrowUpRight, ClipboardCheck, MoveUpRight, Sparkles, Ruler } from "lucide-react";
import { IMG } from "../data/projects";

const services = [
  "Architecture",
  "Interior Design",
  "Kitchen Design",
  "Turnkey Solutions",
  "2D & 3D Visualization",
];

const highlights = [
  { icon: MoveUpRight, title: "Site Visit", detail: "At no cost" },
  { icon: ClipboardCheck, title: "Transparent", detail: "Quotation" },
  { icon: Sparkles, title: "Personalized", detail: "Design solutions" },
  { icon: Ruler, title: "Plan · Visualize", detail: "Build" },
];

function Hero() {
  return (
    <section className="hero hero-wireframe" id="top">
      <div className="hero-media" aria-hidden="true">
        <img src={IMG.hero} alt="" />
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMG.hero}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content hero-wireframe-content">
        <div className="hero-eyebrow">SPACE XP <span>·</span> ARCHITECTURE & DESIGN STUDIO</div>
        <h1 className="hero-wireframe-title">
          Thoughtful Spaces
          <span>for Better Everyday.</span>
        </h1>

        <div className="hero-services" aria-label="Our services">
          {services.map((service, index) => (
            <React.Fragment key={service}>
              {index > 0 && <span className="hero-service-separator" aria-hidden="true">/</span>}
              <span>{service}</span>
            </React.Fragment>
          ))}
        </div>

        <div className="hero-wireframe-actions">
          <a className="button hero-primary-button" href="#contact">
            Book Free Visit &amp; Consultation <ArrowUpRight size={16} />
          </a>
          <a className="button hero-secondary-button" href="#work">
            View Our Work <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="hero-feature-strip">
        {highlights.map(({ icon: Icon, title, detail }) => (
          <div className="hero-feature" key={title}>
            <span className="hero-feature-icon"><Icon size={17} strokeWidth={1.5} /></span>
            <span className="hero-feature-copy">
              <strong>{title}</strong>
              <small>{detail}</small>
            </span>
          </div>
        ))}
      </div>

      <div className="scroll-cue">Scroll to explore ↓</div>
    </section>
  );
}

export default Hero;
