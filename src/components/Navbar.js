import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `nav-link ${isActive ? "active" : ""}`;
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">ATIII Portfolio</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-line ${isOpen ? "open" : ""}`}></div>
        <div className={`menu-line ${isOpen ? "open" : ""}`}></div>
        <div className={`menu-line ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="/" className={getNavLinkClass("/")} onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={getNavLinkClass("/about")}
            onClick={closeMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/services"
            className={getNavLinkClass("/services")}
            onClick={closeMenu}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className={getNavLinkClass("/projects")}
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/career-history"
            className={getNavLinkClass("/career-history")}
            onClick={closeMenu}
          >
            Career History
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={getNavLinkClass("/contact")}
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
