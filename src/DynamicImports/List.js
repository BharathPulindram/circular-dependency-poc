import React, { useEffect, useState } from "react";
import HelperComponent from "@utils/HelperComponent";
import { logMessage } from "@utils/logger";

// Dynamically import Button using Webpack's lazy loading
const loadButton = () =>
  import("@components/Button").then((module) => module.default);

const List = () => {
  const [ButtonComponent, setButtonComponent] = useState(null);

  useEffect(() => {
    logMessage("List rendered");
    loadButton()
      .then((component) => {
        console.log("Button component dynamically loaded:", component);
        setButtonComponent(() => component);
      })
      .catch((err) => {
        console.error("Error loading Button:", err);
      });
  }, []);

  return (
    <div>
      <ul>
        <li>List Component</li>
        <HelperComponent message="List Helper" />
      </ul>
      {ButtonComponent && <ButtonComponent />}
    </div>
  );
};

export default List;
