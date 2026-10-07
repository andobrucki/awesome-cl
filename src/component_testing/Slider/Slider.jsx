import { useState } from "react";
import styles from "../Slider/Slider.module.scss";

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value: initialValue = 0,
  onChange,
  size = "md",
  length = "100%", // Default to full width
  trackColors = ["default-light", "default-base"], // Gradient or start/end colors
  thumbColor = "default-dark",
  style,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);

  // Calculate the percentage of the current value relative to the range
  const getTrackGradient = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(90deg, ${trackColors[0]} ${percentage}%, ${trackColors[1]} ${percentage}%)`;
  };

  // Handle slider value change
  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className={styles.sliderContainer} style={{ width: length, ...style }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className={`${styles.slider} ${className}`}
        aria-label="slider"
        style={{
          background: getTrackGradient(),
          height: size === "md" ? "6px" : size === "lg" ? "10px" : "4px",
        }}
      />
      <div className={styles.valueLabel}>{value}</div> {/* Optional: Display value */}
    </div>
  );
};

export default Slider;
