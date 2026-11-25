
import React from "react";
import "./Curriculum.css";

function Curriculum() {
  const modules = [
    {
      number: "01",
      title: "UX Research & Strategy",
      description:
        "Conduct real-world user research using tools like Hotjar and Maze. Map user journeys and build data-backed wireframes.",
      color: "pink",
    },
    {
      number: "02",
      title: "Advanced Figma & Prototyping",
      description:
        "Master Figma's Auto-layout, Variables and Component Properties to build complex, responsive and interactive high-fidelity prototypes.",
      color: "purple",
    },
    {
      number: "03",
      title: "Scalable Design Systems",
      description:
        "Build and maintain enterprise-grade design systems using Design Tokens (Tokens Studio) so web and mobile stay consistent.",
      color: "blue",
    },
    {
      number: "04",
      title: "Accessibility (WCAG) & Usability",
      description:
        "Design inclusive products. Run usability tests and make sure interfaces meet modern WCAG accessibility standards.",
      color: "green",
    },
    {
      number: "05",
      title: "Developer Handoff & Micro-interactions",
      description:
        "Bridge the gap between design and code. Create smooth micro-interactions and prepare assets for clean handoff using Zeplin or Zeroheight.",
      color: "orange",
      wide: true,
    },
  ];

  const aiFeatures = [
    "Summarise research and find patterns faster",
    "Prompt design for ideas, copy and UI exploration",
    "Automate repetitive design and handoff tasks",
    "Review AI output for quality, bias and accessibility",
  ];

  return (
    <section className="curriculum-section">
      <div className="curriculum-container">

        <span className="curriculum-label">
          ✦ Real-world curriculum
        </span>

        <h2 className="curriculum-heading">
          What you <span>Mastered in</span>
          <br />
          <span>UI/UX Design.</span>
        </h2>

        <p className="curriculum-description">
          Six modules that follow how professional design teams work today,
          from research to handoff, now with AI in the workflow.
        </p>

        <div className="curriculum-grid">
          {modules.map((module) => (
            <div
              className={`curriculum-card ${module.wide ? "wide-card" : ""}`}
              key={module.number}
            >
              <div className={`module-number ${module.color}`}>
                {module.number}
              </div>

              <div className="module-content">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
            </div>
          ))}

          <div className="ai-workflow-card">
            <div className="ai-workflow-left">
              <div className="module-number ai-number">06</div>

              <div className="ai-main-content">
                <span className="ai-badge">NEW · AI IN DESIGN</span>
                <h3>AI-Powered Design Workflow</h3>
                <p>
                  Learn to use AI as a design partner, not a shortcut.
                  Speed up research, ideation and repetitive tasks while
                  keeping your own judgment and craft at the centre.
                </p>
              </div>
            </div>

            <div className="ai-feature-list">
              {aiFeatures.map((feature, index) => (
                <div className="ai-feature" key={index}>
                  <span>✦</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Curriculum;
