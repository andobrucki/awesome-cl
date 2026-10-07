import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Footer/Footer";
import { sidebarLinks, navbarLinks } from "../../../public/data/links";
import "./Layout.scss";
import { useEffect, useState } from "react";

// Main layout that wraps the entire app, containing the header, sidebar, main content, and footer.
const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  // Detect window resizing to determine mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine which links to display and whether to show the sidebar
  const getSidebarData = () => {
    if (location.pathname.toLowerCase().startsWith("/instructions")) {
      return { links: sidebarLinks.instructions, showSidebar: true };
    }
    if (location.pathname.toLowerCase().startsWith("/frontend")) {
      return { links: sidebarLinks.frontend, showSidebar: true };
    }
    if (location.pathname.toLowerCase().startsWith("/backend")) {
      return { links: sidebarLinks.backend, showSidebar: true };
    }
    return { links: [], showSidebar: false };
  };

  const { links, showSidebar } = getSidebarData();

  return (
    <div className="app-container">
      <Navbar links={navbarLinks} />
      <div className="layout-content">
        {/* Sidebar only visible on non-mobile screens */}
        {showSidebar && !isMobile && <Sidebar links={links} />}
        <main
          className={`content-wrapper ${
            showSidebar && !isMobile ? "sidebarOpen" : "sidebarClosed"
          }`}
        >
          <Outlet />
        </main>
      </div>
      <Footer isSidebarOpen={showSidebar && !isMobile} />
    </div>
  );
};

export default Layout;
