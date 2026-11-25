
import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const questions = [
    {
      question: "Do I need coding experience?",
      answer: "",
    },
    {
      question: "Do I need design experience?",
      answer:
        "No, but design literacy helps. You'll learn to read a Figma file, specs and redlines.",
    },
    {
      question: "Can I do this while working?",
      answer:
        "Yes, class time can be scheduled as per your availability.",
    },
    {
      question: "Online or offline?",
      answer:
        "Both. Live online with recordings, or the Baner, Pune studio option. Same briefs, same critique.",
    },
    {
      question: "Will I get placement support?",
      answer:
        "Yes — portfolio reviews, mock interviews, code-interview practice and partner referrals. Even after placement.",
    },
  ];

  const [openItems, setOpenItems] = useState([1, 2, 3, 4]);

  const toggleQuestion = (index) => {
    setOpenItems((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <span className="faq-label">✦ FAQ</span>

        <h2>
          Questions before <span>you apply.</span>
        </h2>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
