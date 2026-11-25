
import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      badge: "HIRED IN 11 WEEKS",
      quote:
        "I worked as a graphic designer for 4 years, mostly posters and social media, but I wanted to switch to a UI/UX job. So, I joined Nexus Academy. Overall, good and updated teaching helped me in job placements.",
      initials: "RS",
      name: "Sathya Moorthy, 24",
      role: "UI Designer · Finly",
      before: "Graphic Designer",
      after: "UI Designer",
      color: "green",
    },
    {
      badge: "HIRED IN 16 WEEKS",
      quote:
        "My mentors were UI/UX designers working in industry, so I learned how real projects actually run. They showed me what companies expect and the working environment, not just what tools do.",
      initials: "KI",
      name: "Karan Iyer, 29",
      role: "Product Designer · Kettle",
      before: "Sales analyst",
      after: "Product Designer",
      color: "blue",
    },
    {
      badge: "INTERNSHIP CONVERTED",
      quote:
        "I joined in my final year. By graduation I had an internship, a case study and a referral — no cold applying.",
      initials: "AR",
      name: "Ananya Rao, 21",
      role: "UX Designer · Azentra",
      before: "Final-year student",
      after: "UX Designer",
      color: "orange",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* HEADER */}

        <div className="testimonials-header">
          <div className="testimonials-title-area">
            <span className="testimonials-label">
              ✦ REAL OUTCOMES
            </span>

            <h2>
              They started where you are. Then
              <br />
              the <span>offers came.</span>
            </h2>
          </div>

          <div className="testimonials-rating">
            <div className="rating-number">4.9</div>

            <div className="rating-details">
              <div className="rating-stars">★★★★★</div>
              <span>640 verified learner reviews</span>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.initials}>

              <div className="testimonial-card-top">
                <span className="testimonial-stars">★★★★★</span>

                <span className={`result-badge ${review.color}`}>
                  {review.badge}
                </span>
              </div>

              <p className="testimonial-quote">
                {review.quote}
              </p>

              <div className="testimonial-divider"></div>

              <div className="student-details">
                <div className={`student-avatar ${review.color}`}>
                  {review.initials}
                </div>

                <div className="student-info">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>

              <div className="career-transition">
                <strong>Before</strong>
                <span>{review.before}</span>
                <span className="transition-arrow">→</span>
                <strong className="now-label">Now</strong>
                <span>{review.after}</span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
