import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Logo />

        <nav className="desktop-nav">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}

          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#studio" onClick={closeMenu}>
            Studio
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;