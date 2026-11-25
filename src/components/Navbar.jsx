
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span>✦</span>
      </div>

      {/* Navigation */}
      <div className="navbar-links">
        <a href="#why-nexus">Why Nexus</a>
        <a href="#curriculum">Curriculum</a>
        <a href="#courses">Courses</a>
        <a href="#outcome">Outcome</a>
        <a href="#faq">FAQ</a>
      </div>

      {/* Mentor Button */}
      <a href="#contact" className="navbar-cta">
        Talk to a Mentor
      </a>
    </nav>
  );
}

export default Navbar;
