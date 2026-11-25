
import React from "react";
import "./CompanyLogos.css";

function CompanyLogos() {
  const companies = [
    "Finly",
    "Kettle",
    "Tessellate",
    "Orbit Health",
    "Northstar",
    "Bluepine",
  ];

  return (
    <section className="company-section">
      <div className="company-heading">
        OUR GRADUATES NOW
        <br />
        DESIGN AT
      </div>

      <div className="company-list">
        {companies.map((company) => (
          <div className="company-item" key={company}>
            <span className="company-diamond"></span>
            <span>{company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyLogos;
