import React, { useState } from "react";
import DynamicComponent from "../../components/DinamicComponent/DinamicComponent";
import { RenderCode } from "../RenderCode/RenderCode";
import Button from "../../component_testing/Button/Button";
import styles from "./ExampleViewer.module.scss";

export default function ExampleViewer({ example }) {
  const [showPreview, setShowPreview] = useState(true);
  if (example) {
    return (
      <section className={styles.DynamicComponent}>
        <div className={styles.toggleButtons}>
          <Button
            onClick={() => setShowPreview(true)}
            className={showPreview ? styles.active : ""}
          >
            Preview
          </Button>
          <Button
            onClick={() => setShowPreview(false)}
            className={showPreview ? "" : styles.active}
          >
            Code
          </Button>
        </div>
        <div
          className={`${styles.componentDisplay} ${
            showPreview ? styles.previewView : styles.codeView
          }`}
        >
          {showPreview ? (
            <ul className={styles.componentUl}>
              {example.components.map((component, index) => {
                const { type, props, children } = component;

                return (
                  <li key={index}>
                    <DynamicComponent
                      type={type}
                      props={props}
                      children={children}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <RenderCode code={example.code} />
          )}
        </div>
      </section>
    );
  } else {
    return <p>Alles wird gut</p>;
  }
}
