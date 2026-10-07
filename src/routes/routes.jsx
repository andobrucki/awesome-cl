import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import Playground from "../components/Playground/Playground";
import NotFound from "../components/NotFound/NotFound";
import { RenderPages } from "../components/renderers/RenderPages/RenderPages";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Introduction from "../pages/Instructions/Introduction";
import GettingStarted from "../pages/Instructions/GettingStarted";
import Customization from "../pages/Instructions/Customization";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import LegalNotice from "../pages/LegalNotice/LegalNotice";

export default function MainRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* Home page route */}
          <Route index path="/" element={<HomePage />} />

          {/* Frontend routes */}
          <Route path="frontend">
            <Route
              index
              element={<RenderPages file={"frontend/components/accordion"} />}
            />
            <Route
              path="components/*"
              element={<RenderPages file={"frontend/components"} />}
            />
            <Route
              path="hooks/*"
              element={<RenderPages file={"frontend/hooks"} />}
            />
            <Route
              path="routes/*"
              element={<RenderPages file={"frontend/routes"} />}
            />
          </Route>

          {/* Backend routes */}
          <Route path="backend">
            <Route
              index
              element={<RenderPages file={"backend/configurations"} />}
            />
            <Route
              path="configurations/*"
              element={<RenderPages file={"backend/configurations"} />}
            />
            <Route
              path="controllers/*"
              element={<RenderPages file={"backend/controllers"} />}
            />
            <Route
              path="middlewares/*"
              element={<RenderPages file={"backend/middlewares"} />}
            />
            <Route
              path="models/*"
              element={<RenderPages file={"backend/models"} />}
            />
            <Route
              path="tests/*"
              element={<RenderPages file={"backend/tests"} />}
            />
            <Route
              path="utils/*"
              element={<RenderPages file={"backend/utils"} />}
            />
            <Route
              path="envFiles/*"
              element={<RenderPages file={"backend/envFiles"} />}
            />
          </Route>

          {/* ADD ADD ADD: Instruction routes */}
          <Route path="instructions">
            <Route index element={<Introduction />} />
            <Route path="introduction/*" element={<Introduction />} />
            <Route path="getting-started/*" element={<GettingStarted />} />
            <Route path="customization/*" element={<Customization />} />
          </Route>

          {/* Playground route */}
          <Route path="playground" element={<Playground />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="legalnotice" element={<LegalNotice />} />
        </Route>
      </Routes>
    </Router>
  );
}
