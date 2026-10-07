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
          <a href="tel:+491234567890" className={styles.link}>
            <FaPhone className={styles.icon} />
            <h3>Call Us</h3>
            <p>(+49) 1234 567890</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="mailto:info@awesomecl.com" className={styles.link}>
            <FaEnvelope className={styles.icon} />
            <h3>Email Us</h3>
            <p>info@awesomecl.com</p>
          </a>
        </div>
        <div className={styles.card}>
          <a
            href="https://www.google.com/maps/place/Berlin,+Germany"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Find Us</h3>
            <p>Berlin, Germany</p>
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.socialIcons}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaTwitter className={styles.icon} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaLinkedin className={styles.icon} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaInstagram className={styles.icon} />
            </a>
          </div>
          <h3>Follow Us</h3>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
