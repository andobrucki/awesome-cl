import { useState } from "react";
import styles from "../Switch/Switch.module.scss";

const Switch = ({
  aria = "switch",
  color = "default",
  onChange,
  style,
  size = "md",
  radius = "lg",
  checked = false,
  className = "",
  sliderColor = "",
  children,
}) => {
 
  const [isChecked, setIsChecked] = useState(checked); 
  
  // Combine CSS module class names with any global Tailwind classes passed as props
  const combinedClassNames = `
 ${styles.switch} 
 ${styles[`radius-${radius}`]} 
 ${styles[`size-${size}`]} 
  ${styles[`color-${color}`]}
   ${isChecked ? styles.checked : ""}
 `.trim();

  // Final class names with Tailwind/global classes appended last for easy overriding
  const finalClassNames = `${combinedClassNames} ${className}`.trim();


  // Handle toggle change
  const handleToggle = () => {
    setIsChecked((prevState) => {
      const newCheckedState = !prevState;
      if (onChange) onChange(newCheckedState);
      return newCheckedState;
    });
  };

  return (
    <div className={styles.switchContainer}>
      <div
        role="switch"
        aria-checked={isChecked}
        aria-label={aria}
        onClick={handleToggle}
        style={style} // Allow for inline styles to be passed
        className={finalClassNames}
      >
        <div
          className={`${styles.slider} ${isChecked ? styles.checked : ""}`}
          style={{
            backgroundColor: sliderColor,
          }}
        />
      </div>{" "}
      {children && <label className={styles.switchLabel}>{children}</label>}
    </div>
  );
};

export default Switch;
