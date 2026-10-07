import React from "react";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import styles from "./Card.module.scss";

const Card = ({
  variant = "subtle",
  size = "md",
  radius = "md",
  children,
  isInteractive = true,
  horizontal = false,
  imageTop = false,
  avatar = null,
  className = "",
  style,
  image = null,
  title = "",
  description = "",
  footer = null,
  titleAlignment = "center",
  footerAlignment = "center",
  aria = "card",
}) => {
  let avatarContent = avatar || null;
  let imageContent = image || null;
  let buttonContents = [];

  // Normalize children to handle single or multiple elements
  const normalizedChildren = React.Children.toArray(children);
  normalizedChildren.forEach((child) => {
    if (child.type === Avatar && !avatarContent) {
      avatarContent = child;
    } else if (child.type === Image && !imageContent) {
      imageContent = child;
    } else if (child.type === Button) {
      buttonContents.push(child);
    }
  });

  const combinedClassNames = `
${styles.card} 
${styles[`variant-${variant}`]}
${styles[`size-${size}`]} 
${styles[`radius-${radius}`]}
${isInteractive ? styles.interactive : ""}
${horizontal ? styles.horizontal : ""}
${avatar ? styles.withAvatar : ""}
${imageTop ? styles.withImageTop : ""}
${styles[`title-align-${titleAlignment}`]} // Dynamic title alignment
${styles[`footer-align-${footerAlignment}`]} // Dynamic footer alignment
`.trim();

  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  return (
    <div className={finalClassNames} style={style} role={aria}>
      {avatarContent && (
        <div className={styles.cardAvatar}>{avatarContent}</div>
      )}
      {imageContent && (
        <div className={styles.cardImageWrapper}>{imageContent}</div>
      )}

      <div className={styles.contentContainer}>
        {title && <div className={styles.cardTitle}>{title}</div>}
        {description && (
          <div className={styles.cardDescription}>{description}</div>
        )}
        {(footer || buttonContents.length > 0) && (
          <div className={styles.cardFooter}>
            {footer}
            {buttonContents.length > 0 && (
              <div className={styles.cardButtons}>
                {buttonContents.map((button, index) => (
                  <div key={index} className={styles.cardButton}>
                    {button}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
