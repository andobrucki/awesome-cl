import React from "react";
import styles from "./Instructions.module.scss";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to Awesome CL</h1>
      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>Built for Students by Students</h2>
        <p className={styles.paragraph}>
          Say hello to Awesome CL, the community-driven component library that
          brings style, power, and simplicity to your projects. This project was
          build by us for you to find an{" "}
          <Link to="/instructions/getting-started" className={styles.link}>
            EASY START
          </Link>{" "}
          in developing your first react app. With all the components and
          utilities you need for a quick production process and awesome results.
        </p>
      </section>

      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>Why Awesome CL Rocks</h2>
        <p className={styles.paragraph}>
          From sleek UI elements to robust functionality, Awesome CL packs a
          punch. Whether you're prototyping or building production-grade apps,
          we've got components that are as beautiful as they are powerful. And
          that is not all: the best part about Awesome CL is its community. You
          want to be a part? Don't hesitate to{" "}
          <Link to="/contact" className={styles.link}>
            CONNECT WITH US
          </Link>
          !
        </p>
      </section>
      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>
          Backend Meets Frontend - One Library to Rule Them All
        </h2>
        <p className={styles.paragraph}>
          Awesome CL isn't just another pretty UI kit. It's optimized for the
          modern MERN stack, running seamlessly in{" "}
          <Link to="/frontend" className={styles.link}>
            FRONTEND
          </Link>{" "}
          frameworks like React and offers{" "}
          <Link to="/backend" className={styles.link}>
            BACKEND
          </Link>{" "}
          utilities for Express.js backed applications out of the box. No need
          to collect single pieces to put together a full stack app anymore. If
          you're looking for the one place that has it all Awesome CL has got
          you covered!
        </p>
      </section>
      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>Make It Yours - 100% Customizable</h2>
        <p className={styles.paragraph}>
          No cookie-cutter designs here. With Awesome CL, you're the designer.
          Fine-tune every component to match your style, your brand, and your
          vibe. Use build-in styles or add your own custom branding. Awesome CL
          even comes with a seemless integration for Tailwind CSS to open
          unlimitted possibilities to{" "}
          <Link to="/customization" className={styles.link}>
            CUSTOMIZE
          </Link>{" "}
          your projects.
        </p>
      </section>
      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>The Future Looks Awesome</h2>
        <p className={styles.paragraph}>
          We're just getting started! Expect new features, more integrations,
          and a growing collection of killer components. Here are just a few
          bullet points from our roadmap for the future:
        </p>
        <ul className={styles.list}>
          <li className={styles.futureFeature}>
            <span>Layout integration</span>
          </li>
          <li className={styles.futureFeature}>
            <span>CMS integration</span>
          </li>
          <li className={styles.futureFeature}>
            <span>More themes</span>
          </li>
          <li className={styles.futureFeature}>
            <span>More components</span>
          </li>
          <li className={styles.futureFeature}>
            <span>Awesome Animations</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Introduction;
