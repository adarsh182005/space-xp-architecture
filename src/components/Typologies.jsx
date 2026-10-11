import React from "react";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "../data/projects";

const typologies = [
  { title: "2BHK Homes", category: "Residential · Compact living", image: IMG.interior, number: "01" },
  { title: "3BHK Homes", category: "Residential · Family living", image: IMG.villa, number: "02" },
  { title: "Premium 3BHK", category: "Residential · Spacious living", image: IMG.modern, number: "03" },
  { title: "Commercial", category: "Workspaces · Retail · Studios", image: IMG.commercial, number: "04" },
];

function Typologies() {
  return (
    <section className="section typologies-section" id="typologies">
      <div className="typologies-heading">
        <div>
          <div className="section-label">Find your space</div>
          <h2 className="typologies-title serif">Exploring <em>Typologies.</em></h2>
        </div>
        <p>Thoughtful design for different ways of living, working and coming together.</p>
      </div>
      <div className="typologies-grid">
        {typologies.map((item) => (
          <a className="typology-card" href="#contact" key={item.number}>
            <div className="typology-image image-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
              <span className="typology-number">{item.number}</span>
              <span className="typology-arrow"><ArrowUpRight size={20} strokeWidth={1.5} /></span>
            </div>
            <div className="typology-meta">
              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
              <span className="typology-explore">Explore <ArrowUpRight size={14} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Typologies;
