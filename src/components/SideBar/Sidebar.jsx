import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../component_testing/Button/Button";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ links }) => {
  const navigate = useNavigate();
  const [openSubcategories, setOpenSubcategories] = useState({});

  useEffect(() => {
    const initialOpenState = links.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {});
    setOpenSubcategories(initialOpenState);
  }, [links]);

  // Handle category click, toggle subcategory open state and navigate to the first subcategory
  const handleCategoryClick = (index, link) => {
    // First, toggle the subcategory open state
    setOpenSubcategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    // If there are subcategories, navigate to the first one
    if (link.subcategories && link.subcategories.length > 0) {
      const firstSubcategoryPath = link.subcategories[0].path;
      navigate(firstSubcategoryPath); // Navigate to the first subcategory path
    }
  };

  const renderLinks = (items) => {
    return (
      <ul className={styles.sidebarInner}>
        {links.map((link, index) => {
          const isOpen = openSubcategories[index]; // Check if this subcategory is open

          return (
            <li key={index} className={styles.sidebarInnerItem}>
              <div
                className={styles.sidebarMainLinkWrapper}
                onClick={() => handleCategoryClick(index, link)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sidebarMainLink} ${styles.activeLink}` // Add active style
                      : styles.sidebarMainLink
                  }
                >
                  {link.title}
                </NavLink>

                {/* Conditional rendering of the arrow icon */}
                {link.subcategories && link.subcategories.length > 0 && (
                  <>
                    <IoIosArrowBack
                      className={isOpen ? styles.arrowOpen : styles.arrow}
                    />
                  </>
                )}
              </div>

              {/* Render subcategories only if open */}
              {isOpen && link.subcategories && (
                <ul className={styles.sidebarSubCat}>
                  {link.subcategories.map((subLink, subIndex) => (
                    <li key={subIndex} className={styles.sidebarSubCatItem}>
                      <NavLink
                        to={subLink.path}
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.sidebarSubCatLink} ${styles.activeSubLink}`
                            : styles.sidebarSubCatLink
                        }
                      >
                        {subLink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={styles.sidebar}>
      {renderLinks(links)}

      {/* Playground */}
      {/* <Button
        radius="md"
        color="secondary"
        className={`${styles["playground-btn"]} hover:bg-pink-100`}
      >
        <Link to="/playground" style={{ color: "white" }}>
          Playground
        </Link>
      </Button> */}
    </nav>
  );
};

export default Sidebar;
