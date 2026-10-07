import React, { useState } from "react";
import styles from "./Instructions.module.scss";
import { RenderCode } from "../../components/RenderCode/RenderCode";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  const installData = [
    {
      name: "npm",
      command:
        "npm install git+https://github.com/Team-Collaborators/Awesome-CL.git",
      path: "/icons/npm-brands-solid.svg",
    },
    {
      name: "yarn",
      command:
        "yarn add git+https://github.com/Team-Collaborators/Awesome-CL.git",
      path: "/icons/yarn-brands-solid.svg",
    },
    {
      name: "pnpm",
      command:
        "pnpm add git+https://github.com/Team-Collaborators/Awesome-CL.git",
      path: "/icons/cubes-solid.svg",
    },
    {
      name: "bun",
      command:
        "bun add git+https://github.com/Team-Collaborators/Awesome-CL.git",
      path: "/icons/lemon-regular.svg",
    },
  ];

  const [installation, setInstallation] = useState(
    "npm install git+https://github.com/Team-Collaborators/Awesome-CL.git"
  );

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Getting Started</h1>
      <section className={styles.installationSection}>
        <h2 className={styles.subtitle}>Installation</h2>
        <p className={styles.paragraph}>
          Installing Awesome CL is as easy as it gets. Simply choose your
          favourite package manager and copy the command to your terminal.
        </p>
        <ul>
          {installData.map((elem) => (
            <li key={elem.name} style={{ textAlign: "center" }}>
              <button
                className={styles.someIcon}
                onClick={() => setInstallation(elem.command)}
              >
                <img src={elem.path} alt={elem.name} />
                <span>{elem.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.codeDisplay} style={{ textAlign: "left" }}>
          <RenderCode className={styles.code} code={installation} />
        </div>
        <p className={styles.paragraph}>
          After the short install you're ready to go! Browse the frontend
          components or check out the backend utilities according to your needs!
        </p>
      </section>

      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>Importing components</h2>
        <p className={styles.paragraph}>
          Now import components where ever you need them with a simple import
          command.
        </p>

        <div className={styles.code}>
          <RenderCode code={'import { Button } from "AwesomeCL"'} />
        </div>

        <p className={styles.paragraph}>
          To import the style sheet add it to you main CSS file:
        </p>
        <div className={styles.code}>
          <RenderCode
            code={'@import "/node_modules/AwesomeCL/dist/exports.css";'}
          />
        </div>

        <p className={styles.paragraph}>
          And voilá. Now you're ready to style and{" "}
          <Link to="/instructions/customization" className={styles.link}>
            CUSTOMIZE
          </Link>{" "}
          your component.
        </p>
      </section>
    </div>
  );
};

export default GettingStarted;
