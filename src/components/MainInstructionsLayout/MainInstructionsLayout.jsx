import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode/RenderCode";

export function MainInstructionsLayout({ data }) {
  return (
    <>
      <h1>Hello, this is the page for instructions & how to get started</h1>
      <RenderCode code={component.import.code} />
    </>
  );
}
