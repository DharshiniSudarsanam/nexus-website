
import React from "react";
import "./Advantages.css";

function Advantages() {
  const advantages = [
    { icon: "▱", title: "Job-Ready", subtitle: "Learning" },
    { icon: "♧", title: "1:1", subtitle: "Mentoring" },
    { icon: "▣", title: "Portfolio &", subtitle: "Career Support" },
    { icon: "▤", title: "Interview", subtitle: "Assistance" },
  ];

  return (
    <section className="advantages-section">
      <h2>Unique Advantages you get with US. 🤗</h2>

      <div className="advantages-list">
        {advantages.map((item) => (
          <div className="advantage-item" key={item.title}>
            <div className="advantage-icon">{item.icon}</div>
            <div>
              <p>{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;
