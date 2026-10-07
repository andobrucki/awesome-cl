import styles from "./FeatureCards.module.scss";
import { FaCode, FaRocket, FaBook, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaCode />,
    title: "Reusable Components",
    description:
      "Write less code and speed up your development with reusable building blocks.",
  },
  {
    icon: <FaRocket />,
    title: "High Performance",
    description:
      "Optimized components for blazing-fast rendering and seamless user experience.",
  },
  {
    icon: <FaBook />,
    title: "Documentation",
    description:
      "Easy-to-follow guides and examples to help you get started quickly.",
  },
  {
    icon: <FaUsers />,
    title: "Active Community",
    description:
      "Join the community of developers and contribute to the library.",
  },
];

const FeatureCards = () => {
  return (
    <div className={styles["feature-cards-section"]}>
      <h2 className={styles["feature-section-title"]}>
        Why Choose Our Component Library?
      </h2>
      <div className={styles["feature-cards"]}>
        {features.map((feature, index) => (
          <div key={index} className={styles["feature-card"]}>
            <div className={styles["feature-icon"]}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
