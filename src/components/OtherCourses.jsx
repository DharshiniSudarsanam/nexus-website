
import React from "react";
import "./OtherCourses.css";

function OtherCourses() {
  const developerSkills = [
    "Course on Git Basics",
    "Backend Project experience",
    "Innovation Creating Skills",
  ];

  const designerSkills = [
    "Course certificate",
    "Realistic Project experience",
    "Interview Mocking Skills",
  ];

  return (
    <section className="other-courses-section">
      <div className="other-courses-container">

        {/* SECTION HEADER */}

        <div className="other-courses-header">
          <div>
            <span className="other-courses-label">
              ✦ Other Opportunities
            </span>

            <h2>
              <span>Other</span> Courses
            </h2>
          </div>

          <p>
            One studio split down the middle: the design track on paper,
            the build track in code. Choose the way you want to be good at.
          </p>
        </div>

        {/* COURSE CARDS */}

        <div className="courses-grid">

          {/* UI DEVELOPER */}

          <article className="course-card developer-card">

            <div className="developer-visual">
              <span className="track-label">✦ Developer track</span>

              <div className="code-window">
                <p>01 / Build your next idea</p>
                <p><span>const</span> skills = [</p>
                <p className="code-indent">"HTML", "CSS", "JavaScript",</p>
                <p className="code-indent">"React", "API", "Git"</p>
                <p>];</p>
                <p><span>export default</span> portfolio;</p>
              </div>
            </div>

            <div className="course-details">
              <span className="course-duration">
                02 / DEVELOPMENT · 6 MONTHS
              </span>

              <h3>UI Developer</h3>

              <h4>Build the interface.</h4>

              <p className="course-description">
                Turn designs into responsive, real-world applications.
                Master HTML, CSS, JavaScript, React and modern frontend
                systems that survive production.
              </p>

              <div className="course-info-grid">
                <div>
                  <strong>Best for</strong>
                  <p>Design and code</p>
                </div>

                <div>
                  <strong>You'll make</strong>
                  <p>Deep UI systems + live projects</p>
                </div>

                <div>
                  <strong>Core</strong>
                  <p>HTML · CSS · JS · React</p>
                </div>

                <div>
                  <strong>Tools</strong>
                  <p>Figma · Git · VS Code · APIs</p>
                </div>
              </div>

              <div className="course-footer">
                <div>
                  <strong>YOU'LL LEAVE WITH</strong>
                  <div className="course-tags">
                    {developerSkills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="mentor-button">
                  Talk to a Mentor
                </a>
              </div>

              <a href="#contact" className="course-learn-link">
                Explore UI/UX Design →
              </a>
            </div>
          </article>

          {/* UI/UX DESIGNER */}

          <article className="course-card designer-card">

            <div className="designer-visual">
              <span className="track-label">✦ Design track</span>
              <img
                src="/images/design-track.png"
                alt="Designers collaborating on a UI/UX project"
              />
            </div>

            <div className="course-details">
              <span className="course-duration">
                01 / DESIGN · 6 MONTHS
              </span>

              <h3>UI/UX Designer</h3>

              <h4>Design the experience.</h4>

              <p className="course-description">
                Research, interface and product thinking. Learn with
                these case studies and a portfolio you can defend in
                an interview.
              </p>

              <div className="course-info-grid">
                <div>
                  <strong>Best for</strong>
                  <p>Creative thinkers &amp; builders</p>
                </div>

                <div>
                  <strong>You'll make</strong>
                  <p>3 case studies</p>
                </div>

                <div>
                  <strong>Core</strong>
                  <p>Research · UI · Prototype</p>
                </div>

                <div>
                  <strong>Tools</strong>
                  <p>Figma · FigJam · Maze</p>
                </div>
              </div>

              <div className="course-footer">
                <div>
                  <strong>YOU'LL LEAVE WITH</strong>
                  <div className="course-tags">
                    {designerSkills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="mentor-button">
                  Talk to a Mentor
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default OtherCourses;
