```js import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo1 from "../../assets/images/cl-awesome-logo.png";

import { FaSun, FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ toggleTheme }) => {
  // const [frontendDropdownVisible, setFrontendDropdownVisible] = useState(false);
  // const [backendDropdownVisible, setBackendDropdownVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Dropdowns
  // const toggleFrontendDropdown = () => {
  // setFrontendDropdownVisible(!frontendDropdownVisible);
  // setBackendDropdownVisible(false); // Close the other dropdown
  // };

  // const toggleBackendDropdown = () => {
  // setBackendDropdownVisible(!backendDropdownVisible);
  // setFrontendDropdownVisible(false); // Close the other dropdown
  // };

  return (
    <>
      {/_ Burger Menu Button for Mobile_/}
      {isMobile && (
        <button className="burger-menu" onClick={toggleSidebar}>
          {" "}
          <RxHamburgerMenu className="burger-icon" />
        </button>
      )}

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">
          {" "}
          <img src={logo1} alt="Logo" className="nav-logo" />
        </Link>

        <ul>
          <li className="nav-link">
            {" "}
            <Link to="frontend/">Instructions</Link>
          </li>
          <li className="nav-link">
            {" "}
            <Link to="frontend/">Frontend</Link>
          </li>
          <li className="nav-link">
            {" "}
            <Link to="backend/">Backend</Link>
          </li>
          {/* Desktop and iPad Links */}
          {/* <li>
                <div
                  onClick={toggleFrontendDropdown}
                  className="dropdown-toggle"
                >
                  Frontend
                  <span className="arrow">
                    {frontendDropdownVisible ? "▲" : "▼"}
                  </span>
                </div>
                {frontendDropdownVisible && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="frontend/components">Components</Link>
                    </li>
                    <li>
                      <Link to="frontend/hooks">Hooks</Link>
                    </li>
                    <li>
                      <Link to="frontend/routes">Routes</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div
                  onClick={toggleBackendDropdown}
                  className="dropdown-toggle"
                >
                  Backend
                  <span className="arrow">
                    {backendDropdownVisible ? "▲" : "▼"}
                  </span>
                </div>
                {backendDropdownVisible && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="backend/configurations">Configuration</Link>
                    </li>
                    <li>
                      <Link to="backend/controllers">Controllers</Link>
                    </li>
                    <li>
                      <Link to="backend/middlewares">Middleware</Link>
                    </li>
                    <li>
                      <Link to="backend/models">Models</Link>
                    </li>
                    <li>
                      <Link to="backend/tests">Tests</Link>
                    </li>
                    <li>
                      <Link to="backend/utils">Utils</Link>
                    </li>
                    <li>
                      <Link to="backend/envFiles">EnvFile</Link>
                    </li>
                  </ul>
                )}
              </li> */}
        </ul>

        <button onClick={toggleTheme} className="theme-toggle-button">
          {/* Show sun icon for dark mode, moon icon for light mode */}
          {document.body.classList.contains("dark-theme") ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>
        {/* <Button
          radius="md"
          color="secondary"
          className="playground-btn hover:bg-pink-100"
        >
          <Link to="/playground" style={{ color: "white" }}>
            Playground
          </Link>
        </Button> */}
      </nav>
    </>
  );
};

export default Navbar;
```

# Styles

````js
// ul {
//   list-style: none;
//   padding: 0;
//   width: 80%;
//   display: flex;
//   justify-content: space-between;

//   li {
//     width: 100%;
//     position: relative;
//     font-size: 1.2rem;
//     color: styles.$text-color;

//     .nav-link,
//     .dropdown-toggle {
//       cursor: pointer;
//       padding: 10px 15px;
//       color: styles.$text-color;
//       width: 100%;
//       text-align: left;
//       border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//       transition: background-color 0.3s ease, color 0.3s ease;

//       &:hover {
//         background-color: rgba(255, 255, 255, 0.1);
//         border-radius: 5px;
//       }

//       a {
//         color: inherit;
//         text-decoration: none;
//       }

//       .arrow {
//         margin-left: 8px;
//       }
//     }

// .dropdown-menu {
//   display: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   padding: 10px 0;
//   list-style: none;
//   border-radius: 5px;
//   background-color: styles.$primary-color;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   z-index: 10;

//   li {
//     padding: 10px 20px;
//     transition: background-color 0.3s ease;

//     a {
//       color: styles.$text-color;
//       text-decoration: none;
//       display: block;
//     }

//     &:hover {
//       background-color: rgba(255, 255, 255, 0.1);
//       border-radius: 5px;
//     }
//   }
// }

// &:hover .dropdown-menu {
//   display: block;
// }
```
````
