import React from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding the site, brief and aspirations.",
  },
  {
    number: "02",
    title: "Define",
    text: "Developing the design direction and spatial concept.",
  },
  {
    number: "03",
    title: "Design",
    text: "Refining architecture, interiors, materials and details.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Coordinating the project toward execution.",
  },
];

function Process() {
  return (
    <section className="section">

      <div className="section-label">
        Our Process
      </div>

      <div className="process-grid">

        {steps.map((step) => (

          <div
            className="process"
            key={step.number}
          >

            <span className="process-no">
              {step.number}
            </span>

            <h3 className="serif">
              {step.title}
            </h3>

            <p>
              {step.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Process;