import styles from "./ContactForm.module.scss";
import contactImage from "../../../assets/images/digital-connection.jpg";
import { useState } from "react";
import Modal from "../../../component_testing/Modal/Modal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      setIsSubmitting(true);
      const response = await fetch("https://formspree.io/f/myzydvka", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setShowModal(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactImage}>
        <img src={contactImage} alt="Contact Us" />
      </div>
      <div className={styles.formContainer}>
        <h2>Get In Touch With Us</h2>
        <p>
          We'd love to hear from you. Please fill out the form below and we'll
          get in touch as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>
              Full Name*
              <input type="text" placeholder="Full Name" name="name" required />
            </label>
            <label>
              Phone*
              <input type="text" placeholder="Phone" name="phone" required />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Email
              <input type="email" placeholder="Email" name="email" />
            </label>
            <label>
              Subject
              <input type="text" placeholder="Subject" name="subject" />
            </label>
          </div>
          <label>
            Message
            <textarea
              placeholder="Your message here..."
              name="message"
              required
            ></textarea>
          </label>
          <button type="submit">Enquire Now</button>
        </form>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Thank you for your message! We'll get back to you soon.</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
