import React, { useState, useEffect } from "react";
import "./Navbar.css";
import nav_logo from "../../assets/Navbar_logo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={nav_logo} alt="logo" />

      <ul className="navbar-menu">
        <li className={active === "home" ? "active" : ""}>
          <a href="#home">Home</a>
        </li>
        <li className={active === "about" ? "active" : ""}>
          <a href="#about">About</a>
        </li>
        <li className={active === "features" ? "active" : ""}>
          <a href="#features">Features</a>
        </li>
        <li className={active === "testimonials" ? "active" : ""}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className={active === "services" ? "active" : ""}>
          <a href="#services">Services</a>
        </li>
        <li className={active === "pricing" ? "active" : ""}>
          <a href="#pricing">Pricing</a>
        </li>
        <li className={active === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="navbar-try-demo">
        <button>Try Demo</button>
      </div>
    </div>
  );
};

export default Navbar;
