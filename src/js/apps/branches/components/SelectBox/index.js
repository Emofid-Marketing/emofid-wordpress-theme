import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import SelectBox from "./index.jsx";

function SelectBoxPortal() {
  const el = document.createElement("div");
  const componentRoot = document.getElementById("branches-select-city-wrapper");

  useEffect(() => {
    componentRoot.appendChild(el);
  }, []);

  const template = <SelectBox />;

  return createPortal(template, el);
}

export default SelectBoxPortal;
