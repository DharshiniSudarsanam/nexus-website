
import React from "react";
import "./CareerCall.css";

function CareerCall() {
  return (
    <section className="career-call-section">
      <div className="career-call-container">

        {/* LEFT CONTENT */}

        <div className="career-call-content">
          <h2>
            Let's find out if Nexus is right for you.
          </h2>

          <p className="career-call-intro">
            No pitch deck. A real conversation about where you are,
            what you want, and whether we can help you get there.
          </p>

          <ul className="career-call-points">
            <li>
              <span>✓</span>
              A review of your current portfolio — or a plan if you don't have one
            </li>

            <li>
              <span>✓</span>
              The track, timeline and fee plan that fits your goal
            </li>

            <li>
              <span>✓</span>
              An honest answer on placement support and outcomes
            </li>
          </ul>

          <div className="career-call-divider"></div>

          <div className="career-call-social-proof">
            <div className="career-call-avatars">
              <span className="avatar-one">RS</span>
              <span className="avatar-two">KI</span>
              <span className="avatar-three">AR</span>
            </div>

            <p>
              Talk to our team and explore your next step.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}

        <div className="career-call-form-card">
          <h3>Book your free career call</h3>

          <p className="form-subtitle">
            We'll call within one working day, 10am–7pm IST.
          </p>

          <form className="career-call-form">

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Riya Sharma"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="careerTrack">I'm interested in</label>

              <select id="careerTrack" defaultValue="" required>
                <option value="" disabled>
                  Select a career track
                </option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="ui-development">UI Development</option>
                <option value="both">Both tracks</option>
              </select>
            </div>

            <button type="button" className="career-call-submit">
              Book my free call <span>→</span>
            </button>

            <p className="privacy-note">
              ♙ No spam, no sales pressure. Your details stay private.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}

export default CareerCall;
