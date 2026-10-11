import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudioIntro from "./components/StudioIntro";
import FeaturedProject from "./components/FeaturedProject";
import ProjectGrid from "./components/ProjectGrid";
import Typologies from "./components/Typologies";
import VideoWalkthroughs from "./components/VideoWalkthroughs";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";
import About from "./components/About";
import Process from "./components/Process";
import Statement from "./components/Statement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <FeaturedProject />
        <ProjectGrid />
        <Typologies />
        <StudioIntro />
        <Philosophy />
        <About />
        <Process />
        <VideoWalkthroughs />
        <Statement />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;