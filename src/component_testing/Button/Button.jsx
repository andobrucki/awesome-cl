import styles from "./Button.module.scss";

// define component and props, give default for props
const Button = ({
  children,
  aria = "button",
  color = "primary",
  onClick,
  style,
  size = "md",
  radius = "none",
  border = "none",
  className="",
}) => {


 // Combine CSS module class names with any global Tailwind classes passed as props
  const combinedClassNames = `
  ${styles.button} 
  ${styles[`border-${border}`]} 
  ${styles[`radius-${radius}`]} 
  ${styles[`color-${color}`]} 
  ${styles[`size-${size}`]} 
  `.trim();

  // Final class names with Tailwind/global classes appended last for easy overriding
  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  // props that are not part of the predefined styling options need to be passed in the component
  return (
    <button 
    onClick={onClick} 
    style={style} 
    className={finalClassNames} 
    aria-label={aria}>
      {children}
    </button>
  );
};

export default Button;
