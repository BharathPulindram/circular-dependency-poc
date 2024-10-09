import React, { useEffect, useState } from "react";
import HelperComponent from "@utils/HelperComponent";
import { logMessage } from "@utils/logger";

// Dynamically import List using Webpack's lazy loading
const loadList = () =>
  import("@components/List").then((module) => module.default);

const Button = () => {
  const [ListComponent, setListComponent] = useState(null);

  useEffect(() => {
    logMessage("Button rendered");
    loadList()
      .then((component) => {
        console.log("List component dynamically loaded:", component);
        setListComponent(() => component);
      })
      .catch((err) => {
        console.error("Error loading List:", err);
      });
  }, []);

  return (
    <div>
      <button>Button Component</button>
      <HelperComponent message="Button Helper" />
      {ListComponent && <ListComponent />}
    </div>
  );
};

export default Button;
