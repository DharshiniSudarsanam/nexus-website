
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="why-nexus">

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1>
          A Clearer Path
          <br />
          from Design
          <br />
          Curiosity to
          <br />
          UI/UX Mastery.
        </h1>

        <p className="hero-description">
          Live, mentor-led training with real client briefs and three
          portfolio case studies — the proof that gets you shortlisted.
          Built for students, graduates and career switchers.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-primary-btn">
            Hiring? Book a call <span>→</span>
          </a>
          <a href="#contact" className="hero-secondary-btn">
            Talk to a Mentor
          </a>
        </div>

        <div className="hero-benefits">
          <span>✓ No design background needed</span>
          <span>✓ Online + Offline</span>
          <span>✓ Learn for Currently working people</span>
        </div>

        <div className="hero-reviews">
          <div className="review-avatars">
            <span>RS</span>
            <span>KL</span>
            <span>AR</span>
            <span>+9</span>
          </div>

          <div className="review-rating">
            <div className="stars">★★★★★</div>
            <small>4.9/5 from 640 learner reviews</small>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE GRID */}
      <div className="hero-grid">

        {/* COLUMN 1 */}
        <div className="hero-column column-one">
          <div className="profile-card arun-card">
            <img src="/images/arun-kumar.png" alt="Arun Kumar" />
          </div>

          <div className="info-card purple-card">
            <h3>Reviewed by working designers</h3>
            <p>
              Our curriculum is checked by people who design real products today.
            </p>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="hero-column column-two">
          <div className="info-card green-card">
            <h3>Learn from working designers</h3>
            <p>
              Your mentors design real products every day, so you learn what
              teams expect, not just theory.
            </p>
          </div>

          <div className="profile-card pooja-card">
            <img src="/images/pooja-manusha.png" alt="Pooja Manusha" />
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="hero-column column-three">
          <div className="profile-card rajesh-card">
            <img src="/images/rajesh-khanna.png" alt="Rajesh Khanna" />
          </div>

          <div className="info-card orange-card">
            <h3>
              Learn online or offline, without leaving your job.
            </h3>
            <p>
              Pick online or offline classes and learn at a pace that suits your
              schedule.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
