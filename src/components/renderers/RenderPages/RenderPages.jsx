import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
import { fetchData } from "../../../hooks/hooks";
//import { SideBar } from "../../SideBar/Sidebar";
import { useLocation } from "react-router-dom";
import { MainBackendLayout } from "../../MainBackendLayout/MainBackendLayout";
import { MainFrontendLayout } from "../../MainFrontendLayout/MainFrontendLayout";
import { MainInstructionsLayout } from "../../MainInstructionsLayout/MainInstructionsLayout";

export function RenderPages({ file }) {
  let location = useLocation();
  let { data, loading, error } = fetchData(`/data/${file}.json`);
  const [pageType, setPageType] = useState(null);
  // const [were, setWere] = useState(true);
  useEffect(() => {
    const path = file.split("/");
    if (path[0] === "backend") {
      setPageType("backend");
    } else if (path[0] === "frontend") {
      setPageType("frontend");
    } else if (path[0] === "instructions") {
      setPageType("instructions");
    }
  }, [file]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // Ensure that rendering doesn't occur before data is loaded
  if (!data || data.length === 0) return <p>No data available</p>;

  let LayoutComponent;

  const applyLastPathSegmentLogic = () => {
    const lastPathSegment = location.pathname.split("/").at(-1);
    data = data.find((comp) => comp.title === lastPathSegment);
  };
  switch (pageType) {
    case "backend":
      LayoutComponent = MainBackendLayout;
      applyLastPathSegmentLogic();
      break;
    case "frontend":
      LayoutComponent = MainFrontendLayout;
      applyLastPathSegmentLogic();
      break;
    case "instructions":
      LayoutComponent = MainInstructionsLayout;
      break;
    default:
      return <p>Unknown page type</p>;
  }

  return <LayoutComponent data={data} />;
}
