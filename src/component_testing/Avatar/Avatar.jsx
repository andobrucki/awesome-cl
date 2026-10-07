import React, { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import styles from "./Avatar.module.scss";

const Avatar = ({
  src,
  avatarName,
  name,
  description,
  size = "md",
  color = "primary",
  shape = "circle",
  radius = "none",
  className = "",
  style,
}) => {
  //Memoize the DiceBear avatar SVG generation based on the name
  const avatarSVG = useMemo(() => {
    if (avatarName) {
      const avatar = createAvatar(adventurer, { seed: avatarName });
      return avatar.toString();
    }
    return null;
  }, [avatarName]);

  const combinedClassNames = `
    ${styles.avatar}
    ${styles[`size-${size}`]}
    ${styles[`color-${color}`]}
    ${styles[`shape-${shape}`]}
    ${styles[`radius-${radius}`]}
  `.trim();

  return (
    <aside className={styles.wrapper}>
      <div className={`${combinedClassNames} ${className}`}>
        <div className={`${styles.gap} ${combinedClassNames} `}>
          {src ? (
            <div className={` ${styles.avatarSvgContainer}`}>
              <img src={src} alt={avatarName} />
            </div>
          ) : avatarSVG ? (
            <div
              className={` ${styles.avatarSvgContainer}`}
              dangerouslySetInnerHTML={{ __html: avatarSVG }}
              aria-label={avatarName}
            />
          ) : (
            <span>{avatarName}</span>
          )}
        </div>
      </div>
      <div>
        {name ? <h3 className={styles.h3}>{name}</h3> : null}
        {description ? <p>{description}</p> : null}
      </div>
    </aside>
  );
};

export default Avatar;
