
import React from "react";
import "./LearningFormat.css";

function LearningFormat() {
  const features = [
    {
      icon: "▣",
      title: "Same Curriculum",
      description: "Same certification, both formats",
      color: "orange",
    },
    {
      icon: "▧",
      title: "Real Industry Projects",
      description: "Built with real briefs",
      color: "green",
    },
    {
      icon: "♙",
      title: "Expert Mentorship",
      description: "Built with real briefs",
      color: "blue",
    },
    {
      icon: "♧",
      title: "Job-ready Portfolio",
      description: "Case studies that ship",
      color: "orange",
    },
  ];

  return (
    <section className="learning-format-section">
      <div className="learning-format-container">

        <span className="learning-format-label">
          ✦ Mode Of Classes
        </span>

        <h2>
          Choose a learning format
          <br />
          that works <span>for you.</span>
        </h2>

        <p className="learning-format-description">
          The same industry-ready curriculum, mentorship and project
          experience — learn online at your own pace or join our
          in-person classes for a hands-on studio experience.
        </p>

        <div className="learning-format-cards">

          {/* ONLINE CLASSES */}

          <article className="learning-card">
            <div className="learning-card-image">
              <img
                src="/images/online-classes.png"
                alt="Online Nexus Academy classroom"
              />
            </div>

            <div className="learning-card-content">

              <div className="learning-card-heading">
                <div className="learning-icon online-icon">▣</div>
                <h3>Online Classes</h3>
                <a href="#contact" className="mentor-button">
                  ◉ Talk to a Mentor
                </a>
              </div>

              <p>
                A flexible learning option for working professionals
                and students who want to upgrade their skills, switch
                roles or grow in their current job — without disrupting
                their work.
              </p>

              <div className="learning-tags">
                <span>♧ Flexible schedules</span>
                <span>▣ Live & recorded</span>
                <span>♧ Learn from anywhere</span>
              </div>

            </div>
          </article>

          {/* OFFLINE CLASSES */}

          <article className="learning-card">
            <div className="learning-card-image">
              <img
                src="/images/offline-classes.png"
                alt="Students learning at Nexus Academy"
              />
            </div>

            <div className="learning-card-content">

              <div className="learning-card-heading">
                <div className="learning-icon offline-icon">♧</div>
                <h3>Offline Classes</h3>
                <a href="#contact" className="mentor-button">
                  ◉ Talk to a Mentor
                </a>
              </div>

              <p>
                A focused, studio-style learning experience at our
                campus with in-person mentorship, real-time feedback
                and collaborative project work.
              </p>

              <div className="learning-tags offline-tags">
                <span>▧ In-person mentorship</span>
                <span>♙ Hands-on labs</span>
                <span>▧ Dedicated Learning Space</span>
              </div>

            </div>
          </article>

        </div>

        {/* BOTTOM FEATURES */}

        <div className="learning-features">
          {features.map((feature) => (
            <div className="learning-feature" key={feature.title}>
              <div className={`feature-icon ${feature.color}`}>
                {feature.icon}
              </div>

              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LearningFormat;
