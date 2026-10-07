import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode/RenderCode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ExampleViewer from "../../components/ExampleViewer/ExampleViewer";
import Table from "../../components/Table/Table";
import styles from "./MainFrontendLayout.module.scss";

export function MainFrontendLayout({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);
  const [installation, setInstallation] = useState(
    "npm install git+https://github.com/Team-Collaborators/Awesome-CL.git"
  );

  useEffect(() => {
    if (data && data.length >= 2) {
      const foundComponent = data.find((comp) => comp.title === name);
      setComponent(foundComponent);
    } else {
      setComponent(data);
    }
  }, [name, data]);

  if (component) {
    return (
      <div className={styles.renderComponentPage}>
        <header className={styles.header}>
          <h2 className={styles.h2}>
            {component.title[0].toUpperCase() +
              component.title.slice(1).toLowerCase()}
          </h2>
          <p className={styles.description}>{component.description}</p>
        </header>
        <main className={styles.main}>
          <section className={styles.installationSection}>
            <h2 className={styles.h2}>Installation</h2>
            {component.installation && (
              <>
                <ul className={styles.ul}>
                  {component.installation.map((elem) => (
                    <li className={styles.li} key={elem.name}>
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
                <div className={styles.codeDisplay}>
                  <RenderCode code={installation} />
                </div>
              </>
            )}
          </section>
          <section className={styles.section}>
            <h2 className={styles.h2}>Import</h2>
            {component.import && (
              <>
                <p className={styles.importDescription}>
                  {component.import.description}
                </p>
                <RenderCode code={component.import.code} />
              </>
            )}
          </section>
          <section className={styles.section}>
            <h2 className={styles.h2}>Usage</h2>
            {component.examples.map((example, index) => (
              <div className={styles.viewBox} key={index}>
                <h2 className={styles.h2}>{example.title}</h2>
                <ExampleViewer example={example} />
              </div>
            ))}
          </section>
          <section className={styles.section}>
            <h2 className={styles.h2}>API</h2>
            <Table
              headers={component.propsTable.headers}
              rows={component.propsTable.rows}
            />
          </section>
          {component.propsTable2 ? (
            <section className={styles.section}>
              <h2 className={styles.h2}>{component.propsTable2.title}</h2>
              <p className={styles.p}>{component.propsTable2.description}</p>
              <Table
                headers={component.propsTable2.headers}
                rows={component.propsTable2.rows}
              />
            </section>
          ) : null}
          {component.eventsTable ? (
            <section className={styles.section}>
              <h2 className={styles.h2}>{component.eventsTable.title}</h2>
              <p>{component.eventsTable.description}</p>
              <Table
                headers={component.eventsTable.headers}
                rows={component.eventsTable.rows}
              />
            </section>
          ) : null}
          {component.accessibility ? (
            <section className={styles.section}>
              <h2 className={styles.h2}>{component.accessibility.title}</h2>
              <p>{component.accessibility.description}</p>
              <Table rows={component.accessibility.ariaRoles} />
            </section>
          ) : null}
        </main>
      </div>
    );
  }

  return null;
}
