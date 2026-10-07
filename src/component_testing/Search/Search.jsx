import Button from "../Button/Button";
import styles from "./Search.module.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";

// define component and props, give default for props
const Search = ({
  className = "",
  aria = "search",
  color = "default",
  size = "sm",
  radius = "md",
  border = "default",
  placeholder,
  buttonPlacement = "inside-end",
  style,
  value,
  onValueChange,
  onSearchClick,
}) => {
  // Combine CSS module class names with any global Tailwind classes passed as props

  const combinedClassNames = `
    ${styles.input} 
    ${styles[`size-${size}`]} 
    ${buttonPlacement.includes("outside") ? styles[`border-${border}`] : ""}
    ${buttonPlacement.includes("outside") ? styles[`radius-${radius}`] : ""}
  `.trim();

  // Final class names for input tag with Tailwind/global classes appended last for easy overriding
  const searchClassNames = `${combinedClassNames} ${className}`.trim();

  const buttonClassNames = `${styles.button} ${styles[buttonPlacement]} ${
    buttonPlacement.includes("outside") ? styles[`radius-${radius}`] : ""
  } ${buttonPlacement.includes("outside") ? styles[`border-${border}`] : ""} ${
    styles[`border-${border}`]
  }`.trim();

  const innerClassNames = `${styles["inner-wrapper"]} ${
    buttonPlacement.includes("inside") ? styles["bordered"] : ""
  } ${buttonPlacement.includes("inside") ? styles[`border-${border}`] : ""}
    ${
      buttonPlacement.includes("inside") ? styles[`radius-${radius}`] : ""
    }`.trim();

  const outerClassNames = `${styles["outer-wrapper"]} ${
    styles[`color-${color}`]
  }`.trim();

  const renderButton = () => (
    <Button
      className={buttonClassNames}
      onClick={onSearchClick}
      aria-label="search button"
    >
      <FaMagnifyingGlass />
    </Button>
  );

  // props that are not part of the predefined styling options need to be passed in the component
  return (
    <div className={outerClassNames} style={style}>
      {buttonPlacement === "outside-start" && renderButton()}
      <div className={innerClassNames}>
        {buttonPlacement === "inside-start" && renderButton()}
        <input
          type={"search"}
          className={searchClassNames}
          aria-label={aria}
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
        />
        {buttonPlacement === "inside-end" && renderButton()}
      </div>
      {buttonPlacement === "outside-end" && renderButton()}
    </div>
  );
};

export default Search;
