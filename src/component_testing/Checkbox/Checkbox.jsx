import React, { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({
  aria = "checkbox",
  variant = "subtle",
  color = "default",
  onChange,
  style,
  size = "md",
  radius = "sm",
  border = "sm",
  checked = false,
  className = "",
  checkmarkColor = "currentColor",
  children,
  labelPosition = "right",
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  // Combine CSS module class names with any global Tailwind classes passed as props
  const combinedClassNames = `
 ${styles.checkbox} 
${styles[`variant-${variant}`]}
 ${styles[`border-${border}`]} 
 ${styles[`radius-${radius}`]} 
 ${styles[`color-${color}`]} 
 ${styles[`size-${size}`]} 
 ${isChecked ? styles.checked : ""}
 `.trim();

  // Final class names with Tailwind/global classes appended last for easy overriding
  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  // Handle toggle change
  const handleToggle = () => {
    setIsChecked((prevState) => {
      const newCheckedState = !prevState;
      console.log("Checkbox checked:", newCheckedState);
      if (onChange) onChange(newCheckedState);

      return newCheckedState;
    });
  };

  return (
    <div
      className={`${styles.container} ${styles[`label-${labelPosition}`]}`}
      style={style}
      onClick={handleToggle}
      role="checkbox"
      aria-checked={isChecked}
      aria-label={aria}
    >
      <div className={finalClassNames}>
        {isChecked && (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.checkmark}
            style={{ fill: checkmarkColor }}
          >
            <path d="M20.285 6.71a1 1 0 0 0-1.414-1.414l-9.9 9.9-3.958-3.958a1 1 0 0 0-1.414 1.414l4.672 4.672a1 1 0 0 0 1.414 0l10.6-10.6z" />
          </svg>
        )}
      </div>
      {children && <span className={styles.label}>{children}</span>}
    </div>
  );
};

export default Checkbox;
