import React, { useState } from "react";
import styles from "./FAQSection.module.scss";
import { FaChevronDown } from "react-icons/fa";

const questionsAnswers = [
  {
    question: "What Services Do You Offer?",
    answer:
      "We offer a comprehensive range of services including custom component development, UI/UX design, and consultation to help you build and optimize your websites efficiently.",
  },
  {
    question: "How Can A Component Library Help My Websites?",
    answer:
      "A component library provides pre-built, reusable components that can significantly speed up the development process. By using our library, you can ensure consistency, enhance maintainability, and reduce development time.",
  },
  {
    question: "What Sets Awesome-CL Components Library Apart From Others?",
    answer:
      "Awesome-CL Components Library is tailored for junior developers and recent graduates, offering intuitive, easy-to-use components that are well-documented. Our library focuses on practical usage and real-world examples to help you get started quickly.",
  },
  {
    question: "How Do You Approach Website Development?",
    answer:
      "Our approach to website development is user-centric and agile. We collaborate closely with users to understand users needs and goals, ensuring that the components we provide are aligned with your vision. We emphasize responsive design, accessibility, and performance.",
  },
  {
    question: "How Can I Implement The Components In My Project?",
    answer:
      "Implementing our components is straightforward. Simply install our library via npm or yarn, and import the necessary components into your project. Detailed documentation and example code are provided to guide you through the process.",
  },
  {
    question: "How Do I Choose Components For My Needs?",
    answer:
      "Choosing components is easy with our categorized library. We provide detailed descriptions, usage examples, and guidelines for each component to help you select the best fit for your project requirements.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {questionsAnswers.map((qa, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {qa.question}
              <FaChevronDown
                className={
                  activeIndex === index ? styles.rotateIcon : styles.icon
                }
              />
            </button>
            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              <p>{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
