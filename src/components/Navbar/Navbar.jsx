import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.scss";
import logo1 from "../../assets/images/awesome-logo1.png";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";
import { sidebarLinks } from "../../../public/data/links.js";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      // Automatically open all sections in the mobile menu
      const allSectionsOpen = Object.keys(sidebarLinks).reduce(
        (acc, section) => {
          acc[section] = true;
          return acc;
        },
        {}
      );
      setSubmenuOpen(allSectionsOpen);
    }
  };

  // Navigate to the first component or path for a section
  const navigateToFirstComponent = (section) => {
    const firstComponentPath =
      sidebarLinks[section]?.[0]?.subcategories?.[0]?.path || // First subcategory path
      sidebarLinks[section]?.[0]?.path || // First section path
      `/${section}`; // Default fallback to section route

    navigate(firstComponentPath);
    setMenuOpen(false); // Close the menu after navigation
  };

  // Toggle submenu visibility
  const toggleSubmenu = (section) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <Link to="/" className="navbarLogo">
          <img src={logo1} alt="Logo" />
        </Link>
        {!isMobile && (
          <ul className="navbarLinks">
            {Object.keys(sidebarLinks).map((section, index) => (
              <li key={index} className="navbarLinkItem">
                <button
                  onClick={() => navigateToFirstComponent(section)}
                  className="navbarLink"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="navbarRight">
        <SearchBar className="navbarSearch" />
        <button onClick={toggleTheme} className="themeToggle">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        {isMobile && (
          <button className="menuToggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          <button className="closeMenuButton" onClick={toggleMenu}>
            <FaTimes />
          </button>
          {Object.keys(sidebarLinks).map((section, index) => (
            <div key={index} className="mobileMenuSection">
              <div
                className="mobileMenuTitle"
                onClick={() => toggleSubmenu(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="submenuToggleIcon">
                  {submenuOpen[section] ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
              </div>
              {submenuOpen[section] && (
                <ul className="mobileMenuLinks">
                  {sidebarLinks[section].map((link, subIndex) => (
                    <li key={subIndex} className="mobileMenuLinkItem">
                      <button
                        className="mobileMenuLink"
                        onClick={() => navigateToFirstComponent(section)}
                      >
                        {link.title}
                      </button>
                      {link.subcategories && (
                        <ul className="mobileMenuSubLinks">
                          {link.subcategories.map((sublink, subSubIndex) => (
                            <li
                              key={subSubIndex}
                              className="mobileMenuSubLinkItem"
                            >
                              <Link
                                to={sublink.path}
                                className="mobileMenuSubLink"
                                onClick={toggleMenu}
                              >
                                {sublink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
