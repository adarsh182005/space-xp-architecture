import React from "react";

import Logo from "./Logo";

function Footer() {
  return (
    <footer>

      <div className="footer-top">

        <Logo />

        <nav className="footer-nav">

          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </nav>

        <div className="footer-contact">

          <a href="mailto:spacexparchitects@gmail.com">
            spacexparchitects@gmail.com
          </a>

          <br />

          <a href="tel:+919356292817">
            9356292817
          </a>

          {" / "}

          <a href="tel:+919340307113">
            9340307113
          </a>

          <br />

          <a
            href="https://instagram.com/spacexp.arch"
            target="_blank"
            rel="noreferrer"
          >
            @spacexp.arch
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          Architecture | Landscape | Interiors
        </span>

        <span>
          © 2026 Space Architectural Studios
        </span>

      </div>

    </footer>
  );
}

export default Footer;