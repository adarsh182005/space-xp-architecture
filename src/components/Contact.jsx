import React from "react";
import { ArrowRight } from "lucide-react";

function Contact() {
  return (
    <section
      className="section contact"
      id="contact"
    >

      <div className="section-label">
        Start a Conversation
      </div>

      <h2 className="serif">
        LET'S CREATE
        <br />
        SOMETHING
        <br />
        MEANINGFUL.
      </h2>

      <p>
        Have a project in mind?
        We'd love to hear about it.
      </p>

      <a
        className="button dark"
        href="mailto:spacexparchitects@gmail.com"
      >
        Start a conversation
        <ArrowRight size={15} />
      </a>

      <div className="contact-details">

        <a href="mailto:spacexparchitects@gmail.com">
          spacexparchitects@gmail.com
        </a>

        <a href="tel:+919356292817">
          9356292817
        </a>

        <a href="tel:+919340307113">
          9340307113
        </a>

        <a
          href="https://instagram.com/spacexp.arch"
          target="_blank"
          rel="noreferrer"
        >
          @spacexp.arch
        </a>

      </div>

    </section>
  );
}

export default Contact;