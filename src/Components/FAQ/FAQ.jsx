import { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is TRUEERP and who is it designed for?",
      answer:
        "TRUEERP is a complete ERP solution designed specifically for mechanical, manufacturing, fabrication, and industrial businesses. It helps automate quotations, orders, purchases, BOM, inventory, payroll, and financial dashboards."
    },
    {
      question: "Can TRUEERP manage the end-to-end workflow of a manufacturing business?",
      answer:
        "Yes, TRUEERP handles the full workflow from quotation to dispatch, including production planning, inventory tracking, purchase management, payroll, and reporting."
    },
    {
      question: "Is TRUEERP cloud-based or offline?",
      answer:
        "TRUEERP supports both cloud-based deployment and on-premise installation depending on business requirements."
    },
    {
      question: "Can I customize modules based on my business requirements?",
      answer:
        "Yes, TRUEERP allows customization of modules, workflows, and reports according to your business needs."
    },
    {
      question: "How secure is my data in TRUEERP?",
      answer:
        "TRUEERP uses secure authentication, role-based access control, encrypted backups, and compliance standards to protect your business data."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">

      <div className="faq-left">
        <h2>Have a question? Check out the FAQ</h2>
        <p>
          We have covered the key questions to help you understand TRUEERP better.
        </p>
      </div>

      <div className="faq-right">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h4>{item.question}</h4>
              <span className="arrow">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
