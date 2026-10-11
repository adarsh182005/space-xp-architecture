import React from "react";
import { Play, ArrowUpRight } from "lucide-react";

const walkthroughs = [
  { title: "A Home in Motion", type: "Residential walkthrough", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85" },
  { title: "Quietly Considered", type: "Interior walkthrough", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85" },
  { title: "Space & Light", type: "Design visualization", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85" },
  { title: "Material Stories", type: "Detail walkthrough", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85" },
];

function VideoWalkthroughs() {
  return (
    <section className="section walkthrough-section" id="walkthroughs">
      <div className="walkthrough-heading">
        <div>
          <div className="section-label">Inside the spaces</div>
          <h2 className="walkthrough-title serif">Video <em>Walkthroughs.</em></h2>
        </div>
        <p>Move through the details, materials and atmosphere of spaces before they become reality.</p>
      </div>
      <div className="walkthrough-grid">
        {walkthroughs.map((item, index) => (
          <a className="walkthrough-card" href="#contact" key={item.title} aria-label={`Ask us about ${item.title}`}>
            <div className="walkthrough-image image-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
              <span className="walkthrough-play"><Play size={18} fill="currentColor" /></span>
              <span className="walkthrough-index">0{index + 1}</span>
            </div>
            <div className="walkthrough-meta">
              <div><h3>{item.title}</h3><p>{item.type}</p></div>
              <ArrowUpRight size={18} strokeWidth={1.4} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
export default VideoWalkthroughs;
