import styles from "./Input.module.scss";

// define component and props, give default for props
const Input = ({
  className = "",
  type = "text",
  required = false,
  aria = "input",
  color = "default",
  style,
  size = "sm",
  radius = "md",
  border = "default",
  label,
  placeholder,
  labelPlacement = "outside",
  value,
  onValueChange,
}) => {
  // Combine CSS module class names with any global Tailwind classes passed as props
  const combinedClassNames = `
    ${styles.input} 
    ${styles[`size-${size}`]} 
    ${styles[`radius-${radius}`]} 
    ${styles[`color-${color}`]} 
    ${styles[`border-${border}`]} 
  `.trim();

  // Final class names for input tag with Tailwind/global classes appended last for easy overriding
  const inputClassNames = `${combinedClassNames} ${className}`.trim();

  //  class names for the label
  const labelClassNames = `${styles.label} ${
    styles[`label-${labelPlacement}`]
  }`.trim();

  //   class names for wrapper around input/label
  const wrapperClassNames =
    labelPlacement === "outside-left"
      ? styles["input-wrapper-inline"]
      : styles["input-wrapper"];

  // props that are not part of the predefined styling options need to be passed in the component
  return (
    <div style={style} className={wrapperClassNames}>
      <label htmlFor={label} className={labelClassNames}>
        {label}
      </label>
      <input
        type={type}
        required={required}
        className={inputClassNames}
        aria-label={aria}
        placeholder={placeholder}
        value={value}
        name={label}
        onChange={onValueChange}
      />
    </div>
  );
};

export default Input;
