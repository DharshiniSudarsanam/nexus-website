
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* BRAND COLUMN */}

        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="footer-logo-icon">✦</span>
            <span>
              <strong>Nexus Academy</strong>
              <small>OF DESIGN</small>
            </span>
          </a>

          <p className="footer-description">
            A design school built around one outcome: graduates
            who can do the job — not just talk about it.
          </p>

          <div className="footer-contact">
            <a href="mailto:hello@nexusacademy.design">
              hello@nexusacademy.design
            </a>
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
            <span>Baner, Pune 605011 · India</span>
          </div>

          <a href="#contact" className="footer-admission-button">
            ✦ Admissions Open · Feel Free to call 👑 All the Best ✨
          </a>
        </div>

        {/* PROGRAMS */}

        <div className="footer-column">
          <h4>PROGRAMS</h4>
          <a href="#courses" className="footer-highlight">
            UI/UX Designer course
          </a>
          <a href="#courses" className="footer-highlight">
            UI Developer course
          </a>
          <a href="#courses">Career Track</a>
          <a href="#courses">Advanced Program</a>
          <a href="#courses">Product Design Program</a>
          <a href="#courses">Curriculum</a>
          <a href="#courses">Student outcomes</a>
        </div>

        {/* FOR COLLEGES */}

        <div className="footer-column">
          <h4>FOR COLLEGES</h4>
          <a href="#colleges" className="footer-highlight">
            12-day workshop
          </a>
          <a href="#colleges">Semester training</a>
          <a href="#colleges">Internships</a>
          <a href="#colleges">Capstone projects</a>
          <a href="#colleges">Request a proposal</a>
        </div>

        {/* COMPANY */}

        <div className="footer-column">
          <h4>COMPANY</h4>
          <a href="#about">Why Nexus</a>
          <a href="#mentors">Mentors</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact us</a>
          <a href="#contact">Book a free call</a>
        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="footer-bottom">
        <p>© 2026 Nexus Academy of Design. All rights reserved.</p>

        <div className="footer-legal-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#refund">Refund policy</a>
        </div>
      </div>

      <p className="footer-disclaimer">
        Concept redesign for design review — prices, partner names and
        outcome figures are illustrative sample content and should be
        replaced with verified data before publishing.
      </p>

    </footer>
  );
}

export default Footer;
