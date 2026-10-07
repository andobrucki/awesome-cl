import { useState } from "react";
import hightechglasses from "../../assets/images/high-tech-glasses.jpg";
import styles from "./ProductCard.module.scss";

const THEMES = {
  default: {
    name: "VR Vision Pro Glasses",
    description:
      "Experience stunning visuals and immersive VR with cutting-edge optics.",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    theme: "default",
    image: hightechglasses,
  },
  "dark-theme": {
    name: "VR Vision Pro Glasses",
    description:
      "Experience stunning visuals and immersive VR with cutting-edge optics.",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    theme: "dark-theme",
    image: hightechglasses,
  },
  "neon-theme": {
    name: "VR Vision Pro Glasses",
    description:
      "Experience stunning visuals and immersive VR with cutting-edge optics.",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    theme: "neon-theme",
    image: hightechglasses,
  },
};

const ProductCard = ({
  theme: propTheme,
  name,
  description,
  price,
  originalPrice,
  discount,
  image,
  customTheme = {},
  onThemeChange,
  onBuyNow,
  onAddToBag,
}) => {
  const [theme, setTheme] = useState(propTheme || "default");
  const currentTheme = propTheme || theme;
  const [isHovered, setIsHovered] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (onThemeChange) onThemeChange(newTheme);
  };

  // Merge props with default values from the current theme
  const productDetails = {
    name: name || THEMES[currentTheme]?.name,
    description: description || THEMES[currentTheme]?.description,
    price: price || THEMES[currentTheme]?.price,
    originalPrice: originalPrice || THEMES[currentTheme]?.originalPrice,
    discount: discount || THEMES[currentTheme]?.discount,
    image: image || THEMES[currentTheme]?.image,
    theme: currentTheme,
  };

  // Combine custom styles with default styles
  const cardStyles = {
    backgroundColor:
      customTheme.backgroundColor || THEMES[currentTheme]?.backgroundColor,
    color: customTheme.textColor || THEMES[currentTheme]?.textColor,
    border: customTheme.border || THEMES[currentTheme]?.border,
    boxShadow: customTheme.boxShadow || THEMES[currentTheme]?.boxShadow,
  };

  const buttonStyles = {
    backgroundColor: customTheme.buttonBackground || undefined,
    color: customTheme.buttonTextColor || undefined,
    transition: "opacity 0.3s ease",
    opacity: isHovered ? customTheme.hoverOpacity || 1 : 1,
  };

  const titleStyles = {
    color: customTheme.textColor || undefined,
    fontWeight: customTheme.fontWeight || undefined,
    textShadow: customTheme.nameTextShadow || undefined,
  };

  const descriptionStyles = {
    color: customTheme.textColor || undefined,
    textShadow: customTheme.descriptionTextShadow || undefined,
  };

  const priceStyles = {
    color: customTheme.priceColor || undefined,
    fontWeight: customTheme.fontWeight || undefined,
  };

  const originalPriceStyles = {
    color: customTheme.originalPriceColor || undefined,
    fontWeight: customTheme.fontWeight || undefined,
    textDecoration: "line-through",
  };
  const discountStyles = {
    color: customTheme.discountColor || undefined,
    fontWeight: customTheme.fontWeight || undefined,
  };

  return (
    <>
      {!propTheme && (
        <div className={styles.themeSwitcher}>
          <button
            className={styles.default}
            onClick={() => handleThemeChange("default")}
          >
            Default
          </button>
          <button
            className={styles.darkTheme}
            onClick={() => handleThemeChange("dark-theme")}
          >
            Dark
          </button>
          <button
            className={styles.neonTheme}
            onClick={() => handleThemeChange("neon-theme")}
          >
            Neon
          </button>
        </div>
      )}

      <div
        className={`${styles.productCard} ${styles[productDetails.theme]}`}
        style={cardStyles}
      >
        <div className={styles.imageWrapper}>
          <img
            src={productDetails.image}
            alt={productDetails.name}
            className={styles.productImage}
          />
        </div>
        <h2 className={styles.productTitle} style={titleStyles}>
          {productDetails.name}
        </h2>
        <p className={styles.productDescription} style={descriptionStyles}>
          {productDetails.description}
        </p>
        <div className={styles.productPricing} style={descriptionStyles}>
          <span className={styles.productPrice} style={priceStyles}>
            ${productDetails.price?.toFixed(2) || "0.00"}
          </span>
          <span
            className={styles.productOriginalPrice}
            style={originalPriceStyles}
          >
            ${productDetails.originalPrice?.toFixed(2) || "0.00"}
          </span>
          <span className={styles.productDiscount} style={discountStyles}>
            ({productDetails.discount || 0}% off)
          </span>
        </div>

        <div className={styles.productButtons}>
          <button
            className={`${styles.button} ${styles.buyButton}`}
            style={buttonStyles}
            onClick={() => onBuyNow && onBuyNow(productDetails)}
            aria-label={`Buy ${productDetails.name} now for ${
              productDetails.price?.toFixed(2) || "0.00"
            }`}
          >
            Buy Now
          </button>
          <button
            className={`${styles.button} ${styles.addToBagButton}`}
            style={buttonStyles}
            onClick={() => onAddToBag && onAddToBag(productDetails)}
            aria-label={`Add ${productDetails.name} to bag for ${
              productDetails.price?.toFixed(2) || "0.00"
            }`}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
