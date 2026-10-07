import { Link } from "react-router-dom";
import styles from "./LandingSection.module.scss";
import logo from "../../assets/images/logo-1.png";

const LandingSection = () => {
  return (
    <div className={styles.landingSection}>
      <section className={styles.content}>
        <div className={styles.text}>
          <h1>
            Build Faster with
            <span className={styles.gradientText}> Reusable Components</span>
          </h1>
          <p>
            A modern and developer-friendly library to streamline your
            development workflow.
          </p>
          <Link
            to="/frontend/components/accordion"
            className={styles.ctaButton}
          >
            Explore Components
          </Link>
        </div>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </section>
    </div>
  );
};

export default LandingSection;
