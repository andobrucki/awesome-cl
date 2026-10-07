import styles from "./ContactDetails.module.scss";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactDetails = () => {
  return (
    <section className={styles.contactDetails}>
      <div className={styles.contactCards}>
        <div className={styles.card}>
          <a href="tel:+49 (0)30 29778930" className={styles.link}>
            <FaPhone className={styles.icon} />
            <h3>Call Us</h3>
            <p>+49 (0)30 29778930</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="mailto:krst@mailbox.org" className={styles.link}>
            <FaEnvelope className={styles.icon} />
            <h3>Email Us</h3>
            <p>krst@mailbox.org</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
