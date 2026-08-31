import React from "react";
import { ArrowUpRight } from "lucide-react";

import { services } from "../data/services";

function Services() {
  return (
    <section
      className="section"
      id="services"
    >

      <div className="section-label">
        What We Do
      </div>

      <div className="services">

        {services.map((service) => (

          <div
            className="service"
            key={service.number}
          >

            <span className="service-no">
              {service.number}
            </span>

            <h3 className="serif">
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

            <ArrowUpRight
              className="service-arrow"
              size={19}
              strokeWidth={1}
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;