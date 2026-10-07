import React from "react";
import styles from "./Image.module.scss";

const Image = ({
  width,
  height,
  alt = "Image alt text",
  src,
  isZoomed = false,
  aria,
  classNameWrapper = "",
  classNameImage = "",
  radius = "lg",
  style,
  objectFit = "cover",
  onClick,
  onLoad,
}) => {
  const combinedClassNameWrapper = `${styles["image-wrapper"]} ${
    styles[`radius-${radius}`]
  } ${isZoomed ? styles.zoomedWrapper : ""} ${classNameWrapper}`.trim();

  const combineClassNameImage = `${styles["image"]} ${classNameImage} ${
    isZoomed ? styles.zoomedImage : ""
  }`.trim();

  const dynamicStyle = { width, height, objectFit, ...style };

  return (
    <div className={combinedClassNameWrapper}>
      <img
        alt={alt}
        src={src}
        aria-label={aria}
        className={combineClassNameImage}
        style={dynamicStyle}
        onClick={onClick}
        onLoad={onLoad}
      />
    </div>
  );
};

export default Image;
