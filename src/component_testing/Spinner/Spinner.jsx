import styles from "../Spinner/Spinner.module.scss";

const Spinner = ({
  size = "lg",
  thickness = "lg",
  color = "default",
  speed = "1s",
  style,
  className = "",
}) => {
  // Combine CSS module class names with any global Tailwind classes passed as props
  const combinedClassNames = `
 ${styles.spinner} 
${styles[`thickness-${thickness}`]}
 ${styles[`color-${color}`]} 
 ${styles[`size-${size}`]} 
 `.trim();

  // Final class names with Tailwind/global classes appended last for easy overriding
  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  return (
    <>
      {" "}
      <div
        role="status"
        aria-busy="true"
        style={{ ...style, animationDuration: speed }}
        className={finalClassNames}
      />
    </>
  );
};

export default Spinner;
