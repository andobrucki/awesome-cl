import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RenderCode } from "../RenderCode/RenderCode";
import styles from "./MainBackendLayout.module.scss";

//This component is rendering the controllers but could also be used on
//other pages. !! The Json have to be the same as the controller.json

export function MainBackendLayout({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (data && data.length >= 2) {
      const foundComponent = data.find((comp) => comp.title === name);
      setComponent(foundComponent);
    } else {
      setComponent(data);
    }
  }, [name, data]);

  console.log("name", name, "data", data);
  console.log("component", component);

  if (component) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          {component?.oldTitle ||
            component?.title[0].toUpperCase() + component?.title.slice(1)}
        </h2>{" "}
        <p className={styles.description}>{component?.description}</p>{" "}
        {component?.controllers?.length > 0 ? (
          component.controllers.map((controller) => (
            <div key={controller.title} className={styles.controller}>
              <h2 className={styles.controllerTitle}>{controller.title}</h2>
              <p className={styles.controllerDescription}>
                {controller.description}
              </p>
              <RenderCode code={controller.code} />{" "}
            </div>
          ))
        ) : (
          <p>No controllers available</p>
        )}
      </div>
    );
  }
  return null;
}
