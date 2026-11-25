
import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "User Interview",
      image: "/images/User Interview.png",
      className: "project-one",
    },
    {
      title: "User Interview",
      image: "/images/User Interview 1.png",
      className: "project-two",
    },
    {
      title: "Wireflow study",
      image: "/images/Wireflow study.png",
      className: "project-three",
    },
    {
      title: "Prototype",
      image: "/images/Prototype.png",
      className: "project-four",
    },
    {
      title: "Project Delivery",
      image: "/images/Project delivery.png",
      className: "project-five",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-content">
        <span className="section-label">✦ Learning Process</span>

        <h2>
          Learn it the way the
          <br />
          industry <span>does it.</span>
        </h2>

        <p>
          Students solve real briefs, receive mentor feedback,
          and turn every learning milestone into portfolio-ready work.
        </p>

        <a href="#student-projects" className="projects-button">
          View student projects <span>→</span>
        </a>
      </div>

      <div className="projects-grid" id="student-projects">
        {projects.map((project) => (
          <div
            className={`project-card ${project.className}`}
            key={project.className}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
