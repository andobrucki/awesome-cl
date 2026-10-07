import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/awesome-logo.png";
import ContactPage from "../../pages/ContactPage/ContactPage";
import AboutUs from "../../pages/AboutUs/AboutUs";
import LegalNotice from "../../pages/LegalNotice/LegalNotice";

const Footer = ({ isSidebarOpen }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("awesomeCL@protonmail.com");
    alert("Email address copied to clipboard!");
  };
  return (
    <footer
      className={`${styles.footer} ${
        isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.links}>
            {/* <h4>Quick Links</h4> */}
            <h4>About</h4>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/legalnotice">Legal Notice</a>
          </div>
          <div className={styles.social}>
            <h4>Contact</h4>
            <a
              href="https://github.com/Team-Collaborators/Awesome-CL"
              target="blank"
            >
              <FaGithub style={{ marginRight: "10px" }} /> Github
            </a>
            <a
              href="#"
              onClick={copyToClipboard}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              <FaEnvelope style={{ marginRight: "10px" }} /> Email
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Awesome CL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
