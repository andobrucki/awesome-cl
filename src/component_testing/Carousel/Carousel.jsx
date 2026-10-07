import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
import { FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNpm,
  SiWebpack,
  SiVite,
} from "react-icons/si";

export default function Carousel({
  images = [
    {
      icon: <FaReact />,
      alt: "React icon",
    },
    {
      icon: <SiJavascript />,
      alt: "JavaScript icon",
    },
    {
      icon: <SiHtml5 />,
      alt: "Html icon",
    },
    {
      icon: <SiCss3 />,
      alt: "Css3 icon",
    },
    {
      icon: <FaGitAlt />,
      alt: "Git icon",
    },
    {
      icon: <FaGithub />,
      alt: "GitHub icon",
    },
    {
      icon: <SiNpm />,
      alt: "Npm icon",
    },
    {
      icon: <FaNodeJs />,
      alt: "NodeJS icon",
    },
    {
      icon: <SiWebpack />,
      alt: "Webpack icon",
    },
    {
      icon: <SiVite />,
      alt: "Vite icon",
    },
  ],
  variant = "classic",
  autoPlay = true,
  interval = 2000,
  showArrows = true,
  showDots = true,
  containerWidth,
  width = 200,
  height = 200,
  gap,
  borderRadius,
  iconSize,
  iconColor,
  backgroundColor = "transparent",
  shadow = false,
  animationDuration = 10,
  enableSwipe = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const nextSlideClassic = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!enableSwipe) return;
    if (touchStart - touchEnd > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    if (touchEnd - touchStart > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (variant === "classic" && autoPlay) {
      const autoPlayInterval = setInterval(() => {
        nextSlideClassic();
      }, interval * 1000);
      return () => clearInterval(autoPlayInterval);
    }
  }, [variant, autoPlay, interval, currentIndex, images.length]);

  useEffect(() => {
    if (variant === "slider" && autoPlay) {
      const scrollInterval = setInterval(() => {
        setScrollPercentage((prev) => (prev + 100 / images.length) % 100);
      }, animationDuration * 1000);

      return () => clearInterval(scrollInterval);
    }
  }, [variant, autoPlay, animationDuration, images.length]);

  const containerStyle = {
    width:
      variant === "classic"
        ? containerWidth
          ? containerWidth
          : `${width}px`
        : containerWidth
        ? containerWidth
        : `${windowWidth}px`,
    height: `${height}px`,
    position: "relative",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: `${backgroundColor}`,
    borderRadius: `${borderRadius}px`,
  };

  const sliderStyle = {
    width: `${width}px`,
    gap: variant !== "classic" ? `${gap}px` : null,
    margin: variant === "classic" ? 0 : `0 ${width}px`,
    color: { iconColor },
    backgroundColor: `${backgroundColor}`,
    borderRadius: `${borderRadius}px`,
    transform:
      variant === "classic" ? `translateX(-${currentIndex * 100}%)` : "",
    animation:
      variant === "slider" && autoPlay
        ? `${styles.scrollLeft} ${animationDuration}s linear infinite alternate`
        : "",
    "--scroll-percentage": `-${images.length * 100}%`,
  };

  const iconStyle = {
    width: "auto",
    fontSize: `${iconSize}px`,
    backgroundColor: `${backgroundColor}`,
    color: `${iconColor}`,
  };

  return (
    <section
      className={styles.carouselContainer}
      style={containerStyle}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ul
        className={
          variant === "slider" ? styles.continuousSlider : styles.carouselSlider
        }
        style={sliderStyle}
      >
        {images.map((image, index) => (
          <li key={index} className={styles.carouselSlide}>
            {!image.url ? (
              <span style={iconStyle} aria-label={image.alt}>
                {shadow ? (
                  <span
                    style={{ filter: "drop-shadow(0px 10px 10px #2e2e2e)" }}
                  >
                    {image.icon}
                  </span>
                ) : (
                  image.icon
                )}
              </span>
            ) : (
              <img
                src={image.url}
                alt={image.alt}
                className={styles.image}
                style={{
                  borderRadius: `${borderRadius}px`,
                  filter: shadow ? `drop-shadow(0px 20px 10px #2e2e2e)` : "",
                }}
              />
            )}
          </li>
        ))}
      </ul>

      {showArrows && variant === "classic" && (
        <>
          <button
            className={styles.prevButton}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            className={styles.nextButton}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </>
      )}

      {showDots && variant === "classic" && (
        <aside className={styles.dotsContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></span>
          ))}
        </aside>
      )}
    </section>
  );
}
